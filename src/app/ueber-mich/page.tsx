import { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import ScrollProgress from '@/components/ueber-mich/ScrollProgress';
import ProfileHero from '@/components/ueber-mich/ProfileHero';
import Timeline from '@/components/ueber-mich/Timeline';
import KompetenzGrid from '@/components/ueber-mich/KompetenzGrid';

export const metadata: Metadata = {
  title: 'Über mich — Martin Hsu',
  description:
    'Architektur, Verwaltungsdigitalisierung, GIS und KI — Systemdenken als persönliche Haltung und berufliche Praxis.',
  alternates: { canonical: '/ueber-mich' },
};

const SECTION_CLS =
  'py-20 border-t border-stone-100 max-w-[72rem] mx-auto px-[clamp(1.5rem,5vw,5rem)]';

const GRID_CLS =
  'grid grid-cols-[14rem_1fr] gap-16 items-start max-[768px]:grid-cols-1 max-[768px]:gap-8';

const STICKY_HEAD =
  'font-serif font-normal text-[1.7rem] leading-[1.15] tracking-[-0.02em] text-ink sticky top-20 max-[768px]:static';

export default function UeberMichPage() {
  return (
    <>
      <ScrollProgress />
      <PageShell>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <ProfileHero />

        {/* ── Arbeitsweise ────────────────────────────────────────────────── */}
        <section aria-labelledby="arbeitsweise-heading" className={SECTION_CLS}>
          <div className={GRID_CLS}>
            <h2 id="arbeitsweise-heading" className={STICKY_HEAD}>
              Arbeitsweise
            </h2>
            <div>
              <p className="text-[0.95rem] leading-[1.8] text-stone-600 font-light mb-0">
                Meine Arbeitsweise ist analytisch, kreativ und systemisch. Ich kombiniere
                technisches Denken mit gestalterischer Klarheit — um Komplexität in
                Struktur, Prozesse in Bewegung und Daten in Bedeutung zu überführen.
              </p>

              {/* Mensch · System · KI-Block */}
              <div className="mt-8 border border-stone-200 bg-[#F8F7F3] p-10">
                <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-gold-600 mb-1">
                  Mensch · System · KI
                </p>
                <p className="font-mono text-[0.62rem] tracking-[0.12em] text-stone-400 mb-4">
                  Digital Intelligence Collaboration
                </p>
                <p className="text-[0.95rem] leading-[1.8] text-stone-600 font-light max-w-[44rem]">
                  Ich verstehe Digitalisierung als kollaborativen Prozess zwischen Mensch,
                  System und künstlicher Intelligenz. Diese Haltung beschreibe ich als{' '}
                  <em>Digital Intelligence Collaboration</em>: nicht KI als Ersatz, sondern
                  als Zusammenspiel von menschlicher Urteilskraft, Systemlogik und
                  maschineller Analyse. Mein Ansatz verbindet konzeptuelles Denken,
                  KI-gestützte Analyse und menschliche Urteilskraft mit dem Ziel, tragfähige
                  Strukturen und zukunftsfähige Prozesse zu entwickeln.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Entwicklungslinie ───────────────────────────────────────────── */}
        <section aria-labelledby="entwicklung-heading" className={SECTION_CLS}>
          <div className={GRID_CLS}>
            <h2 id="entwicklung-heading" className={STICKY_HEAD}>
              Entwicklungs&shy;linie
            </h2>
            <Timeline />
          </div>
        </section>

        {/* ── Kompetenzfelder ─────────────────────────────────────────────── */}
        <section aria-labelledby="kompetenz-heading" className={SECTION_CLS}>
          <div className={GRID_CLS}>
            <h2 id="kompetenz-heading" className={STICKY_HEAD}>
              Kompetenz&shy;felder
            </h2>
            <KompetenzGrid />
          </div>
        </section>

        {/* ── Zitat ───────────────────────────────────────────────────────── */}
        <div
          className="py-20 px-[clamp(1.5rem,6vw,6rem)] border-t border-blue-900 bg-blue-800 text-center"
        >
          <p className="font-serif italic text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.35] tracking-[-0.015em] text-[#F4F2EC] max-w-[52rem] mx-auto">
            Zukunft entsteht dort, wo Intelligenz, Struktur und Gestaltung bewusst
            miteinander verbunden werden.
          </p>
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-gold-200 mt-6">
            Leitsatz
          </p>
        </div>

        {/* ── Kontakt ─────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="kontakt-heading"
          className={SECTION_CLS}
        >
          <div className={GRID_CLS}>
            <h2 id="kontakt-heading" className={STICKY_HEAD}>
              Kontakt
            </h2>
            <div>
              <p className="text-[0.95rem] leading-[1.8] text-stone-600 font-light mb-6">
                Ich freue mich auf Projekte, die Bestand haben — an der Schnittstelle von
                Technologie, Organisation und Ethik.
              </p>
              <a
                href="mailto:kontakt@martinhsu.digital"
                className="font-mono text-[0.85rem] tracking-[0.08em] text-gold-600
                           border-b border-gold-500/40 pb-[2px] hover:border-gold-500
                           transition-colors duration-200 no-underline"
              >
                kontakt@martinhsu.digital
              </a>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
