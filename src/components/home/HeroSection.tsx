import Image from 'next/image';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

const TOC_ITEMS = [
  { num: '00', label: 'Profil' },
  { num: '01', label: 'Arbeitsfelder' },
  { num: '02', label: 'Systeme & Projekte' },
  { num: '03', label: 'Methode & KI' },
  { num: '04', label: 'Schriften' },
  { num: '05', label: 'Verbindungen' },
  { num: '06', label: 'Kontakt' },
] as const;

const RECORD_ROWS = [
  { label: 'Rolle', value: 'Informationsarchitekt · PO' },
  { label: 'Kerngebiet', value: 'Digitale Fachsysteme' },
  { label: 'Methode', value: 'Requirements · Modellierung' },
  { label: 'Domänen', value: 'Verwaltung · GIS · KI' },
  { label: 'KI-Haltung', value: 'erklärbar · kontrolliert' },
] as const;

const LAYER_ITEMS = ['Organisation', 'Daten', 'Schnittstelle', 'Oberfläche'] as const;

export default function HeroSection() {
  return (
    <section
      className="relative min-h-svh pt-[4.2rem] overflow-hidden"
      aria-label="Profil"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,104,149,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(43,104,149,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(120% 90% at 26% 14%, #000 20%, transparent 58%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 26% 14%, #000 20%, transparent 58%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(70% 55% at 82% 8%, rgba(43,104,149,0.07), transparent 60%)',
        }}
      />

      {/* Three-column grid */}
      <div
        className="relative z-10 grid gap-[clamp(2rem,4vw,3.6rem)] max-w-[96rem] mx-auto
                   px-[clamp(1.5rem,4vw,4rem)] py-[clamp(2.4rem,4vw,3.6rem)] pb-12 items-start
                   min-h-[calc(100svh-4.2rem)]"
        style={{ gridTemplateColumns: '232px minmax(0,1fr) 330px' }}
      >
        {/* ── INDEX RAIL ── */}
        <aside className="sticky top-24 self-start hidden lg:block">
          <div className="font-mono text-[0.7rem] tracking-[0.14em] text-text-muted">
            <b className="text-gold-600 font-medium">MH</b> / Index
          </div>
          <div className="mt-5 mb-6 w-16 h-16 rounded-sm overflow-hidden border border-stone-200">
            <Image
              src="/uploads/DSC_7508_4a.jpg"
              alt="Martin Hsu"
              width={64}
              height={64}
              className="w-full h-full object-cover grayscale-[15%] contrast-[1.02]"
              priority
            />
          </div>
          <ul className="list-none border-t border-stone-200">
            {TOC_ITEMS.map(({ num, label }, i) => (
              <li key={num} className="border-b border-stone-200">
                <a
                  href={`#section-${num}`}
                  className={[
                    'flex gap-[0.7rem] items-baseline py-[0.62rem] font-mono text-[0.72rem]',
                    'tracking-[0.06em] no-underline transition-colors duration-200',
                    i === 0 ? 'text-ink' : 'text-text-muted hover:text-ink',
                  ].join(' ')}
                >
                  <span className={i === 0 ? 'text-gold-600' : 'text-blue-700'}>{num}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 font-mono text-[0.62rem] tracking-[0.1em] text-text-muted leading-[1.9]">
            EDITORIAL<br />ARCHITECTURE<br />× CIVIC × AI
          </div>
        </aside>

        {/* ── HERO CONTENT ── */}
        <div className="max-w-[42rem]" id="section-00">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-text-muted mb-6">
            <b className="text-gold-600 font-medium">Editorial Architecture</b>
            {' '}× Civic Digital × AI Clarity
          </p>

          <SectionLabel num="00">Profil · Informationsarchitekt &amp; Systemdenker</SectionLabel>

          <h1 className="font-serif font-normal text-[clamp(2.3rem,4vw,3.5rem)] leading-[1.3] tracking-[-0.01em] text-ink pb-[0.12em]">
            Ich strukturiere Systeme,{' '}
            <em className="italic text-gold-600">bevor sie gebaut werden.</em>
          </h1>

          <p className="mt-11 text-[clamp(1rem,1.4vw,1.16rem)] leading-[1.7] text-stone-700 font-light max-w-[38rem]">
            Architektur, öffentliche Verwaltung und KI sind kein Nebeneinander, sondern
            verschiedene Maßstäbe derselben Arbeit:{' '}
            <b className="text-ink font-medium">
              komplexe Wirklichkeit in tragfähige Struktur übersetzen
            </b>{' '}
            — von der organisatorischen Realität über das Datenmodell bis zur Schnittstelle.
          </p>

          <div className="flex flex-wrap gap-[0.7rem] mt-[2.3rem]">
            <Link
              href="#section-02"
              className="inline-flex items-center gap-[0.55rem] text-[0.82rem] tracking-[0.03em]
                         font-medium px-6 py-[0.72rem] rounded-full no-underline
                         bg-gold-500 text-[#1A1404] border border-gold-500
                         transition-colors duration-200 hover:bg-gold-600 hover:border-gold-600"
            >
              Systeme ansehen →
            </Link>
            <Link
              href="#section-03"
              className="inline-flex items-center gap-[0.55rem] text-[0.82rem] tracking-[0.03em]
                         font-medium px-6 py-[0.72rem] rounded-full no-underline
                         bg-transparent text-ink border border-stone-200
                         transition-colors duration-200 hover:border-blue-800 hover:text-blue-800"
            >
              Arbeitsweise
            </Link>
            <Link
              href="/verbindungen"
              className="inline-flex items-center gap-[0.55rem] text-[0.82rem] tracking-[0.03em]
                         font-medium px-6 py-[0.72rem] rounded-full no-underline
                         bg-blue-800/6 text-blue-800 border border-blue-800/28
                         transition-colors duration-200 hover:bg-blue-800/12 hover:text-blue-900"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-blue-800 shrink-0" />
              Themenkarte
            </Link>
          </div>

          {/* Meta strip */}
          <div
            className="grid mt-12 border border-stone-200 max-w-[42rem] bg-paper-soft"
            style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
          >
            {[
              { k: 'Lesart', v: 'Struktur & Schichtung' },
              { k: 'Felder', v: 'Architektur · Verwaltung · KI' },
              { k: 'Rolle', v: 'Product Ownership · Requirements' },
              { k: 'Haltung', v: 'Struktur vor Werkzeug' },
            ].map(({ k, v }, i) => (
              <div
                key={k}
                className={[
                  'px-[1.1rem] py-[0.95rem]',
                  i < 3 ? 'border-r border-stone-200' : '',
                ].join(' ')}
              >
                <div className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-text-muted mb-[0.45rem]">
                  {k}
                </div>
                <div className="text-[0.82rem] text-stone-700 leading-[1.4]">{v}</div>
              </div>
            ))}
          </div>

          <a
            href="#section-01"
            className="inline-flex items-center gap-[0.6rem] mt-10 font-mono text-[0.66rem]
                       tracking-[0.14em] uppercase text-text-muted no-underline
                       transition-colors duration-200 hover:text-gold-600"
          >
            <span className="animate-bounce">↓</span>
            01 — Arbeitsfelder
          </a>
        </div>

        {/* ── SPEC / RECORD COLUMN ── */}
        <aside className="hidden xl:flex flex-col gap-4 sticky top-24 self-start">
          {/* Blue record card */}
          <div className="border border-blue-900 bg-blue-800 shadow-[0_18px_40px_-24px_rgba(16,38,54,0.55)]">
            <div className="flex justify-between items-baseline px-[1.1rem] py-[0.9rem] border-b border-white/18">
              <span className="font-mono text-[0.64rem] tracking-[0.14em] uppercase text-blue-300">
                Profil · Index
              </span>
              <span className="font-mono text-[0.6rem] tracking-[0.1em] text-text/66">REC-00</span>
            </div>
            {RECORD_ROWS.map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between gap-4 px-[1.1rem] py-[0.72rem] border-b border-white/12 last:border-b-0"
              >
                <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-blue-300 pt-[0.15rem] whitespace-nowrap">
                  {label}
                </span>
                <span className="text-[0.8rem] text-[#F4F2EC] text-right leading-[1.4]">
                  {value}
                </span>
              </div>
            ))}
            <div className="flex justify-between gap-4 px-[1.1rem] py-[0.72rem]">
              <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-blue-300 pt-[0.15rem] whitespace-nowrap">
                Status
              </span>
              <span className="inline-flex items-center gap-[0.4rem] text-gold-200 font-mono text-[0.7rem] tracking-[0.04em]">
                <span className="nav-pulse-dot" />
                Verfügbar
              </span>
            </div>
          </div>

          {/* Layer map */}
          <div className="border border-stone-200 bg-paper-soft px-[1.1rem] py-4">
            <div className="flex justify-between font-mono text-[0.6rem] tracking-[0.12em] uppercase text-text-muted mb-3">
              <span>Systemkarte</span>
              <b className="text-blue-700 font-normal">4 Ebenen</b>
            </div>
            {LAYER_ITEMS.map((layer, i) => (
              <div key={layer} className="flex items-center gap-[0.7rem] py-[0.4rem]">
                <span className="font-mono text-[0.58rem] text-blue-700 w-[1.1rem]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="flex-1 h-[26px] border border-stone-200 flex items-center
                             px-[0.7rem] font-mono text-[0.62rem] tracking-[0.08em] text-stone-700"
                  style={{
                    background: `linear-gradient(90deg, rgba(43,104,149,${0.10 + i * 0.08}), transparent)`,
                  }}
                >
                  {layer}
                </span>
              </div>
            ))}
            <p className="font-mono text-[0.56rem] tracking-[0.06em] text-text-muted mt-3">
              Jedes Projekt durchläuft dieselben Schichten.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
