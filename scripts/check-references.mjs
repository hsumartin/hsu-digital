// Checks the DOIs and arXiv ids cited in src/content/**/*.md against Crossref and arXiv.
// Verifies that the registered title, first author and (where cited) volume/pages match the citation.
// Needs network access: `npm run check:refs`. Exit code 1 if a DOI/arXiv id cannot be resolved or a title differs.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIRS = ['src/content/de/schriften', 'src/content/en/whitepaper'];
const LIT_HEADING = /^## (Literatur|Wissenschaftliche Literatur|Literature|Academic References|References|Literaturgrundlage)/m;

const norm = (t) =>
  t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// One entry per distinct DOI / arXiv id, taken from the literature lists.
const entries = new Map();
for (const dir of DIRS) {
  for (const file of fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith('.md'))) {
    const text = fs.readFileSync(path.join(ROOT, dir, file), 'utf8').split('\r\n').join('\n');
    const start = text.search(LIT_HEADING);
    if (start < 0) continue;
    for (const line of text.slice(start).split('\n').filter((l) => l.startsWith('- ') || l.startsWith('['))) {
      const plain = line.replace(/\*/g, '');
      const doi = plain.match(/doi\.org\/(10\.[^\s)\]]+[^\s).,;\]])/);
      const arxiv = plain.match(/arxiv\.org\/abs\/(\d{4}\.\d{4,5})/i) ?? plain.match(/arXiv:(\d{4}\.\d{4,5})/i);
      const key = doi ? `doi:${doi[1]}` : arxiv ? `arxiv:${arxiv[1]}` : null;
      if (key && !entries.has(key)) entries.set(key, plain.replace(/[–—]/g, '-'));
    }
  }
}

let problems = 0;
const report = (level, key, msg) => {
  if (level !== 'ok') problems += 1;
  console.log(`${level.padEnd(6)} ${key}${msg ? '  ' + msg : ''}`);
};

for (const [key, cited] of entries) {
  await sleep(500); // stay polite towards the public APIs
  try {
    let title = '';
    let firstAuthor = '';
    let volume = '';
    let pages = '';
    if (key.startsWith('doi:')) {
      const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(key.slice(4))}`);
      if (!res.ok) { report('FAIL', key, `Crossref HTTP ${res.status}`); continue; }
      const work = (await res.json()).message;
      title = work.title?.[0] ?? '';
      firstAuthor = work.author?.[0]?.family ?? '';
      volume = work.volume ?? '';
      pages = (work.page ?? '').replace(/[–—]/g, '-');
    } else {
      const res = await fetch(`https://export.arxiv.org/api/query?id_list=${key.slice(6)}`);
      const xml = await res.text();
      const m = xml.match(/<entry>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<name>([^<]+)<\/name>/);
      if (!m) { report('FAIL', key, 'arXiv id not found'); continue; }
      title = m[1].replace(/\s+/g, ' ').trim();
      firstAuthor = m[2].split(' ').pop();
    }
    const notes = [];
    const titleWords = norm(title).split(' ').filter((w) => w.length > 3);
    const hit = titleWords.filter((w) => norm(cited).includes(w)).length;
    if (titleWords.length && hit / titleWords.length < 0.8) notes.push(`title differs: "${title.slice(0, 70)}"`);
    if (firstAuthor && !norm(cited).includes(norm(firstAuthor))) notes.push(`first author ${firstAuthor} not in citation`);
    if (volume && /\d/.test(volume) && !cited.includes(`${volume},`) && !cited.includes(`${volume}(`) && !cited.includes(` ${volume} `)) {
      notes.push(`volume ${volume} not in citation`);
    }
    if (pages && cited.includes('), ') && !cited.includes(pages)) notes.push(`pages ${pages} not in citation`);
    report(notes.length ? 'CHECK' : 'ok', key, notes.join(' | '));
  } catch (err) {
    report('FAIL', key, String(err.cause?.code ?? err.message));
  }
}
console.log(`\n${entries.size} references checked, ${problems} to review.`);
process.exit(problems ? 1 : 0);
