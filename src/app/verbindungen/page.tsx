import { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import SectionLabel from '@/components/ui/SectionLabel';
import GraphExplorer from '@/components/graph/GraphExplorer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verbindungen · Martin Hsu',
  description:
    'Interaktive Systemkarte: Projekte, Schriften und Wissensfelder zwischen Architektur, Verwaltung und KI.',
  alternates: { canonical: '/verbindungen' },
};

export default function VerbindungenPage() {
  return (
    <PageShell>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="relative pt-24 pb-[3.25rem] border-b border-stone-200 overflow-hidden">
        {/* Grid-Hintergrundlayer — maskiert, pointer-events-frei */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(43,104,149,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(43,104,149,0.10) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(110% 75% at 22% 0%, #000 22%, transparent 66%)',
            WebkitMaskImage: 'radial-gradient(110% 75% at 22% 0%, #000 22%, transparent 66%)',
          }}
        />
        <div className="relative z-10 max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
          <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-stone-400 mb-6">
            <b className="text-gold-600 font-medium">Verbindungen</b>
            {' · '}Projekte · Schriften · Wissensfelder
          </p>
          <SectionLabel num="05">Verbindungen</SectionLabel>

          <div className="grid grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.8fr)] gap-12 items-end max-[860px]:grid-cols-1 max-[860px]:gap-6">
            <div>
              <h1 className="font-serif font-normal text-[clamp(3rem,6vw,5rem)] leading-[1.05] tracking-[-0.025em] max-w-[11ch] pb-[0.08em]">
                Alles hängt <em className="italic text-gold-600">zusammen.</em>
              </h1>
            </div>
            <div>
              <p className="text-[1.04rem] leading-[1.72] text-stone-700 font-light max-w-[44ch]">
                Projekte, Schriften, Methoden und Arbeitsfelder sind keine getrennten Bereiche.
                Die Karte zeigt, welche{' '}
                <b className="text-ink font-medium">Themen, Prinzipien und Artefakte</b>{' '}
                zwischen ihnen vermitteln.
              </p>
            </div>
          </div>

          {/* MetadataRecord */}
          <div
            className="grid grid-cols-4 border border-stone-200 bg-[#F8F7F3] mt-8 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1"
            aria-label="Verbindungen-Metadaten"
          >
            {[
              { key: 'Projekte', val: '6 Einträge', gold: false },
              { key: 'Schriften', val: '4 Einträge', gold: false },
              { key: 'Themen', val: '12 Knoten', gold: true },
              { key: 'Logik', val: 'Graph · Readout', gold: false },
            ].map(({ key, val, gold }, i, arr) => (
              <div
                key={key}
                className={[
                  'px-[1.1rem] py-[0.95rem] min-h-[4.9rem]',
                  i < arr.length - 1 ? 'border-r border-stone-200' : '',
                ].join(' ')}
              >
                <span className="block font-mono text-[0.56rem] tracking-[0.13em] uppercase text-stone-400 mb-[0.42rem]">
                  {key}
                </span>
                <span
                  className={[
                    'block font-mono text-[0.76rem] leading-[1.45]',
                    gold ? 'text-gold-600' : 'text-blue-800',
                  ].join(' ')}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* ── Systemkarte ───────────────────────────────────────────────────── */}
        <section
          id="systemkarte"
          className="border-b border-stone-200"
        >
          <div className="grid-aside-content max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[4.5rem] gap-16 items-start">
            <aside className="sticky top-24 self-start max-[899px]:static">
              <SectionLabel num="01">Systemkarte</SectionLabel>
              <h2 className="font-serif font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.18] tracking-[-0.01em] pb-[0.06em]">
                Themenkarte als vertiefte Verbindungssektion
              </h2>
              <p className="mt-4 text-[0.92rem] leading-[1.7] text-stone-700 font-light">
                Die bestehende Graphlogik bleibt erhalten. Migriert wurden Navigation, Typografie,
                Tokens, Filterdarstellung, Panel und Seitenfluss.
              </p>
            </aside>
            <div>
              <GraphExplorer />
            </div>
          </div>
        </section>

        {/* ── Lesart ────────────────────────────────────────────────────────── */}
        <section
          id="logik"
          className="border-b border-stone-200"
        >
          <div className="grid-aside-content max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[4.5rem] gap-16 items-start">
            <aside className="sticky top-24 self-start max-[899px]:static">
              <SectionLabel num="02">Lesart</SectionLabel>
              <h2 className="font-serif font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.18] tracking-[-0.01em] pb-[0.06em]">
                Vom Katalog zur Beziehung
              </h2>
              <p className="mt-4 text-[0.92rem] leading-[1.7] text-stone-700 font-light">
                Die Verbindungsseite ergänzt Projektindex und Schriftenindex. Sie zeigt nicht mehr
                Inhalte, sondern deren Zusammenhänge.
              </p>
            </aside>

            {/* ConnectionBlock */}
            <div className="grid-connection-block border border-stone-200 bg-[#F8F7F3]">
              {[
                {
                  title: 'Projekte',
                  items: [
                    'CivitasFlow und GIS-Suchfunktion bilden die Verwaltungsachse.',
                    'Architekturprojekte zeigen Denk- und Formprozesse.',
                  ],
                  link: { href: '/projekte', label: 'Zum Projektindex' },
                },
                {
                  title: 'Schriften',
                  items: [
                    'GPT-Stack, Decision Layer, KI-Governance und Denkarchitektur tragen die Reflexionsebene.',
                  ],
                  link: { href: '/schriften', label: 'Zum Schriftenindex' },
                },
                {
                  title: 'Themen',
                  items: [
                    'Systemdenken, Wissensstruktur, Governance, GIS und Architekturpraxis verbinden Projekte und Texte.',
                    'Der Graph macht diese Querbezüge sichtbar.',
                  ],
                  link: null,
                },
              ].map(({ title, items, link }) => (
                <div key={title} className="bg-[#FBFAF7] px-[1.35rem] py-[1.25rem]">
                  <h3 className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-gold-600 mb-[0.85rem]">
                    {title}
                  </h3>
                  <ul className="list-none grid gap-[0.55rem]">
                    {items.map((item) => (
                      <li key={item} className="text-[0.9rem] leading-[1.5] text-stone-700 font-light">
                        {item}
                      </li>
                    ))}
                    {link && (
                      <li>
                        <Link
                          href={link.href}
                          className="text-[0.9rem] text-blue-800 border-b border-[rgba(43,104,149,0.22)] no-underline hover:text-blue-900 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Abschluss / ContactPanel ───────────────────────────────────────── */}
        <section className="py-[4.5rem]">
          <div className="max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <div
              className="bg-blue-800 text-[#F5F4F0] border border-[#183B55] p-[clamp(2rem,4vw,3rem)]
                         grid grid-cols-[1.4fr_1fr] gap-10 items-start max-[760px]:grid-cols-1"
            >
              <div>
                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.1rem)] leading-[1.25] tracking-[-0.01em] text-[#F5F4F0]">
                  Verbindungen als{' '}
                  <em className="italic text-[#F0E1B5]">Systemkarte</em>, nicht als Effekt.
                </h2>
              </div>
              <div>
                <p className="text-[1rem] leading-[1.72] text-[rgba(244,242,236,0.72)] font-light">
                  Die Karte bleibt ruhig und funktional. Sie erweitert die Startseite, ohne eine
                  neue Anwendung oder ein zweites Designsystem zu eröffnen.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  {[
                    { href: '/', label: 'Zur Startseite' },
                    { href: '/projekte', label: 'Zu den Projekten' },
                    { href: '/schriften', label: 'Zu den Schriften' },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem] hover:text-[#F0E1B5] transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
