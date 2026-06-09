import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

const FLOW_STEPS = [
  { num: '01', title: 'Problem', body: 'Was genau soll gelöst werden — und für wen? Erst der Bedarf, nicht die Technologie.' },
  { num: '02', title: 'Systemverständnis', body: 'Zuständigkeiten, Daten, Abläufe modellieren. Das System verstehen, bevor man eingreift.' },
  { num: '03', title: 'Lösungsoptionen', body: 'Regelbasiert, datenbasiert, KI-gestützt — mehrere Wege offen denken.' },
  { num: '04', title: 'Bewertung', body: 'Drei Fragen entscheiden: Problem Fit · Value Fit · Risk Fit.' },
] as const;

const CRITERIA = [
  {
    idx: 'L1',
    title: 'Problem Fit',
    body: 'Löst KI hier ein echtes, klar umrissenes Problem — oder wird sie einer Aufgabe übergestülpt, die anders besser gelöst wäre?',
    q: '→ Passt das Werkzeug zum Problem?',
  },
  {
    idx: 'L2',
    title: 'Value Fit',
    body: 'Steht der Nutzen in einem tragfähigen Verhältnis zu Aufwand, Pflege und organisatorischer Belastung?',
    q: '→ Lohnt der Einsatz dauerhaft?',
  },
  {
    idx: 'L3',
    title: 'Risk Fit',
    body: 'Sind Datenschutz, Nachvollziehbarkeit und Kontrolle gewährleistet — bleibt der Mensch an den entscheidenden Stellen im Loop?',
    q: '→ Bleibt es verantwortbar?',
  },
] as const;

const EVIDENCE = [
  {
    title: 'GPT‑Stack',
    role: 'KI strukturiert',
    roleVariant: 'blue' as const,
    body: 'Eine modulare Denk- und Arbeitsarchitektur. Struktur vor Modell — Qualität entsteht aus dem Aufbau, in dem Modelle eingesetzt werden.',
    src: { label: 'Schrift', href: '/schriften/gpt-stack', text: 'GPT-Stack' },
  },
  {
    title: 'Lokale Agentensysteme',
    role: 'Kontrolle',
    roleVariant: 'blue' as const,
    body: 'Lokal betreibbar, ohne Cloud-Abhängigkeit. Volle Datenkontrolle und Human-in-the-loop als Architekturprinzip, nicht als Nachgedanke.',
    src: { label: 'Prinzip', href: null, text: 'Kontrolle beim Menschen' },
  },
  {
    title: 'CivitasFlow',
    role: 'KI punktuell',
    roleVariant: 'blue' as const,
    body: 'KI nur an klar umrissenen Stellen denkbar (Dokument-, Wissensstrukturierung). Der Kernprozess bleibt modelliert und menschlich verantwortet.',
    src: { label: 'Projekt', href: '/projekte/civitasflow', text: 'CivitasFlow' },
  },
  {
    title: 'GIS‑Suchfunktion',
    role: 'Bewusst ohne KI',
    roleVariant: 'gold' as const,
    body: 'Räumliche Zuständigkeit ist über deterministische SQL-Logik exakt lösbar. KI wäre hier unnötige Komplexität — die einfachere Lösung ist die bessere.',
    src: { label: 'Projekt', href: '/projekte/gis-suchfunktion', text: 'GIS-Suchfunktion' },
  },
] as const;

