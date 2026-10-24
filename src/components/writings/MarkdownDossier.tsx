import { ReactNode } from 'react';
import PageShell from '@/components/layout/PageShell';
import WritingHeader from '@/components/writings/WritingHeader';
import WritingRecord from '@/components/writings/WritingRecord';
import WritingSection from '@/components/writings/WritingSection';
import WritingFigure from '@/components/writings/WritingFigure';
import WritingConnections from '@/components/writings/WritingConnections';
import WritingHandoffs from '@/components/writings/WritingHandoffs';
import WritingNextNav from '@/components/writings/WritingNextNav';
import Inline from '@/components/writings/Inline';
import { Block, parseMarkdown } from '@/lib/markdown';

type Locale = 'de' | 'en';

const UI = {
  de: {
    kicker: 'Schrift · Whitepaper',
    section: 'Schriftendetail',
    back: 'Zurück zu Schriften',
    toc: 'Inhalt',
    tocAria: 'Inhaltsnavigation',
    chapter: 'Kapitel',
    figure: 'ABB.',
    zoom: 'Vergrössern ↗',
    connections: 'Verbindungen',
    handoffs: 'Weiterführung',
    navAll: 'Alle Schriften',
    navAria: 'Schriften-Navigation',
  },
  en: {
    kicker: 'Writing · Whitepaper',
    section: 'Writing detail',
    back: 'Back to writings',
    toc: 'Contents',
    tocAria: 'Table of contents',
    chapter: 'Chapter',
    figure: 'FIG.',
    zoom: 'Enlarge ↗',
    connections: 'Connections',
    handoffs: 'Continue reading',
    navAll: 'All writings',
    navAria: 'Writings navigation',
  },
} as const;

interface NavItem { label: string; kicker?: string; href: string }

interface MarkdownDossierProps {
  locale: Locale;
  markdown: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  lead: string;
  tags: Array<{ label: string; variant?: 'gold' | 'blue' | 'default' }>;
  record: Array<{ key: string; value: string }>;
  connections: Array<{ title: string; items: Array<{ label: string; href?: string }> }>;
  alternate?: { href: string; label: string; lang: string };
  hero?: { src: string; alt: string };
  handoffs?: Array<{ text: string; href: string; label: string }>;
  prev?: NavItem;
  next?: NavItem;
}

interface Section { id: string; num: string; label: string; title?: string; reference: boolean; blocks: Block[] }

const REFERENCE_HEADING = /^(Literatur|References|Bibliograph|Quellen|Sources)/i;

function slug(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** Blocks before the first "##" are title and subtitle, which come from the metadata instead. */
function buildSections(blocks: Block[], chapterWord: string): Section[] {
  const sections: Section[] = [];
  for (const b of blocks) {
    if (b.t === 'h2') {
      const m = b.text.match(/^(\d+)\.\s+(.*)$/);
      const n = String(sections.length + 1).padStart(2, '0');
      sections.push({
        id: m ? `kap${m[1]}` : slug(b.text),
        num: n,
        label: m ? `${chapterWord} ${m[1]}` : b.text,
        title: m ? m[2] : undefined,
        reference: REFERENCE_HEADING.test(b.text),
        blocks: [],
      });
    } else if (sections.length) {
      sections[sections.length - 1].blocks.push(b);
    }
  }
  return sections;
}

function Prose({
  blocks,
  reference,
  figureLabel,
  figureStart,
  zoomLabel,
}: {
  blocks: Block[];
  reference: boolean;
  figureLabel: string;
  figureStart: number;
  zoomLabel: string;
}) {
  let figureNo = figureStart;
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h3':
            return (
              <h3 key={i} className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-blue-700 mt-8 mb-3 max-w-[66ch]">
                {b.text}
              </h3>
            );
          case 'p':
            return (
              <p
                key={i}
                className={
                  reference
                    ? 'text-[0.88rem] leading-[1.7] text-stone-700 font-light mb-[0.9rem] break-words max-w-[66ch]'
                    : 'text-[1rem] leading-[1.85] text-stone-700 font-light mb-[1.25rem] max-w-[66ch]'
                }
              >
                <Inline text={b.text} />
              </p>
            );
          case 'bq': {
            // "**Label** text" renders the label as a small caption above the quote
            const labelled = b.text.match(/^\*\*([^*]+)\*\*\s+([\s\S]*)$/);
            return (
              <blockquote
                key={i}
                className="border-l-2 border-gold-500 pl-6 my-8 max-w-[66ch] font-serif text-[1.05rem] italic leading-[1.75] tracking-[0.015em] text-stone-900"
              >
                {labelled && (
                  <span className="block not-italic font-mono text-[0.62rem] tracking-[0.18em] uppercase text-gold-600 mb-2">
                    {labelled[1]}
                  </span>
                )}
                <Inline text={labelled ? labelled[2] : b.text} />
              </blockquote>
            );
          }
          case 'ul':
          case 'ol': {
            const List = b.t;
            return (
              <List
                key={i}
                className={`${b.t === 'ul' ? 'list-disc' : 'list-decimal'} pl-6 mb-[1.25rem] max-w-[66ch] grid gap-[0.45rem] ${reference ? 'text-[0.88rem] leading-[1.7] break-words' : 'text-[1rem] leading-[1.75]'} text-stone-700 font-light marker:text-gold-600`}
              >
                {b.items.map((item, j) => (
                  <li key={j}><Inline text={item} /></li>
                ))}
              </List>
            );
          }
          case 'img': {
            figureNo += 1;
            return (
              <WritingFigure
                key={i}
                label={`${figureLabel} ${String(figureNo).padStart(2, '0')}`}
                type="FigurePlate · diagram"
                alt={b.alt}
                src={b.src}
                caption={<Inline text={b.caption ?? b.alt} />}
                width={1200}
                height={700}
                zoomLabel={zoomLabel}
              />
            );
          }
          case 'table':
            return (
              <div key={i} className="border border-stone-200 bg-[#F8F7F3] my-[1.8rem] overflow-auto">
                <table className="w-full border-collapse" style={{ minWidth: 540 }}>
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} className="font-mono text-[0.58rem] tracking-[0.09em] uppercase font-medium text-stone-600 px-4 py-[0.78rem] text-left border-b border-stone-200">
                          <Inline text={h} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r} className="border-t border-stone-100 first:border-t-0">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-[0.7rem] align-top text-[0.88rem] leading-[1.6] text-stone-700 font-light">
                            <Inline text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null; // 'hr': sections already carry a divider
        }
      })}
    </>
  );
}

