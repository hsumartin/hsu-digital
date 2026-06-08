import PageShell from '@/components/layout/PageShell';
import WritingHeader from '@/components/writings/WritingHeader';
import WritingRecord from '@/components/writings/WritingRecord';
import WritingAbstract from '@/components/writings/WritingAbstract';
import WritingSection from '@/components/writings/WritingSection';
import WritingFigure from '@/components/writings/WritingFigure';
import WritingConnections from '@/components/writings/WritingConnections';
import WritingNextNav from '@/components/writings/WritingNextNav';
import { WritingDetail } from '@/data/writings';

const cluster = [
  { key: 'System Core', val: 'Promptarchitektur, Analyse, Debugging, UX-Führung und Exportlogik.' },
  { key: 'Reflexion', val: 'Denkmodelle, blinde Flecken, Entscheidungslogik und Meta-Fragen.' },
  { key: 'Governance', val: 'Regeln, Ethik, Datenschutz, Verantwortung und Grenzen des KI-Einsatzes.' },
  { key: 'Anwendung', val: 'Karriere, Workshop, Projekte, Product Ownership, Requirements und Fachdomänen.' },
];

const governance = [
  { key: 'Eignung', val: 'Ist die Aufgabe überhaupt geeignet für KI-Unterstützung oder wäre ein einfacheres Mittel wirksamer?' },
  { key: 'Risiko', val: 'Gibt es Risiken durch Datenschutz, Halluzination, falsche Autorität oder unkontrollierte Automatisierung?' },
  { key: 'Verantwortung', val: 'Ist klar, wer Ziel, Kontext, Freigabe und Ergebnisverantwortung trägt?' },
];