export default function MethodeKiSection() {
  return (
    <section id="section-03" aria-label="Methode und Haltung zu KI">
      {/* INTRO */}
      <div className="relative px-[clamp(1.5rem,4vw,4rem)] pt-24 pb-0">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(43,104,149,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(43,104,149,0.10) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(100% 80% at 18% 6%, #000 26%, transparent 66%)',
            WebkitMaskImage: 'radial-gradient(100% 80% at 18% 6%, #000 26%, transparent 66%)',
          }}
        />
        <div className="relative z-10 max-w-[84rem] mx-auto">
          <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-text-muted mb-6">
            Editorial Architecture × Civic Digital ×{' '}
            <b className="text-gold-600 font-medium">AI Clarity</b>
          </p>
          <SectionLabel num="03">Methode &amp; Haltung zu KI</SectionLabel>

          <div className="grid-2col-intro-wide gap-8 md:gap-12 items-end pb-8 md:pb-12">
            <h2 className="font-serif font-normal text-[clamp(2rem,3.8vw,3rem)] leading-[1.26] tracking-[-0.01em] max-w-[17ch] pb-[0.04em]">
              Zuerst das System.{' '}
              <em className="italic text-gold-600">Dann das Werkzeug.</em>
            </h2>
            <p className="text-[1.04rem] leading-[1.7] text-stone-700 font-light max-w-[44ch]">
              KI ist für mich kein Ziel, sondern ein Werkzeug innerhalb eines größeren Systems.{' '}
              <b className="text-ink font-medium">Ich verstehe und strukturiere zuerst das Problem</b>{' '}
              — und entscheide danach, ob KI verstärkt oder eine einfachere Lösung trägt.
            </p>
          </div>

          {/* Origin strip */}
          <div className="flex flex-wrap border border-stone-200 bg-paper-soft -mt-[0.4rem]">
            {[
              { k: 'Erprobt in', v: 'CivitasFlow · UGZ Zürich' },
              { k: 'Aus der Rolle', v: 'Product Ownership · Requirements' },
              { k: 'Aus den Daten', v: 'GIS · Verwaltungsprozesse' },
              { k: 'Haltung', v: 'erklärbar · kontrolliert' },
            ].map(({ k, v }) => (
              <div
                key={k}
                className="flex-1 min-w-[170px] flex flex-col gap-1 px-[1.1rem] py-[0.8rem] border-r border-stone-200 last:border-r-0"
              >
                <span className="font-mono text-[0.56rem] tracking-[0.12em] uppercase text-text-muted">{k}</span>
                <span className="font-mono text-[0.76rem] text-blue-800">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DECISION PROCESS */}
      <div className="px-[clamp(1.5rem,4vw,4rem)] max-w-[84rem] mx-auto">
        <div className="pt-[3.4rem]">
          <div className="font-mono text-[0.66rem] tracking-[0.2em] uppercase text-gold-600 mb-[0.4rem]">
            Der Entscheidungsweg
          </div>
          <p className="text-[0.92rem] text-text-muted font-light mb-[1.6rem] max-w-[56ch]">
            Jeder KI-Einsatz durchläuft denselben Pfad — entstanden in realen
            Verwaltungsprojekten. Am Ende steht eine bewusste Entscheidung.
          </p>

          <div className="grid-4col-cards border border-stone-200 bg-[#FBFAF7]">
            {FLOW_STEPS.map(({ num, title, body }, i) => (
              <div
                key={num}
                className={[
                  'relative px-[1.4rem] py-[1.4rem]',
                  i % 2 === 0 ? 'border-r border-stone-200' : '',
                  i < 2 ? 'border-b border-stone-200' : '',
                  i < 3 ? 'lg:border-r lg:border-stone-200' : 'lg:border-r-0',
                  'lg:border-b-0',
                ].join(' ')}
              >
                {i < 3 && (
                  <div
                    aria-hidden="true"
                    className="absolute right-[-8px] top-1/2 -translate-y-1/2 z-20 w-[15px] h-[15px]
                               rounded-full bg-paper border border-stone-200 flex items-center
                               justify-center text-blue-800 font-mono text-[0.6rem]"
                  >
                    →
                  </div>
                )}
                <div className="font-mono text-[0.62rem] tracking-[0.12em] text-blue-800 mb-2">{num}</div>
                <h4 className="font-serif font-normal text-[1.4rem] leading-[1.18] mb-2">{title}</h4>
                <p className="text-[0.84rem] text-stone-700 font-light leading-[1.55]">{body}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 justify-center my-6 font-mono text-[0.66rem] tracking-[0.16em] uppercase text-text-muted">
            <span className="h-px w-12 bg-stone-200" />
            Ergebnis der Bewertung
            <span className="h-px w-12 bg-stone-200" />
          </div>

          <div className="grid-2col gap-5">
            <div className="border border-[rgba(201,169,75,0.4)] bg-gradient-to-b from-[rgba(201,169,75,0.07)] to-transparent p-[1.5rem] flex gap-[1.1rem] items-start">
              <span className="font-mono text-[0.7rem] tracking-[0.08em] text-gold-600 border border-[rgba(201,169,75,0.5)] bg-[rgba(201,169,75,0.08)] rounded-sm px-2 py-[0.3rem] whitespace-nowrap">
                KI
              </span>
              <div>
                <h5 className="font-serif font-normal text-[1.35rem] leading-[1.2] mb-[0.35rem]">KI einsetzen</h5>
                <p className="text-[0.86rem] text-stone-700 font-light leading-[1.55]">
                  Wenn das Problem unscharf, sprachlich oder musterhaft ist und{' '}
                  <b className="text-ink font-medium">der Mensch in der Kontrolle bleibt</b>{' '}
                  — als verstärkendes Werkzeug an klar umrissener Stelle.
                </p>
              </div>
            </div>
            <div className="border border-stone-200 bg-[#FBFAF7] p-[1.5rem] flex gap-[1.1rem] items-start">
              <span className="font-mono text-[0.7rem] tracking-[0.08em] text-blue-800 border border-stone-200 rounded-sm px-2 py-[0.3rem] whitespace-nowrap">
                ALT
              </span>
              <div>
                <h5 className="font-serif font-normal text-[1.35rem] leading-[1.2] mb-[0.35rem]">Einfachere Lösung</h5>
                <p className="text-[0.86rem] text-stone-700 font-light leading-[1.55]">
                  Wenn das Problem deterministisch lösbar ist, ist eine{' '}
                  <b className="text-ink font-medium">prüfbare, regelbasierte Lösung</b>{' '}
                  robuster, günstiger und nachvollziehbarer als KI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DECISION LAYER — dark band */}
      <div
        className="relative mt-[3.4rem] px-[clamp(1.5rem,4vw,4rem)] py-[3.2rem]"
        style={{ background: '#0C1622', color: '#EDEAE3' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(191,216,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(191,216,234,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(90% 80% at 80% 0%, #000 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(90% 80% at 80% 0%, #000 20%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-[84rem] mx-auto">
          <span className="inline-block font-mono text-[0.58rem] tracking-[0.1em] uppercase text-blue-300 border border-[rgba(191,216,234,0.25)] rounded-full px-[0.7rem] py-[0.25rem] mb-[1.4rem]">
            AI Clarity · der Kern der Haltung
          </span>
          <div className="font-mono text-[0.66rem] tracking-[0.2em] uppercase text-gold-200 mb-[0.4rem]">
            Decision Layer — die drei Fragen an der Bewertung
          </div>
          <p className="text-[0.92rem] text-[rgba(237,234,227,0.62)] font-light mb-[1.6rem] max-w-[56ch]">
            Kein Compliance-Schritt, sondern ein Denkraster: bewusste Begrenzung statt
            Maximierung.
          </p>
          <div
            className="grid-3col gap-px border border-[rgba(191,216,234,0.16)]"
            style={{ background: 'rgba(191,216,234,0.16)' }}
          >
            {CRITERIA.map(({ idx, title, body, q }) => (
              <div key={idx} className="px-6 py-[1.6rem]" style={{ background: '#102234' }}>
                <div className="flex items-start gap-[0.6rem] mb-[1.05rem]">
                  <span className="font-mono text-[0.62rem] text-blue-300 pt-[0.55rem]">{idx}</span>
                  <span className="font-serif text-[1.5rem] leading-[1.05] text-[#EDEAE3] whitespace-nowrap">
                    {title}
                  </span>
                </div>
                <p className="text-[0.88rem] text-[rgba(237,234,227,0.62)] font-light leading-[1.6]">
                  {body}
                </p>
                <div className="font-mono text-[0.6rem] tracking-[0.06em] text-gold-200 mt-[0.9rem]">
                  {q}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EVIDENCE */}
      <div className="px-[clamp(1.5rem,4vw,4rem)] max-w-[84rem] mx-auto">
        <div className="pt-[3.4rem]">
          <div className="font-mono text-[0.66rem] tracking-[0.2em] uppercase text-gold-600 mb-[0.4rem]">
            Belegt an realen Projekten
          </div>
          <p className="text-[0.92rem] text-text-muted font-light mb-[1.6rem] max-w-[56ch]">
            Die Haltung zeigt sich in Entscheidungen — auch in der bewussten Entscheidung gegen KI.
          </p>
          <div className="grid-2col gap-px border border-stone-200"
               style={{ background: '#D6D2C8' }}>
            {EVIDENCE.map(({ title, role, roleVariant, body, src }) => (
              <div key={title} className="bg-[#FBFAF7] p-[1.5rem]">
                <div className="flex justify-between items-start gap-4 mb-[1.05rem]">
                  <span className="font-serif text-[1.5rem] leading-[1.16] flex-1 min-w-0 pb-[0.06em] text-ink">
                    {title}
                  </span>
                  <span
                    className={[
                      'font-mono text-[0.6rem] tracking-[0.1em] uppercase border rounded-full px-[0.7rem] py-[0.26rem] whitespace-nowrap',
                      roleVariant === 'gold'
                        ? 'text-gold-600 border-[rgba(201,169,75,0.45)] bg-[rgba(201,169,75,0.08)]'
                        : 'text-blue-800 border-[rgba(43,104,149,0.32)] bg-[rgba(43,104,149,0.06)]',
                    ].join(' ')}
                  >
                    {role}
                  </span>
                </div>
                <p className="text-[0.88rem] text-stone-700 font-light leading-[1.6]">{body}</p>
                <div className="mt-[0.9rem] font-mono text-[0.58rem] tracking-[0.08em] uppercase text-text-muted">
                  {src.label} ·{' '}
                  {src.href ? (
                    <Link href={src.href} className="text-blue-800 no-underline hover:underline">
                      {src.text} →
                    </Link>
                  ) : (
                    src.text
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 border-t border-stone-200 pt-10 pb-16 mt-[3.4rem]">
          <div className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-text-muted whitespace-nowrap pt-[0.6rem]">
            Haltung
          </div>
          <div>
            <blockquote className="font-serif text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.34] text-ink tracking-[-0.005em]">
              Qualität von KI-Arbeit entsteht nicht durch Modellleistung, sondern durch die{' '}
              <em className="italic text-gold-600">
                Struktur, innerhalb derer Modelle eingesetzt werden.
              </em>
            </blockquote>
            <div className="font-mono text-[0.66rem] tracking-[0.1em] text-text-muted mt-4">
              Aus dem Whitepaper &bdquo;GPT-Stack&ldquo; ·{' '}
              <Link href="/schriften" className="text-gold-600 no-underline hover:underline">
                Schriften ansehen →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
