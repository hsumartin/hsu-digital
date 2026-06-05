import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

const SCHRIFTEN = [
  {
    id: 'SCH · 01',
    type: 'Denkmodell',
    year: '2025 – 2026',
    title: 'GPT-Stack',
    prinzip: '„Struktur vor Modell."',
    body: 'Eine modulare Denk- und Arbeitsarchitektur für KI. Qualität entsteht nicht aus Modellleistung, sondern aus dem Aufbau, in dem Modelle eingesetzt werden.',
    wirktIn: [
      { label: 'Lokale Agentensysteme', href: '/schriften/gpt-stack' },
      { label: 'CivitasFlow', href: '/projekte/civitasflow' },
    ],
    href: '/schriften/gpt-stack',
  },
  {
    id: 'SCH · 02',
    type: 'Framework',
    year: '2025 – 2026',
    title: 'Decision Layer',
    prinzip: '„Bewusste Begrenzung statt Maximierung."',
    body: 'Wann KI sinnvoll ist – und wann nicht. Problem Fit, Value Fit, Risk Fit als drei Schichten vor jeder Implementierung.',
    wirktIn: [
      { label: '03 Methode & KI', href: '#section-03' },
      { label: 'GIS — bewusst ohne KI', href: '/projekte/gis-suchfunktion' },
    ],
    href: '/schriften/decision-layer',
  },
  {
    id: 'SCH · 03',
    type: 'Position',
    year: '2025 – 2026',
    title: 'KI-Governance in regulierten Umgebungen',
    prinzip: '„Kontrolle bleibt beim Menschen."',
    body: 'Sechs Thesen zur organisatorischen Steuerungslogik für eine nachvollziehbare, kontrollierte Nutzung von KI in der Verwaltung.',
    wirktIn: [
      { label: 'Öffentliche Verwaltung', href: '#section-01' },
      { label: 'Human-in-the-loop', href: '#section-03' },
    ],
    href: '/schriften/ki-governance',
  },
  {
    id: 'SCH · 04',
    type: 'Framework',
    year: '2025 – 2026',
    title: 'Vom Tool zur Denkarchitektur',
    prinzip: '„Denken sichtbar und steuerbar machen."',
    body: 'GPT-Stack, USE+ Framework und PromptPilot als System: Denkprozesse werden sichtbar, strukturierbar und steuerbar — Methode statt Werkzeugkatalog.',
    wirktIn: [
      { label: 'Entscheidungsweg', href: '#section-03' },
      { label: 'Systemdenken', href: '#section-01' },
    ],
    href: '/schriften/denkarchitektur',
  },
] as const;

const PRINCIPLES: { title: string; em: string; tags: string[]; inactive?: string[] }[] = [
  {
    title: 'Struktur',
    em: 'vor Werkzeug',
    tags: ['Schriften', 'Projekte', 'Methode'],
  },
  {
    title: 'Beleg',
    em: 'vor Behauptung',
    tags: ['Schriften', 'Projekte'],
    inactive: ['Methode'],
  },
  {
    title: 'Kontrolle',
    em: 'beim Menschen',
    tags: ['Schriften', 'Methode'],
    inactive: ['Projekte'],
  },
];