function TableBlock({ rows }: { rows: Array<{ key: string; val: string }> }) {
  return (
    <div className="border border-stone-200 bg-[#F8F7F3] mt-[1.8rem]">
      {rows.map((row) => (
        <div
          key={row.key}
          className="grid grid-cols-[14rem_1fr] border-t border-stone-100 first:border-t-0 max-[650px]:grid-cols-1"
        >
          <div className="p-[1rem_1.1rem] border-r border-stone-100 font-mono text-[0.72rem] tracking-[0.08em] text-blue-700 max-[650px]:border-r-0 max-[650px]:border-b max-[650px]:border-dashed">
            {row.key}
          </div>
          <div className="p-[1rem_1.1rem] text-[0.9rem] leading-[1.6] text-stone-700 font-light">
            {row.val}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function GptStackDossier({ writing }: { writing: WritingDetail }) {
  return (
    <PageShell>
      <WritingHeader
        eyebrow="Architektur-Referenzpapier · Version 1.4"
        title={<>GPT-<em className="italic text-gold-600">Stack</em></>}
        subtitle={writing.subtitle}
        lead={writing.lead}
        tags={[
          { label: 'GPT-Stack', variant: 'gold' },
          { label: 'Architektur', variant: 'blue' },
          { label: 'Governance' },
          { label: 'Agentik' },
          { label: 'KI-Methodik' },
        ]}
      />

      <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <WritingRecord items={writing.record} />
      </div>

      <div className="grid grid-cols-[220px_1fr] gap-16 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[4.8rem] pb-24 max-[960px]:grid-cols-1 max-[960px]:gap-10">
        {/* TOC Aside */}
        <aside className="sticky top-24 self-start max-[960px]:static" aria-label="Inhaltsnavigation">
          <div className="border border-stone-200 bg-[#F8F7F3] p-[1.1rem_1.15rem]">
            <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-gold-600 mb-[0.85rem]">
              Inhalt
            </div>
            <ol className="list-none grid gap-[0.55rem] max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
              {[
                ['abstract', '01', 'Abstract'],
                ['problem', '02', 'Ausgangsproblem'],
                ['leitidee', '03', 'Leitidee'],
                ['architektur', '04', 'Architektur'],
                ['cluster', '05', 'Funktionscluster'],
                ['praxis', '06', 'Praxisbeispiel'],
                ['entwicklung', '07', 'Entwicklungspfad'],
                ['governance', '08', 'Governance'],
                ['relevanz', '09', 'Relevanz'],
                ['verbindungen', '10', 'Verbindungen'],
              ].map(([id, num, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex gap-[0.65rem] items-baseline py-[0.58rem] no-underline font-mono text-[0.68rem] tracking-[0.05em] text-stone-400 hover:text-stone-900 transition-colors"
                  >
                    <span className="text-blue-700">{num}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0">

          {/* 01 Abstract */}
          <WritingSection id="abstract" num="01" label="Abstract">
            <WritingAbstract paragraphs={writing.abstractText} />
          </WritingSection>

          {/* 02 Ausgangsproblem */}
          <WritingSection id="problem" num="02" label="Ausgangsproblem">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[20ch]">
                Das Problem ist kein Modellproblem
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1rem]">
                In der Praxis werden Sprachmodelle häufig als universelle Assistenzsysteme eingesetzt.
                Ein einzelnes GPT soll gleichzeitig analysieren, strukturieren, schreiben, prüfen,
                reflektieren, strategisch denken und konsistent bleiben.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1rem]">
                Je mehr Aufgaben ein System gleichzeitig übernehmen soll, desto unschärfer wird seine
                funktionale Rolle. Die Folgen sind inkonsistente Antworten, unklare
                Qualitätsmassstäbe und schwer prüfbare Ergebnisse.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-6 my-8 font-serif text-[1.05rem] italic leading-[1.75] text-stone-900">
                Das Problem ist kein Modellproblem. Es ist ein Architekturproblem.
              </blockquote>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Die Frage lautet deshalb nicht nur, wie ein einzelnes Modell besser werden kann,
                sondern wie KI so strukturiert wird, dass sie nachvollziehbarer und kontrollierbarer
                eingesetzt werden kann.
              </p>
            </div>
          </WritingSection>

          {/* 03 Leitidee */}
          <WritingSection id="leitidee" num="03" label="Leitidee">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[20ch]">
                Qualität entsteht aus Struktur
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1rem]">
                Die Leitidee des GPT-Stacks ist, KI nicht als monolithisches Assistenzsystem zu
                behandeln, sondern als bewusst aufgebaute Systemlandschaft aus spezialisierten Rollen.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Der Fokus verschiebt sich von der Frage, was ein Modell kann, zur Frage, wie
                verschiedene Denk- und Arbeitsfunktionen sinnvoll voneinander getrennt und wieder
                aufeinander bezogen werden können.
              </p>
            </div>
            {/* flow-grid: drei Prinzipien */}
            <div className="grid grid-cols-3 gap-px bg-stone-200 border border-stone-200 max-[760px]:grid-cols-1">
              {[
                { num: 'Prinzip 01', title: 'Rollentrennung', text: 'Analyse, Schreiben, Prüfung und Strategie werden nicht in einer einzigen Rolle vermischt.' },
                { num: 'Prinzip 02', title: 'Modularität', text: 'Module können ergänzt, ersetzt oder verbessert werden, ohne das Gesamtsystem neu zu entwerfen.' },
                { num: 'Prinzip 03', title: 'Reflexion', text: 'Der Stack prüft nicht nur Ergebnisse, sondern auch Denkpfade, Grenzen und Einsatzlogik.' },
              ].map((p) => (
                <div key={p.num} className="bg-[#FBFAF7] p-[1.35rem_1.45rem]">
                  <div className="font-mono text-[0.58rem] tracking-[0.16em] text-gold-600 mb-[0.55rem]">{p.num}</div>
                  <h3 className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-blue-700 mb-[0.55rem]">{p.title}</h3>
                  <p className="text-[0.88rem] leading-[1.65] text-stone-700 font-light">{p.text}</p>
                </div>
              ))}
            </div>
          </WritingSection>

          {/* 04 Architektur */}
          <WritingSection id="architektur" num="04" label="Architektur">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[20ch]">
                Vier konzentrische Ebenen
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Der GPT-Stack lässt sich als konzentrisches Modell beschreiben. Die Ebenen sind
                nicht hierarchisch im Sinne eines oben und unten, sondern funktional aufeinander
                bezogen. Der Wert entsteht an ihren Schnittstellen.
              </p>
            </div>
            <WritingFigure
              label="ABB. 01 · KREISMODELL"
              type="FigurePlate · diagram"
              src="/assets/writings/gpt-stack/gpt-stack-kreismodell.svg"
              caption="GPT-Stack als konzentrisches Modell: System Core, Methodik und Reflexion, Anwendung sowie Portfolio und Öffentlichkeit. Meta-Governance wirkt als Querschnittsfunktion."
              width={1500}
              height={1500}
            />
          </WritingSection>

          {/* 05 Funktionscluster */}
          <WritingSection id="cluster" num="05" label="Funktionscluster">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[20ch]">
                Sieben Cluster, eine Architektur
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Der Stack wird nicht über die Anzahl einzelner GPTs beschrieben. Entscheidend ist,
                welche Funktionen sie im Gesamtsystem übernehmen.
              </p>
            </div>
            <TableBlock rows={cluster} />
          </WritingSection>

          {/* 06 Praxisbeispiel */}
          <WritingSection id="praxis" num="06" label="Praxisbeispiel">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[20ch]">
                Wie der Stack eine Aufgabe verarbeitet
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1rem]">
                Eine konkrete Arbeitsaufgabe läuft nicht einfach durch ein einzelnes GPT. Sie wird
                vom Stack in funktionale Schritte aufgeteilt: Kontextklärung, Strukturierung,
                Erstellung, Prüfung, Reflexion und Überführung.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-6 my-8 font-serif text-[1.05rem] italic leading-[1.75] text-stone-900">
                Kein einzelner Schritt übernimmt alles. Qualität entsteht durch das Zusammenspiel
                der Cluster.
              </blockquote>
            </div>
            <WritingFigure
              label="ABB. 02 · PRAXISDURCHLAUF"
              type="FigurePlate · process"
              src="/assets/writings/gpt-stack/gpt-stack-praxisbeispiel-durchlauf.svg"
              caption="Praxisbeispiel-Durchlauf: Eine Aufgabe wird über mehrere Cluster geführt. Rückkopplungen zeigen, dass der Prozess iterativ und nicht linear funktioniert."
              width={1700}
              height={1000}
            />
          </WritingSection>

          {/* 07 Entwicklungspfad */}
          <WritingSection id="entwicklung" num="07" label="Entwicklungspfad">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[20ch]">
                Vom Custom GPT zum Agenten-Ökosystem
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Der GPT-Stack ist nicht als Endpunkt gedacht. Er ist eine Vorstufe für komplexere
                KI-Architekturen. Custom GPTs machen Rollen, Module, Interaktionsmuster und
                Prüflogiken zunächst sichtbar und testbar.
              </p>
            </div>
            <WritingFigure
              label="ABB. 03 · ENTWICKLUNGSPFAD"
              type="FigurePlate · diagram"
              src="/assets/writings/gpt-stack/gpt-stack-entwicklungspfad.svg"
              caption="Entwicklungspfad: Vom einzelnen Custom GPT über Rollenarchitektur, Modellvariation und Meta-Governance bis hin zur Agentenarchitektur und einem lokalen KI-Ökosystem."
              width={1700}
              height={720}
            />
          </WritingSection>

          {/* 08 Governance */}
          <WritingSection id="governance" num="08" label="Governance">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[20ch]">
                Wann kein GPT gebraucht wird
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Der GPT-Stack funktioniert nicht ohne bewusste Begrenzung. Reflexion über
                KI-Einsatz bedeutet auch, zu fragen, wann kein GPT gebraucht wird.
              </p>
            </div>
            <TableBlock rows={governance} />
          </WritingSection>

          {/* 09 Relevanz */}
          <WritingSection id="relevanz" num="09" label="Relevanz">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[20ch]">
                Architektur als Haltung
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1rem]">
                Der GPT-Stack zeigt, wie jemand mit KI denkt, nicht nur, wie er KI nutzt. Er
                verbindet technisches Verständnis, methodische Tiefe, Qualitätslogik, Governance
                und systemische Reflexion.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1rem]">
                Als Portfolio-Schrift belegt er eine Arbeitsweise, die KI nicht über einzelne
                Prompts oder Tools erklärt, sondern über Struktur, Rollen, Schnittstellen und
                Verantwortung.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-6 my-8 font-serif text-[1.05rem] italic leading-[1.75] text-stone-900">
                Qualität entsteht nicht durch Modellstärke allein, sondern durch die Struktur, in
                der Modelle eingesetzt werden.
              </blockquote>
            </div>
          </WritingSection>

          {/* 10 Verbindungen */}
          <WritingSection id="verbindungen" num="10" label="Verbindungen">
            <WritingConnections
              cols={[
                {
                  title: 'Wirkt in',
                  items: [
                    { label: 'KI-Architektur' },
                    { label: 'Promptsysteme' },
                    { label: 'Agentenlogik' },
                    { label: 'Portfolio-Strategie' },
                  ],
                },
                {
                  title: 'Verwandte Schriften',
                  items: [
                    { label: 'Decision Layer', href: '/schriften/decision-layer' },
                    { label: 'KI-Governance', href: '/schriften/ki-governance' },
                    { label: 'Denkarchitektur', href: '/schriften/denkarchitektur' },
                  ],
                },
                {
                  title: 'Verwandte Projekte',
                  items: [
                    { label: 'CivitasFlow', href: '/projekte/civitasflow' },
                    { label: 'GIS-Suchfunktion', href: '/projekte/gis-suchfunktion' },
                    { label: 'Algorithmische Wärme', href: '/projekte/algorithmische-waerme' },
                  ],
                },
              ]}
            />
          </WritingSection>

          {/* Contact CTA */}
          <section
            className="bg-blue-800 text-[#F5F4F0] border border-[#183B55] p-[clamp(2rem,4vw,3.2rem)]
                       grid grid-cols-[1.35fr_1fr] gap-12 items-end mt-4 max-[780px]:grid-cols-1"
            aria-label="Kontaktabschluss"
          >
            <div>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.2rem)] leading-[1.28] tracking-[-0.01em] max-w-[16ch] text-[#F5F4F0]">
                Struktur sichtbar machen, bevor sie <em className="italic text-[#F0E1B5]">automatisiert</em> wird.
              </h2>
            </div>
            <div>
              <p className="text-[1rem] leading-[1.75] text-[rgba(244,242,236,0.72)] font-light max-w-[42ch]">
                Für Gespräche zu KI-Architektur, Promptsystemen, Governance und strukturiertem
                KI-Einsatz in komplexen Umgebungen.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="mailto:kontakt@martinhsu.digital"
                  className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem]"
                >
                  kontakt@martinhsu.digital
                </a>
              </div>
            </div>
          </section>

          <WritingNextNav />
        </div>
      </div>
    </PageShell>
  );
}
