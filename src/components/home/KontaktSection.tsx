import SectionLabel from '@/components/ui/SectionLabel';

const RECORD_ROWS: { label: string; value: string; live?: boolean }[] = [
  { label: 'Verfügbar', value: 'Projekte mit Bestand', live: true },
  { label: 'Arbeitsweise', value: 'strukturiert · übergebbar' },
  { label: 'Domänen', value: 'Verwaltung · GIS · KI' },
  { label: 'Rolle', value: 'Informationsarchitekt · PO' },
  { label: 'Antwort', value: 'direkt, ohne Umwege' },
];

export default function KontaktSection() {
  return (
    <section
      id="section-06"
      className="px-[clamp(1.5rem,4vw,4rem)] pt-0 pb-16"
      aria-label="Kontakt"
    >
      {/* Bridge line */}
      <div className="max-w-[84rem] mx-auto flex items-center gap-4 font-mono text-[0.66rem] tracking-[0.14em] uppercase text-text-muted py-[2.6rem]">
        <span>
          Aus <b className="text-stone-700 font-normal">05 Verbindungen</b>
        </span>
        <span className="flex-1 h-px bg-stone-200" />
        <span>Was zusammenhängt, lässt sich übergeben</span>
      </div>

      <div className="max-w-[84rem] mx-auto">
        <SectionLabel num="06">Kontakt</SectionLabel>

        {/* Blue contact panel */}
        <div
          className="grid-contact border border-blue-900 bg-blue-800 text-[#F4F2EC]
                     px-[clamp(2rem,4vw,3.4rem)] py-[clamp(2rem,4vw,3.4rem)] gap-8 md:gap-[3.4rem] items-start
                     shadow-[0_24px_60px_-34px_rgba(16,38,54,0.5)]"
        >
          <div>
            <h2 className="font-serif font-normal text-[clamp(2.3rem,4.4vw,3.7rem)] leading-[1.3] tracking-[-0.01em] text-[#F4F2EC] max-w-[16ch] pb-[0.08em]">
              Was ich aufbaue, soll auch{' '}
              <em className="italic text-gold-200">nach mir tragen.</em>
            </h2>
            <p className="mt-7 text-[1.06rem] leading-[1.72] text-[rgba(244,242,236,0.72)] font-light max-w-[46ch]">
              Dieselbe Haltung, die Projekte strukturiert und KI bewusst begrenzt, gilt für die
              Zusammenarbeit: Ich entwerfe Systeme, die{' '}
              <b className="text-[#F4F2EC] font-normal">übergebbar sind und ohne mich weiterlaufen</b>
              . Was bleibt, ist die Struktur — nicht die Abhängigkeit.
            </p>
            <p className="mt-[1.1rem] text-[1.06rem] leading-[1.72] text-[rgba(244,242,236,0.72)] font-light">
              <span className="font-serif italic text-[1.18rem] text-[#E7EDF2]">
                Ich freue mich auf Projekte, die Bestand haben sollen.
              </span>
            </p>
            <div className="flex flex-col items-start gap-5 mt-10">
              <a
                href="mailto:kontakt@martinhsu.digital"
                className="font-serif text-[1.5rem] text-[#F4F2EC] no-underline border-b border-[rgba(244,242,236,0.3)] pb-[3px] transition-colors duration-200 hover:text-gold-200 hover:border-gold-200"
              >
                kontakt@martinhsu.digital
              </a>
              <a
                href="mailto:kontakt@martinhsu.digital"
                className="inline-flex items-center gap-2 text-[0.84rem] tracking-[0.03em] font-medium
                           px-[1.6rem] py-[0.78rem] rounded-full no-underline
                           bg-gold-500 text-[#1A1404] border border-gold-500
                           transition-opacity duration-200 hover:opacity-88"
              >
                Nachricht senden →
              </a>
            </div>
          </div>

          {/* Right record */}
          <aside className="border border-[rgba(244,242,236,0.18)] bg-blue-900">
            <div className="flex justify-between items-baseline px-[1.1rem] py-[0.85rem] border-b border-[rgba(244,242,236,0.18)]">
              <span className="font-mono text-[0.64rem] tracking-[0.14em] uppercase text-blue-300">
                Zusammenarbeit · Index
              </span>
              <span className="font-mono text-[0.6rem] tracking-[0.1em] text-[rgba(244,242,236,0.66)]">
                REC-06
              </span>
            </div>
            {RECORD_ROWS.map(({ label, value, live }) => (
              <div
                key={label}
                className="flex justify-between gap-4 px-[1.1rem] py-[0.72rem] border-b border-[rgba(244,242,236,0.10)] last:border-b-0"
              >
                <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-blue-300 pt-[0.15rem] whitespace-nowrap">
                  {label}
                </span>
                {live ? (
                  <span className="inline-flex items-center gap-[0.4rem] text-gold-200 font-mono text-[0.72rem] tracking-[0.04em]">
                    <span className="nav-pulse-dot" />
                    {value}
                  </span>
                ) : (
                  <span className="text-[0.82rem] text-[#F4F2EC] text-right leading-[1.4]">
                    {value}
                  </span>
                )}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