export default function SchriftenSection() {
  return (
    <section
      id="section-04"
      className="relative px-[clamp(1.5rem,4vw,4rem)] py-24 pb-[4.5rem]"
      aria-label="Schriften"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,104,149,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(43,104,149,0.10) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(100% 70% at 82% 0%, #000 22%, transparent 62%)',
          WebkitMaskImage: 'radial-gradient(100% 70% at 82% 0%, #000 22%, transparent 62%)',
        }}
      />

      <div className="relative z-10 max-w-[84rem] mx-auto">
        <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-text-muted mb-6">
          <b className="text-gold-600 font-medium">Editorial Architecture</b>
          {' '}× Civic Digital ×{' '}
          <b className="text-gold-600 font-medium">AI Clarity</b>
        </p>
        <SectionLabel num="04">Schriften</SectionLabel>

        <div className="grid gap-12 items-end mb-[3.4rem]" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
          <h2 className="font-serif font-normal text-[clamp(2rem,3.6vw,2.9rem)] leading-[1.28] tracking-[-0.01em] max-w-[20ch] pb-[0.04em]">
            Denkmodelle,{' '}
            <em className="italic text-gold-600">keine Publikationen.</em>
          </h2>
          <p className="text-[1.04rem] leading-[1.7] text-stone-700 font-light max-w-[42ch]">
            Die Schriften zeigen dieselbe Denkweise{' '}
            <b className="text-ink font-medium">ohne konkretes Projekt</b>{' '}
            — als übertragbare Modelle, Frameworks und Positionen.
          </p>
        </div>

        {/* Category bar */}
        <div className="flex items-center border border-stone-200 bg-paper-soft mb-[1.4rem] flex-wrap">
          {[
            { label: 'Alle', count: '04', active: true },
            { label: 'Denkmodelle', count: '01', active: false },
            { label: 'Frameworks', count: '02', active: false },
            { label: 'Positionen', count: '01', active: false },
          ].map(({ label, count, active }) => (
            <span
              key={label}
              className={[
                'flex items-baseline gap-2 px-[1.3rem] py-[0.8rem] border-r border-stone-200',
                'font-mono text-[0.68rem] tracking-[0.12em] uppercase',
                active ? 'text-ink' : 'text-text-muted',
              ].join(' ')}
            >
              {label}{' '}
              <span className={['text-[0.6rem]', active ? 'text-gold-600' : 'text-text-muted'].join(' ')}>
                {count}
              </span>
            </span>
          ))}
          <span className="ml-auto px-[1.3rem] py-[0.8rem] font-mono text-[0.62rem] tracking-[0.1em] text-text-muted">
            Index · Schriften · 2025–2026
          </span>
        </div>

        {/* Writing index */}
        <div className="border border-stone-200 bg-[#FBFAF7]">
          {SCHRIFTEN.map(({ id, type, year, title, prinzip, body, wirktIn, href }) => (
            <div
              key={id}
              className="grid border-b border-stone-200 last:border-b-0 transition-colors duration-200 hover:bg-paper-soft"
              style={{ gridTemplateColumns: '172px 1fr 250px' }}
            >
              {/* Category col */}
              <div className="px-[1.4rem] py-6 border-r border-stone-200">
                <div className="font-mono text-[0.66rem] tracking-[0.14em] text-blue-800 mb-[0.9rem]">{id}</div>
                <span className="inline-block font-mono text-[0.58rem] tracking-[0.1em] uppercase border border-[rgba(43,104,149,0.30)] bg-[rgba(43,104,149,0.05)] rounded-full px-[0.65rem] py-[0.22rem] text-blue-800 mb-3">
                  {type}
                </span>
                <div className="font-mono text-[0.62rem] tracking-[0.1em] text-text-muted">{year}</div>
              </div>

              {/* Main col */}
              <div className="px-[1.6rem] py-6">
                <h3 className="font-serif font-normal text-[1.65rem] leading-[1.15] tracking-[-0.005em] text-ink mb-3">
                  {title}
                </h3>
                <div className="border-l-2 border-gold-500 pl-[0.9rem] font-serif italic text-[1.18rem] leading-[1.3] text-[#4A4640] mb-3">
                  {prinzip}
                </div>
                <p className="text-[0.86rem] text-stone-700 font-light leading-[1.6] max-w-[46ch]">{body}</p>
              </div>

              {/* Connection col */}
              <div className="flex flex-col px-6 py-6 border-l border-stone-200">
                <div className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-text-muted mb-3">
                  Wirkt in
                </div>
                <div className="flex flex-col gap-2">
                  {wirktIn.map(({ label, href: wHref }) => (
                    <Link
                      key={label}
                      href={wHref}
                      className="text-[0.8rem] text-stone-700 no-underline inline-flex items-center gap-[0.45rem] transition-colors duration-200 hover:text-gold-600"
                    >
                      <span className="text-blue-800 font-mono text-[0.75rem]">→</span>
                      {label}
                    </Link>
                  ))}
                </div>
                <Link
                  href={href}
                  className="mt-auto pt-[1.1rem] font-mono text-[0.66rem] tracking-[0.1em] uppercase text-gold-600 no-underline inline-flex items-center gap-[0.45rem] transition-all duration-200 hover:gap-3"
                >
                  Lesen →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="border-t border-stone-200 pt-10 mt-[3.6rem]">
          <div className="font-mono text-[0.66rem] tracking-[0.2em] uppercase text-gold-600 mb-2">
            Ein Prinzipienkern
          </div>
          <p className="text-[0.96rem] text-stone-700 font-light max-w-[60ch] mb-[1.6rem]">
            Projekte, KI-Haltung und Schriften sind keine getrennten Bereiche — sie folgen denselben
            drei Prinzipien.
          </p>
          <div
            className="grid gap-px border border-stone-200"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)', background: '#D6D2C8' }}
          >
            {PRINCIPLES.map(({ title, em, tags, inactive = [] }) => (
              <div key={title} className="bg-[#FBFAF7] p-[1.6rem]">
                <div className="font-serif text-[1.6rem] leading-[1.15] text-ink mb-4">
                  {title} <em className="italic text-gold-600">{em}</em>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.56rem] tracking-[0.08em] uppercase text-blue-800 border border-[rgba(43,104,149,0.32)] bg-[rgba(43,104,149,0.06)] rounded-sm px-2 py-[0.25rem]"
                    >
                      {t}
                    </span>
                  ))}
                  {(inactive as readonly string[]).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.56rem] tracking-[0.08em] uppercase text-text-muted border border-stone-200 rounded-sm px-2 py-[0.25rem]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
