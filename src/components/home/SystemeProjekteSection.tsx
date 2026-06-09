import Image from 'next/image';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

const CASES = [
  {
    num: '01',
    tag: 'Fachapplikation · Product Ownership · Prozessdesign',
    badge: 'Im Einsatz',
    title: 'CivitasFlow — Digitales Fachsystem für Baubewilligungen',
    href: '/projekte/civitasflow',
    diagram: {
      src: '/uploads/Arbeit_UGZ_civitas/civitasflow_systemarchitektur.svg',
      alt: 'CivitasFlow Systemarchitektur — Module und Schnittstellen',
      caption: 'Abb. — Systemarchitektur',
    },
    anatomy: [
      { key: 'Ausgangslage', value: 'Im Baubewilligungsverfahren arbeiteten zahlreiche Fachstellen ohne gemeinsame digitale Grundlage — Medienbrüche, intransparente Zuständigkeiten, lange Wege.' },
      { key: 'Mein Beitrag', value: 'PO-nahe Funktion mit voller operativer Verantwortung — Anforderungsaufnahme, iterative Releases, Nutzerbetreuung, von der Skizze bis zum Betrieb.', bold: true },
      { key: 'Systemlogik', value: 'Requirements Engineering, Rollenmodell und API-Architektur — organisatorische Wirklichkeit konsequent modelliert statt der Technik angepasst.' },
      { key: 'Stand', value: 'Plattform vernetzt alle Fachstellen im Verfahren — produktiv im Einsatz beim UGZ Zürich.' },
    ] as { key: string; value: string; bold?: boolean }[],
    relevanz:
      'Digitale Prozesse entstehen nicht aus Technologie, sondern aus der Bereitschaft, organisatorische Wirklichkeit konsequent zu modellieren.',
    chips: ['Requirements', 'Scrum', 'Rollenmodell', 'API', 'Testing/QS'],
  },
  {
    num: '02',
    tag: 'GIS · Datenmodellierung · Geodaten',
    badge: 'Publiziert',
    title: 'GIS-gestützte Suchfunktion im Baubewilligungsverfahren',
    href: '/projekte/gis-suchfunktion',
    diagram: {
      src: '/uploads/Arbeit_UGZ_gis_suchfunktion/architektur_gis_suchfunktion.svg',
      alt: 'GIS-Suchfunktion — Datenarchitektur',
      caption: 'Abb. — Datenarchitektur',
    },
    anatomy: [
      { key: 'Ausgangslage', value: 'Räumliche Zuständigkeit war organisatorisch geregelt, aber nicht abfragbar — Zuordnung erfolgte manuell und fehleranfällig.' },
      { key: 'Mein Beitrag', value: 'Übersetzung der Zuständigkeitslogik in eine geodatenbasierte, prüfbare Struktur samt Fachkoordination zwischen den Stellen.', bold: true },
      { key: 'Systemlogik', value: 'SQL-Joins in QGIS verknüpfen Kontaktdaten mit Stadtkreisen, Quartieren und Gebäudetypen — als GeoPackage modelliert.' },
      { key: 'Stand', value: 'Publiziert im Geodatenkatalog der Stadt Zürich — direkt abfragbar.' },
    ] as { key: string; value: string; bold?: boolean }[],
    relevanz:
      'Von organisatorischer Zuständigkeit zu räumlich nachvollziehbarer und direkt abfragbarer Systemlogik.',
    chips: ['QGIS', 'SQL', 'GeoPackage', 'Datenmodellierung'],
  },
] as const;

const ORIGINS = [
  {
    type: 'Bachelorthesis · TU BS',
    name: 'Denkmal Ohnesorg',
    desc: 'Raum als zeitliche Sequenz — fünf Akte, vier Geschosse.',
    href: '/projekte/ohnesorg',
  },
  {
    type: 'Parametrisch · 2014',
    name: 'Sound to Form',
    desc: 'Klangdaten als formgebende Geometrie.',
    href: '/projekte/sound-to-form',
  },
  {
    type: 'Material · Robotik',
    name: 'Algorithmische Wärme',
    desc: 'Bedingungen für Transformation statt fixer Formen.',
    href: '/projekte/algorithmische-waerme',
  },
] as const;

