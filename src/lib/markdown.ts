import fs from 'node:fs';
import path from 'node:path';

/**
 * Minimal Markdown subset used by the whitepaper sources: headings, paragraphs,
 * lists, quotes, rules, figures and tables. Output is a typed block list that
 * React renders without raw HTML injection.
 */
export type Block =
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'h4'; text: string }
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'bq'; text: string }
  | { t: 'hr' }
  | { t: 'img'; alt: string; src: string; caption?: string; width?: number; height?: number; illustration?: boolean }
  | { t: 'table'; head: string[]; rows: string[][] };

function decodeEntities(t: string) {
  return t.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

const CAPTION_START = /^\*{1,2}(Abb\.|Abbildung|Fig\.|Figure)/;

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());
}

export function parseMarkdown(source: string): Block[] {
  const text = source
    .replace(/^﻿/, '')
    .replace(/\r\n/g, '\n')
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const lines = text.split('\n');
  const blocks: Block[] = [];

  const isSpecial = (l: string) =>
    /^(#{1,4} |<figure|> |[-*] |\d+\. |---$|!\[|\|)/.test(l);

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    if (line.startsWith('# ')) { i++; continue; }
    if (line.startsWith('## ')) { blocks.push({ t: 'h2', text: line.slice(3).trim() }); i++; continue; }
    if (line.startsWith('#### ')) { blocks.push({ t: 'h4', text: line.slice(5).trim() }); i++; continue; }
    if (line.startsWith('### ')) { blocks.push({ t: 'h3', text: line.slice(4).trim() }); i++; continue; }
    if (line.trim() === '---') { blocks.push({ t: 'hr' }); i++; continue; }

    if (line.startsWith('<figure')) {
      const parts: string[] = [];
      while (i < lines.length) {
        parts.push(lines[i]);
        if (lines[i].includes('</figure>')) { i++; break; }
        i++;
      }
      const html = parts.join(' ');
      const attr = (name: string) => html.match(new RegExp(`${name}="([^"]*)"`))?.[1];
      const src = attr('src');
      if (src) {
        blocks.push({
          t: 'img',
          src,
          alt: decodeEntities(attr('alt') ?? ''),
          width: Number(attr('width')) || undefined,
          height: Number(attr('height')) || undefined,
          caption: decodeEntities(html.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1].trim() ?? ''),
          illustration: true,
        });
      }
      continue;
    }

    if (line.startsWith('>')) {
      const parts: string[] = [];
      while (i < lines.length && lines[i].startsWith('>')) {
        parts.push(lines[i].replace(/^>\s?/, '').trim());
        i++;
      }
      blocks.push({ t: 'bq', text: parts.filter(Boolean).join(' ') });
      continue;
    }

    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) { items.push(lines[i].slice(2).trim()); i++; }
      blocks.push({ t: 'ul', items });
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\.\s+/, '').trim()); i++; }
      blocks.push({ t: 'ol', items });
      continue;
    }

    const img = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/);
    if (img) { blocks.push({ t: 'img', alt: img[1], src: img[2] }); i++; continue; }

    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) { rows.push(splitRow(lines[i])); i++; }
      const body = rows.filter((r) => !r.every((c) => /^:?-{3,}:?$/.test(c)));
      blocks.push({ t: 'table', head: body[0], rows: body.slice(1) });
      continue;
    }

    const parts: string[] = [];
    while (i < lines.length && lines[i].trim() && (parts.length === 0 || !isSpecial(lines[i]))) {
      // two trailing spaces are a hard line break in Markdown
      parts.push(lines[i].trim() + (lines[i].endsWith('  ') ? '\n' : ' '));
      i++;
    }
    blocks.push({ t: 'p', text: parts.join('').trim() });
  }

  // A paragraph that starts with "Abb./Fig." right after an image is its caption.
  const merged: Block[] = [];
  for (const b of blocks) {
    const prev = merged[merged.length - 1];
    if (b.t === 'p' && prev?.t === 'img' && !prev.caption && CAPTION_START.test(b.text)) {
      prev.caption = b.text;
    } else {
      merged.push(b);
    }
  }
  return merged;
}

/** Reads a markdown source from src/content/<locale>/<area>/<slug>.md at build time. */
export function readContent(locale: 'de' | 'en', area: string, slug: string): string {
  return fs.readFileSync(path.join(process.cwd(), 'src', 'content', locale, area, `${slug}.md`), 'utf8');
}