export default function MarkdownDossier(props: MarkdownDossierProps) {
  const ui = UI[props.locale];
  const sections = buildSections(parseMarkdown(props.markdown), ui.chapter);
  let seenFigures = 0;
  const figuresBefore = new Map<string, number>();
  for (const s of sections) {
    figuresBefore.set(s.id, seenFigures);
    seenFigures += s.blocks.filter((b) => b.t === 'img').length;
  }
  const handoffsNum = String(sections.length + 1).padStart(2, '0');
  const connectionsNum = String(sections.length + (props.handoffs ? 2 : 1)).padStart(2, '0');

  return (
    <PageShell>
      <div lang={props.locale}>
      <WritingHeader
        eyebrow={props.eyebrow}
        title={props.title}
        subtitle={props.subtitle}
        lead={props.lead}
        tags={props.tags}
        longTitle
        labels={{ kicker: ui.kicker, section: ui.section, back: ui.back }}
        alternate={props.alternate}
        hero={props.hero}
      />

      <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <WritingRecord items={props.record} />
      </div>

      <div className="grid grid-cols-[220px_1fr] gap-16 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[4.8rem] pb-24 max-[960px]:grid-cols-1 max-[960px]:gap-10">
        <aside className="sticky top-24 self-start max-[960px]:static" aria-label={ui.tocAria}>
          <div className="border border-stone-200 bg-[#F8F7F3] p-[1.1rem_1.15rem]">
            <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-gold-600 mb-[0.85rem]">{ui.toc}</div>
            <ol className="list-none grid gap-[0.3rem] max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
              {[...sections.map((s) => ({ id: s.id, num: s.num, text: s.title ?? s.label })),
                ...(props.handoffs ? [{ id: 'weiterfuehrung', num: handoffsNum, text: ui.handoffs }] : []),
                { id: 'verbindungen', num: connectionsNum, text: ui.connections }].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex gap-[0.65rem] items-baseline py-[0.4rem] no-underline font-mono text-[0.65rem] tracking-[0.04em] text-stone-600 hover:text-stone-900 transition-colors">
                    <span className="text-blue-700 shrink-0">{item.num}</span>
                    <span className="leading-tight">{item.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="min-w-0">
          {sections.map((s) => (
            <WritingSection key={s.id} id={s.id} num={s.num} label={s.label}>
              <div>
                {s.title && (
                  <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                    {s.title}
                  </h2>
                )}
                <Prose
                  blocks={s.blocks}
                  reference={s.reference}
                  figureLabel={ui.figure}
                  figureStart={figuresBefore.get(s.id) ?? 0}
                  zoomLabel={ui.zoom}
                />
              </div>
            </WritingSection>
          ))}

          {props.handoffs && (
            <WritingSection id="weiterfuehrung" num={handoffsNum} label={ui.handoffs}>
              <WritingHandoffs items={props.handoffs} />
            </WritingSection>
          )}

          <WritingSection id="verbindungen" num={connectionsNum} label={ui.connections}>
            <WritingConnections cols={props.connections} />
          </WritingSection>

          <WritingNextNav
            prev={props.prev}
            next={props.next}
            labels={{ all: ui.navAll, aria: ui.navAria }}
          />
        </div>
      </div>
      </div>
    </PageShell>
  );
}
