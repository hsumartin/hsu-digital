// Verifies that no word of a published text gets lost on its way into the site.
// Compares every word of src/content/**/*.md with the words of the built page in out/.
// Run `npm run build` first, then `npm run check:content`. Exit code 1 if any word is missing.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const AREAS = [
  { dir: 'src/content/de/schriften', out: 'out/schriften' },
  { dir: 'src/content/en/whitepaper', out: 'out/en/whitepaper' },
];

const decode = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

const words = (text) =>
  text
    .split(/\s+/)
    .map((w) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''))
    .filter(Boolean);

// Strips Markdown syntax that is intentionally not visible text: front matter, comments,
// image alt text and link targets (attributes), list numbers (rendered as markers), the h1 title.
function visibleSource(md) {
  return md
    .split('\r\n').join('\n')
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/<img[^>]*>/g, ' ')
    .replace(/<\/?(figure|figcaption)[^>]*>/g, ' ')
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
    .replace(/^\d+\. /gm, '')
    .replace(/^# .*$/m, '')
    .replace(/[*`>#|]/g, ' ');
}

let missingTotal = 0;
for (const { dir, out } of AREAS) {
  for (const file of fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith('.md'))) {
    const page = path.join(ROOT, out, file.replace(/\.md$/, '.html'));
    if (!fs.existsSync(page)) {
      console.log(`MISSING PAGE  ${path.join(out, file.replace(/\.md$/, '.html'))} (run "npm run build" first)`);
      missingTotal += 1;
      continue;
    }
    const available = new Map();
    for (const w of words(decode(fs.readFileSync(page, 'utf8')))) available.set(w, (available.get(w) ?? 0) + 1);

    const source = words(visibleSource(fs.readFileSync(path.join(ROOT, dir, file), 'utf8')));
    const missing = new Map();
    for (const w of source) {
      const n = available.get(w) ?? 0;
      if (n > 0) available.set(w, n - 1);
      else missing.set(w, (missing.get(w) ?? 0) + 1);
    }
    const count = [...missing.values()].reduce((a, b) => a + b, 0);
    missingTotal += count;
    console.log(`${count === 0 ? 'ok     ' : 'MISSING'} ${file}  (${source.length} words, ${count} missing)`);
    if (count) console.log('        ' + [...missing.entries()].slice(0, 30).map(([w, n]) => `${w}×${n}`).join(' '));
  }
}
process.exit(missingTotal ? 1 : 0);