export default function SystemeProjekteSection() {
  return (
    <>
      {/* INTRO */}
      <section
        id="projekte"
        className="pt-24 px-[clamp(1.5rem,4vw,4rem)]"
        aria-label="Systeme und Projekte"
      >
        <div className="max-w-[90rem] mx-auto">
          <SectionLabel num="02">Systeme &amp; Projekte</SectionLabel>

          <div className="grid-2col-intro-wide gap-8 md:gap-10 items-end pb-8 md:pb-10">
            <h2 className="font-serif font-normal text-[clamp(2rem,3.8vw,3rem)] leading-[1.22] tracking-[-0.01em] max-w-[18ch] pb-[0.04em]">
              Erst gebaut.{' '}
              <em className="italic text-gold-600">Dann behauptet.</em>
            </h2>
            <p className="text-[1.02rem] leading-[1.7] text-stone-700 font-light max-w-[42ch]">
              Zwei Fachsysteme stehen produktiv im Einsatz.{' '}
              <b className="text-ink font-medium">
                Der Beleg kommt vor jeder Aussage
              </b>{' '}
              über Methode, Rolle oder KI — jedes Projekt zeigt Ausgangslage, Beitrag, Systemlogik
              und Stand.
            </p>
          </div>

          {/* Proof bar */}
          <div className="flex flex-wrap border border-stone-200 bg-paper-soft">
            {[
              { k: 'Im Einsatz', v: '2 Systeme' },
              { k: 'Domäne', v: 'Öffentliche Verwaltung' },
              { k: 'Rolle', v: 'Product Ownership' },
              { k: 'Status', v: 'Produktiv', live: true },
            ].map(({ k, v, live }) => (
              <div
                key={k}
                className="flex-1 min-w-[150px] flex items-center gap-[0.6rem] px-[1.1rem] py-[0.85rem] border-r border-stone-200 last:border-r-0"
              >
                <span className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-text-muted">
                  {k}
                </span>
                <span
                  className={[
                    'font-mono text-[0.78rem]',
                    live ? 'inline-flex items-center gap-[0.4rem] text-gold-600' : 'text-blue-800',
                  ].join(' ')}
                >
                  {live && <span className="w-[6px] h-[6px] rounded-full bg-gold-500 shrink-0" />}
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE CARDS */}
      <section className="px-[clamp(1.5rem,4vw,4rem)] py-12 pb-[3.6rem]">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex justify-between items-baseline mb-7 flex-wrap gap-2">
            <span className="font-mono text-[0.66rem] tracking-[0.2em] uppercase text-gold-600">
              Umwelt- &amp; Gesundheitsschutz Zürich
            </span>
            <span className="font-mono text-[0.66rem] tracking-[0.12em] text-text-muted">
              Fallstudien · Ausgangslage → Beitrag → Methode → Stand
            </span>
          </div>

          <div className="flex flex-col gap-[1.4rem]">
            {CASES.map(({ num, tag, badge, title, href, diagram, anatomy, relevanz, chips }) => (
              <article
                key={num}
                className="grid-case-card border border-stone-200 bg-[#FBFAF7]
                           hover:border-gold-500/40 focus-within:border-gold-500/40 active:border-gold-500/40
                           transition-colors duration-200"
              >
                {/* Dark diagram plate */}
                <div
                  className="relative flex items-center justify-center p-[1.4rem] min-h-[230px]
                             border-b border-stone-200 lg:border-b-0 lg:border-r lg:border-stone-200"
                  style={{ background: '#0F1D2E' }}
                >
                  <span
                    className="absolute top-[0.7rem] right-[0.9rem] font-mono text-[0.5rem]
                               tracking-[0.16em] text-[rgba(191,216,234,0.4)]"
                    aria-hidden="true"
                  >
                    ABB · PLATE
                  </span>
                  <Image
                    src={diagram.src}
                    alt={diagram.alt}
                    width={260}
                    height={180}
                    className="w-full h-auto block"
                  />
                  <span
                    className="absolute left-[0.9rem] bottom-[0.75rem] font-mono text-[0.56rem]
                               tracking-[0.12em] uppercase text-[rgba(244,242,236,0.45)]"
                  >
                    {diagram.caption}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col px-8 py-[1.9rem]">
                  <div className="flex items-center gap-[0.9rem] mb-3">
                    <span className="font-mono text-[0.62rem] tracking-[0.18em] text-gold-600">
                      {num}
                    </span>
                    <span className="font-mono text-[0.62rem] tracking-[0.13em] uppercase text-text-muted">
                      {tag}
                    </span>
                    <span
                      className="ml-auto inline-flex items-center gap-[0.4rem] font-mono text-[0.6rem]
                                 tracking-[0.1em] uppercase border border-stone-200 rounded-full
                                 px-[0.7rem] py-[0.22rem] text-blue-800"
                    >
                      <span className="w-[6px] h-[6px] rounded-full bg-blue-800 shrink-0" />
                      {badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-normal text-[1.85rem] leading-[1.16] tracking-[-0.005em] text-ink mb-[1.1rem] pb-[0.04em]">
                    <Link
                      href={href}
                      className="no-underline text-ink hover:text-gold-600 transition-colors duration-200
                                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                    >
                      {title}
                    </Link>
                  </h3>

                  <div className="border-t border-stone-200">
                    {anatomy.map(({ key, value, bold }) => (
                      <div
                        key={key}
                        className="grid-anatomy-row gap-3 sm:gap-5 py-[0.72rem] border-b border-stone-200"
                      >
                        <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-gold-600 pt-[0.18rem]">
                          {key}
                        </span>
                        <span className="text-[0.9rem] leading-[1.55] text-stone-700 font-light">
                          {bold ? <b className="text-ink font-medium">{value}</b> : value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-2 border-gold-500 pl-4 my-[1.1rem] mb-5 font-serif italic text-[1.16rem] leading-[1.4] text-[#2A2620]">
                    {relevanz}
                  </blockquote>

                  <div className="flex justify-between items-center gap-4 mt-auto flex-wrap">
                    <div className="flex flex-wrap gap-[0.4rem]">
                      {chips.map((chip) => (
                        <span
                          key={chip}
                          className="font-mono text-[0.56rem] tracking-[0.1em] uppercase border border-stone-200 rounded-full px-[0.6rem] py-[0.2rem] text-text-muted"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={href}
                      className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-gold-600
                                 no-underline whitespace-nowrap inline-flex items-center gap-[0.45rem]
                                 transition-all duration-200 hover:text-ink hover:gap-3"
                    >
                      Fallstudie ansehen →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HERKUNFT — blue section */}
      <section
        className="bg-blue-800 text-[#F4F2EC] px-[clamp(1.5rem,4vw,4rem)] py-12"
        aria-label="Herkunft des Denkens"
      >
        <div className="grid-2col-herkunft max-w-[90rem] mx-auto gap-8 md:gap-10 items-center">
          <div>
            <div className="font-mono text-[0.66rem] tracking-[0.2em] uppercase text-gold-200 mb-[0.9rem]">
              Herkunft des Denkens
            </div>
            <h4 className="font-serif font-normal text-[1.9rem] leading-[1.24] text-[#F4F2EC] pb-[0.34em]">
              Die Systemlogik stammt{' '}
              <em className="italic text-gold-200">aus der Architektur.</em>
            </h4>
            <p className="text-[0.92rem] text-[rgba(244,242,236,0.72)] font-light mt-7 max-w-[34ch]">
              Raum, Schichten, Sequenz: Was heute Daten und Verfahren strukturiert, wurde im Entwurf
              gelernt — keine eigene Disziplin, sondern die Wurzel derselben Denkweise.
            </p>
            <Link
              href="/projekte"
              className="mt-5 inline-flex items-center gap-[0.45rem] font-mono text-[0.68rem]
                         tracking-[0.1em] uppercase text-gold-200 no-underline
                         transition-all duration-200 hover:text-[#F4F2EC] hover:gap-3"
            >
              Werkschau ansehen →
            </Link>
          </div>

          <div
            className="grid-3col-origins gap-px border border-[rgba(244,242,236,0.16)]"
            style={{ background: 'rgba(244,242,236,0.16)' }}
          >
            {ORIGINS.map(({ type, name, desc, href }) => (
              <Link
                key={name}
                href={href}
                className="block bg-blue-900 px-[1.2rem] py-[1.1rem] no-underline
                           transition-colors duration-200 hover:bg-[#10283b]"
              >
                <div className="font-mono text-[0.56rem] tracking-[0.1em] uppercase text-blue-300 mb-2">
                  {type}
                </div>
                <div className="font-serif text-[1.18rem] text-[#F4F2EC] leading-[1.15]">{name}</div>
                <div className="text-[0.76rem] text-[rgba(244,242,236,0.72)] font-light mt-[0.35rem]">
                  {desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
