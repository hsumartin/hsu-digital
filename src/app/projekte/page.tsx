import { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import SectionLabel from '@/components/ui/SectionLabel';
import CategoryBar from '@/components/projects/CategoryBar';
import ProjectIndexCard from '@/components/projects/ProjectIndexCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projekte · Martin Hsu',
  description:
    'Ausgewählte Arbeiten als strukturierte Dossiers: mit Status, Domäne, Rolle, Artefakten und Verbindungen.',
  alternates: { canonical: '/projekte' },
};

const featuredProjects = projects.filter((p) => p.featured);
const catalogProjects = projects.filter((p) => !p.featured);

export default function ProjektePage() {
  return (
    <PageShell>
      {/* ── Header ── */}
      <header className="relative pt-24 pb-[3.25rem] border-b border-stone-100 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(43,104,149,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(43,104,149,0.10) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(110% 75% at 22% 0%,#000 22%,transparent 66%)',
            WebkitMaskImage: 'radial-gradient(110% 75% at 22% 0%,#000 22%,transparent 66%)',
          }}
        />
        <div className="relative z-10 max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
          <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-stone-400 mb-6">
            <b className="text-gold-600 font-medium">Projekte</b> · Dossierkatalog · Systeme &amp; Studien
          </div>
          <SectionLabel num="01">Projektindex</SectionLabel>
          <div className="grid grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.8fr)] gap-12 items-end max-[860px]:grid-cols-1 max-[860px]:gap-6">
            <div>
              <h1 className="font-serif font-normal text-[clamp(3rem,6vw,5rem)] leading-[1.05] tracking-[-0.025em] max-w-[11ch] pb-[0.08em]">
                Systeme, <em className="italic text-gold-600">Modelle</em> und Arbeitsproben
              </h1>
            </div>
            <div>
              <p className="text-[1.04rem] leading-[1.72] text-stone-700 font-light max-w-[42ch]">
                Der Projektindex ist kein Portfolio-Raster. Er sammelt ausgewählte Arbeiten als{' '}
                <b className="text-stone-900 font-medium">strukturierte Dossiers</b>: mit Status,
                Domäne, Rolle, Artefakten und Verbindungen zu Schriften oder Arbeitsfeldern.
              </p>
            </div>
          </div>

          {/* MetadataRecord */}
          <div
            className="border border-stone-200 bg-[#F8F7F3] grid grid-cols-4 mt-8
                       max-[900px]:grid-cols-2 max-[520px]:grid-cols-1"
            aria-label="Projektindex-Metadaten"
          >
            {[
              { key: 'Einträge', val: '6 Projekte', gold: false },
              { key: 'Struktur', val: 'Index → Detail', gold: false },
              { key: 'Logik', val: 'Dossier statt Galerie', gold: true },
              { key: 'Erweiterung', val: 'Datensatzbasiert', gold: false },
            ].map((item) => (
              <div
                key={item.key}
                className="p-[0.95rem_1.1rem] border-r border-stone-100 min-h-[4.9rem] last:border-r-0"
              >
                <span className="block font-mono text-[0.56rem] tracking-[0.13em] uppercase text-stone-400 mb-[0.42rem]">
                  {item.key}
                </span>
                <span
                  className={`block font-mono text-[0.76rem] leading-[1.45] ${
                    item.gold ? 'text-gold-600' : 'text-blue-700'
                  }`}
                >
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* ── 02 Featured ── */}
        <section id="featured" className="py-[4.5rem] border-b border-stone-100">
          <div className="max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <div className="grid grid-cols-[15rem_1fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-8">
              <aside className="sticky top-24 self-start max-[900px]:static">
                <SectionLabel num="02">Featured</SectionLabel>
                <h2 className="font-serif font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.18] tracking-[-0.01em] pb-[0.06em]">
                  Referenzprojekte mit Systemtiefe
                </h2>
                <p className="mt-4 text-[0.92rem] leading-[1.7] text-stone-700 font-light">
                  Featured-Projekte werden nicht durch eine neue visuelle Sprache hervorgehoben,
                  sondern durch Reihenfolge, Informationsdichte und stärkere Dossier-Tiefe.
                </p>
              </aside>

              <div>
                <CategoryBar
                  items={[
                    { num: '01', label: 'Featured', anchor: '#featured' },
                    { num: '02', label: 'Katalog', anchor: '#katalog' },
                    { num: '03', label: 'Architektur & Experimente', anchor: '#katalog' },
                  ]}
                  meta="Sortierung · kuratiert"
                />
                <div className="grid gap-[1.25rem]">
                  {featuredProjects.map((p, i) => (
                    <ProjectIndexCard key={p.slug} project={p} num={i + 1} compact={false} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 Katalog ── */}
        <section id="katalog" className="py-[4.5rem] border-b border-stone-100">
          <div className="max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <div className="grid grid-cols-[15rem_1fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-8">
              <aside className="sticky top-24 self-start max-[900px]:static">
                <SectionLabel num="03">Katalog</SectionLabel>
                <h2 className="font-serif font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.18] tracking-[-0.01em] pb-[0.06em]">
                  Architekturprojekte als reguläre Einträge
                </h2>
                <p className="mt-4 text-[0.92rem] leading-[1.7] text-stone-700 font-light">
                  Die Featured-Projekte stehen als Referenzfälle oben. Die Architekturprojekte
                  ergänzen den Katalog als reguläre Einträge. Das Layout bleibt unverändert.
                </p>
              </aside>

              <div className="grid gap-[1.25rem]">
                {catalogProjects.map((p, i) => (
                  <ProjectIndexCard
                    key={p.slug}
                    project={p}
                    num={featuredProjects.length + i + 1}
                    compact={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Routing ── */}
        <section className="py-[4.5rem] border-b border-stone-100">
          <div className="max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <div className="grid grid-cols-[15rem_1fr] gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-8">
              <aside className="sticky top-24 self-start max-[900px]:static">
                <SectionLabel num="04">Routing</SectionLabel>
                <h2 className="font-serif font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.18] tracking-[-0.01em] pb-[0.06em]">
                  Vom Einstieg zur Tiefe
                </h2>
                <p className="mt-4 text-[0.92rem] leading-[1.7] text-stone-700 font-light">
                  Der Projektindex verbindet Startseite und Detailseiten. Er erweitert die Startseite
                  nicht in die Tiefe, sondern verteilt Tiefe auf stabile Dossierseiten.
                </p>
              </aside>

              <div className="border border-stone-200 bg-[#F8F7F3] grid grid-cols-3 gap-px mt-[1.8rem] max-[760px]:grid-cols-1">
                {[
                  {
                    title: 'Startseite',
                    items: ['Kuratierte Auswahl', 'Orientierung und Positionierung', 'Kurze Projektteaser'],
                  },
                  {
                    title: 'Projektindex',
                    items: ['Vollständiger Projektkatalog', 'Featured und normale Einträge', 'Standardisierte Metadaten'],
                  },
                  {
                    title: 'Detailseite',
                    items: ['Ausgangslage und Beitrag', 'Systemlogik und Artefakte', 'Relevanz und Verbindungen'],
                  },
                ].map((col) => (
                  <div key={col.title} className="bg-[#FBFAF7] p-[1.25rem_1.35rem]">
                    <h3 className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-gold-600 mb-[0.85rem]">
                      {col.title}
                    </h3>
                    <ul className="list-none grid gap-[0.55rem]">
                      {col.items.map((item) => (
                        <li key={item} className="text-[0.9rem] leading-[1.5] text-stone-700 font-light">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section className="py-[4.5rem]">
          <div className="max-w-[90rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <div
              className="bg-blue-800 text-[#F5F4F0] border border-[#183B55] p-[clamp(2rem,4vw,3rem)]
                         grid grid-cols-[1.4fr_1fr] gap-10 items-start max-[760px]:grid-cols-1"
            >
              <div>
                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.1rem)] leading-[1.25] tracking-[-0.01em] text-[#F5F4F0]">
                  Projekte als <em className="italic text-[#F0E1B5]">Belege</em>, nicht als Schaufläche.
                </h2>
              </div>
              <div>
                <p className="text-[1rem] leading-[1.72] text-[rgba(244,242,236,0.72)] font-light">
                  Der Index bleibt erweiterbar: Neue Projekte werden als strukturierte Datensätze
                  ergänzt. Layout, Komponenten und Designsystem bleiben unverändert.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <Link
                    href="/"
                    className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem]"
                  >
                    Zur Startseite
                  </Link>
                  <Link
                    href="/schriften"
                    className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem]"
                  >
                    Zu den Schriften
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
