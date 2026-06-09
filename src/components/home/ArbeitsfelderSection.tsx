import SectionLabel from '@/components/ui/SectionLabel';

const FIELDS = [
  {
    lens: 'Strukturieren',
    num: 'Perspektive 01',
    title: 'Architektur',
    body: 'Räume entstehen in Schichten und Sequenzen. Hier habe ich gelernt, Komplexität zu ordnen, bevor sie gebaut wird — die Wurzel der Denkweise.',
    contrib: 'Struktur & Schichtung',
  },
  {
    lens: 'Verantworten',
    num: 'Perspektive 02',
    title: 'Verwaltung',
    body: 'Regulierte Realität mit echten Zuständigkeiten. Das Feld, das Substanz erzwingt und jede Lösung an der Wirklichkeit misst.',
    contrib: 'Kontext & Regeln',
  },
  {
    lens: 'Umsetzen',
    num: 'Perspektive 03',
    title: 'Product Ownership',
    body: 'Von der Anforderung zum laufenden System. Die Perspektive, die Idee in Betrieb übersetzt — und dafür sorgt, dass sie dort hält.',
    contrib: 'Wirkung & Betrieb',
  },
  {
    lens: 'Erweitern',
    num: 'Perspektive 04',
    title: 'KI',
    body: 'Ein Werkzeug, kein Ziel. Die Perspektive, die fragt, wo Modelle verstärken — und wo eine einfachere Lösung trägt.',
    contrib: 'Möglichkeit & Grenze',
  },
] as const;

export default function ArbeitsfelderSection() {
  return (
    <section
      id="section-01"
      className="relative px-[clamp(1.5rem,4vw,4rem)] py-24 pb-[4.5rem]"
      aria-label="Arbeitsfelder"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,104,149,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(43,104,149,0.10) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(100% 75% at 50% 0%, #000 22%, transparent 62%)',
          WebkitMaskImage: 'radial-gradient(100% 75% at 50% 0%, #000 22%, transparent 62%)',
        }}
      />

      <div className="relative z-10 max-w-[84rem] mx-auto">
        <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-text-muted mb-6">
          <b className="text-gold-600 font-medium">Editorial Architecture</b>
          {' '}× Civic Digital × AI Clarity
        </p>
        <SectionLabel num="01">Arbeitsfelder</SectionLabel>

        <div className="grid-2col-intro gap-8 md:gap-12 mb-8 md:mb-12">
          <h2 className="font-serif font-normal text-[clamp(2rem,3.8vw,3rem)] leading-[1.26] tracking-[-0.01em] max-w-[15ch] pb-[0.04em]">
            Vier Perspektiven.{' '}
            <em className="italic text-gold-600">Ein Denken.</em>
          </h2>
          <p className="text-[1.04rem] leading-[1.7] text-stone-700 font-light max-w-[42ch] self-end">
            Architektur, Verwaltung, Product Ownership und KI sind keine getrennten Disziplinen —
            sondern{' '}
            <b className="text-ink font-medium">
              vier Blickwinkel auf dieselbe Frage:
            </b>{' '}
            Wie wird komplexe Wirklichkeit zu tragfähiger Struktur?
          </p>
        </div>

        {/* Field cards */}
        <div className="grid-4col-cards border border-stone-200 bg-[#FBFAF7]">
          {FIELDS.map(({ lens, num, title, body, contrib }, i) => (
            <div
              key={title}
              className={[
                'flex flex-col px-[1.6rem] py-[1.7rem] pb-[1.9rem] relative',
                /* mobile (2-col): right border on odd columns, bottom border everywhere except last row */
                i % 2 === 0 ? 'border-r border-stone-200' : '',
                i < 2 ? 'border-b border-stone-200' : '',
                /* desktop (4-col): override */
                i < 3 ? 'lg:border-r lg:border-stone-200' : 'lg:border-r-0',
                'lg:border-b-0',
              ].join(' ')}
            >
              {/* Connector line to spine */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 -bottom-px w-px h-[34px] -translate-x-1/2 translate-y-full z-20"
                style={{ background: 'linear-gradient(180deg, #D6D2C8, #2B6895)' }}
              />
              <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-gold-600 mb-4">
                {lens}
              </div>
              <div className="font-mono text-[0.6rem] tracking-[0.12em] text-text-muted mb-2">
                {num}
              </div>
              <h3 className="font-serif font-normal text-[1.7rem] leading-[1.14] tracking-[-0.005em] text-ink mb-3">
                {title}
              </h3>
              <p className="text-[0.86rem] leading-[1.62] text-stone-700 font-light">{body}</p>
              <div className="mt-auto pt-5">
                <div className="font-mono text-[0.56rem] tracking-[0.12em] uppercase text-text-muted mb-1">
                  Bringt ein
                </div>
                <div className="font-mono text-[0.74rem] tracking-[0.04em] text-blue-800">
                  {contrib}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blue spine */}
        <div
          className="mt-[34px] border border-blue-900 bg-blue-800 text-[#F4F2EC]
                     flex flex-col items-center gap-3 px-[1.6rem] py-8 text-center
                     shadow-[0_24px_50px_-30px_rgba(16,38,54,0.45)]"
        >
          <div className="font-serif text-[2.1rem] leading-[1.1] whitespace-nowrap text-[#F4F2EC]">
            → <em className="italic text-gold-200">Systemdenken</em>
          </div>
          <p className="text-[0.95rem] text-[rgba(244,242,236,0.72)] font-light max-w-[52ch] text-center">
            Aus jeder Perspektive entsteht dieselbe Fähigkeit: komplexe Zusammenhänge verstehen,
            strukturieren und verantwortungsvoll weiterentwickeln.
          </p>
        </div>

        {/* Bridge */}
        <div className="flex items-center gap-3 mt-10 font-mono text-[0.68rem] tracking-[0.14em] uppercase text-text-muted">
          <span>In den Projekten wird das konkret</span>
          <span className="flex-1 h-px bg-stone-200 max-w-[5rem]" />
          <a
            href="#section-02"
            className="inline-flex items-center gap-[0.45rem] text-gold-600 no-underline transition-all duration-200 hover:gap-3"
          >
            02 — Systeme &amp; Projekte →
          </a>
        </div>
      </div>
    </section>
  );
}
