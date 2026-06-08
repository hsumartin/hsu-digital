import PageShell from '@/components/layout/PageShell';
import WritingHeader from '@/components/writings/WritingHeader';
import WritingRecord from '@/components/writings/WritingRecord';
import WritingAbstract from '@/components/writings/WritingAbstract';
import WritingSection from '@/components/writings/WritingSection';
import WritingFigure from '@/components/writings/WritingFigure';
import WritingConnections from '@/components/writings/WritingConnections';
import WritingNextNav from '@/components/writings/WritingNextNav';
import { WritingDetail } from '@/data/writings';

/* ── Shared prose primitives ── */
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1rem] leading-[1.85] text-stone-700 font-light mb-[1.25rem]">{children}</p>
);
const BQ = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-2 border-gold-500 pl-6 my-8 font-serif text-[1.05rem] italic leading-[1.75] text-stone-900">
    {children}
  </blockquote>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-blue-700 mt-8 mb-3">
    {children}
  </h3>
);

function TableBlock({ rows }: { rows: Array<{ key: string; val: string }> }) {
  return (
    <div className="border border-stone-200 bg-[#F8F7F3] mt-[1.8rem] mb-[1.8rem]">
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-[14rem_1fr] border-t border-stone-100 first:border-t-0 max-[650px]:grid-cols-1"
        >
          <div className="p-[0.7rem_1.1rem] border-r border-stone-100 font-mono text-[0.72rem] tracking-[0.06em] text-blue-700 font-medium max-[650px]:border-r-0 max-[650px]:border-b max-[650px]:border-dashed">
            {row.key}
          </div>
          <div className="p-[0.7rem_1.1rem] text-[0.88rem] leading-[1.6] text-stone-700 font-light">
            {row.val}
          </div>
        </div>
      ))}
    </div>
  );
}

const tocItems = [
  ['abstract',   '01', 'Abstract'],
  ['ausgangslage', '02', 'Ausgangslage'],
  ['perspektivwechsel', '03', 'Perspektivwechsel'],
  ['definition', '04', 'Was ist der Decision Layer?'],
  ['grundprinzip', '05', 'Grundprinzip'],
  ['modell', '06', '3-Schichten-Modell'],
  ['entscheidungslogik', '07', 'Entscheidungslogik'],
  ['entscheidungsmodell', '08', 'Entscheidungsmodell'],
  ['praxisbeispiele', '09', 'Praxisbeispiele'],
  ['verantwortung', '10', 'Verantwortung'],
  ['strategisch', '11', 'Strategische Bedeutung'],
  ['regulatorik', '12', 'Regulatorische Anschlussfähigkeit'],
  ['leitfragen', '13', 'Leitfragen'],
  ['canvas', '14', 'Decision Layer Canvas'],
  ['verankerung', '15', 'Organisatorische Verankerung'],
  ['fazit', '16', 'Fazit'],
];

export default function DecisionLayerDossier({ writing }: { writing: WritingDetail }) {
  return (
    <PageShell>
      <WritingHeader
        eyebrow="Whitepaper · Methodisches Begleitdokument zur KI-Governance · Version 2.0"
        title={<>Decision <em className="italic text-gold-600">Layer</em></>}
        subtitle={writing.subtitle}
        lead={writing.lead}
        tags={[
          { label: 'Governance', variant: 'gold' },
          { label: 'Entscheidungslogik', variant: 'blue' },
          { label: 'Regulierte Umgebungen' },
          { label: 'KI-Einsatzprüfung' },
          { label: 'Strategie' },
        ]}
      />

      <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <WritingRecord items={writing.record} />
      </div>

      <div className="grid grid-cols-[220px_1fr] gap-16 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[4.8rem] pb-24 max-[960px]:grid-cols-1 max-[960px]:gap-10">
        {/* TOC */}
        <aside className="sticky top-24 self-start max-[960px]:static" aria-label="Inhaltsnavigation">
          <div className="border border-stone-200 bg-[#F8F7F3] p-[1.1rem_1.15rem]">
            <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-gold-600 mb-[0.85rem]">Inhalt</div>
            <ol className="list-none grid gap-[0.3rem] max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
              {tocItems.map(([id, num, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex gap-[0.65rem] items-baseline py-[0.4rem] no-underline font-mono text-[0.65rem] tracking-[0.04em] text-stone-400 hover:text-stone-900 transition-colors">
                    <span className="text-blue-700 shrink-0">{num}</span>
                    <span className="leading-tight">{label}</span>
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

          {/* 02 Ausgangslage */}
          <WritingSection id="ausgangslage" num="02" label="Ausgangslage">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Das eigentliche Problem ist nicht KI — sondern ihr Einsatz
              </h2>
              <P>Künstliche Intelligenz wird in vielen Organisationen nicht mehr primär eingeführt, weil ein klar definiertes Problem ihren Einsatz erfordert, sondern weil die Technologie verfügbar, sichtbar und strategisch attraktiv erscheint. Dadurch entsteht ein strukturelles Risiko: KI wird zur Standardantwort, bevor die eigentliche Frage präzise gestellt wurde.</P>
              <P>Die zentrale Fehlannahme vieler KI-Initiativen besteht darin, <strong className="text-stone-900 font-medium">technische Machbarkeit mit organisatorischer Sinnhaftigkeit zu verwechseln</strong>. Ein System kann leistungsfähig sein und dennoch das falsche Problem lösen. Es kann automatisieren, ohne Wert zu schaffen. Es kann Komplexität erhöhen, obwohl eine einfachere Lösung stabiler, transparenter und wirtschaftlicher wäre.</P>
              <P>Die Folgen sind häufig nicht sofort sichtbar, wirken aber langfristig systemisch: unnötige Komplexität, steigende Betriebskosten, schwer nachvollziehbare Entscheidungswege, sinkende Transparenz gegenüber Nutzern und Aufsichtsinstanzen, Automatisierung ohne klare Zielsetzung.</P>
            </div>
          </WritingSection>

          {/* 03 Perspektivwechsel */}
          <WritingSection id="perspektivwechsel" num="03" label="Perspektivwechsel">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Von Fähigkeiten zu Entscheidungen
              </h2>
              <P>Je leichter KI verfügbar wird, desto weniger liegt der Engpass in der technischen Umsetzbarkeit. Der Engpass verschiebt sich zur Qualität der Entscheidung — wann, wo und wofür KI eingesetzt wird.</P>
              <BQ>Nicht: Was kann KI leisten? Sondern: In welchem Kontext erzeugt KI tatsächlich den grössten Nutzen?</BQ>
              <P>KI möglich bedeutet nicht automatisch: KI sinnvoll. Ein System kann technisch beeindruckend und zugleich organisatorisch unnötig sein. Die Reife im Umgang mit KI zeigt sich daher nicht in der Breite ihres Einsatzes, sondern in der Präzision ihrer Begrenzung.</P>
            </div>
          </WritingSection>

          {/* 04 Definition */}
          <WritingSection id="definition" num="04" label="Was ist der Decision Layer?">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Was ist der Decision Layer?
              </h2>
              <P>Der <strong className="text-stone-900 font-medium">Decision Layer</strong> ist eine vorgelagerte Entscheidungslogik, die vor jeder KI-Implementierung prüft, ob KI in einem konkreten Anwendungsfall die sinnvollste Lösung darstellt. Er beantwortet eine zentrale Frage:</P>
              <BQ>Ist KI für diesen Anwendungsfall funktional, wirtschaftlich und organisatorisch sinnvoll — oder ist eine klassische Lösung überlegen?</BQ>
              <P>Er fungiert als:</P>
              <ul className="list-disc pl-6 mb-5 space-y-2">
                {[
                  { strong: 'Filter vor der Systemwahl:', text: ' Nicht jede Aufgabe wird automatisch als KI-Problem behandelt.' },
                  { strong: 'Strategische Entscheidungsinstanz:', text: ' Der Einsatz von KI wird begründet, priorisiert und dokumentiert.' },
                  { strong: 'Governance-Instrument:', text: ' Risiken, Verantwortlichkeiten und Kontrollmechanismen werden frühzeitig sichtbar.' },
                  { strong: 'Gegenmodell zu unreflektiertem AI-first-Denken:', text: ' KI wird nicht zum Reflex, sondern zur bewusst gewählten Option.' },
                ].map((item, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">
                    <strong className="text-stone-900 font-medium">{item.strong}</strong>{item.text}
                  </li>
                ))}
              </ul>
            </div>
          </WritingSection>

          {/* 05 Grundprinzip */}
          <WritingSection id="grundprinzip" num="05" label="Grundprinzip">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Die einfachste funktionierende Lösung gewinnt
              </h2>
              <P>Ein zentrales Missverständnis im Umgang mit KI besteht in der Annahme, dass die fortschrittlichste Technologie automatisch die beste Lösung sei. In der Praxis ist häufig das Gegenteil der Fall.</P>
              <BQ>Die einfachste funktionierende Lösung gewinnt.</BQ>
              <P>KI wird nur dann eingesetzt, wenn sie gegenüber klassischen Ansätzen einen klaren Vorteil bietet. Fehlt ein solcher Vorteil, ist der Einsatz von KI nicht nur unnötig, sondern potenziell schädlich. Daraus folgen drei praktische Leitlinien:</P>
              <ol className="list-decimal pl-6 mb-5 space-y-2">
                {[
                  'Funktionierende Prozesse werden nicht ersetzt, nur weil KI verfügbar ist.',
                  'Strukturierte Probleme werden nicht künstlich komplex gemacht.',
                  'KI wird gezielt eingesetzt, nicht pauschal.',
                ].map((item, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">{item}</li>
                ))}
              </ol>
            </div>
          </WritingSection>

          {/* 06 Das Modell */}
          <WritingSection id="modell" num="06" label="Das 3-Schichten-Modell">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Das 3-Schichten-Modell des Decision Layers
              </h2>
              <P>Der Decision Layer lässt sich in drei Prüfebenen strukturieren: <strong className="text-stone-900 font-medium">Problem Fit</strong>, <strong className="text-stone-900 font-medium">Value Fit</strong> und <strong className="text-stone-900 font-medium">Risk Fit</strong>. Diese drei Ebenen verhindern, dass KI nur aus technischer Perspektive bewertet wird. Sie verbinden Problemverständnis, Nutzenbewertung und Governance in einer gemeinsamen Entscheidungslogik.</P>
              <H3>Problem Fit: Passt der Problemtyp zu KI?</H3>
              <P>Wenn ein Problem vollständig regelbasiert, eindeutig und reproduzierbar lösbar ist, spricht wenig für KI. Wenn Bedeutung aus Kontext erschlossen werden muss, steigt die Eignung. Zentrale Fragen: Ist das Problem deterministisch oder interpretativ? Liegen eindeutige Regeln vor oder braucht es Kontextverständnis? Sind die Informationen strukturiert oder unstrukturiert?</P>
              <H3>Value Fit: Erzeugt KI einen klaren Mehrwert?</H3>
              <P>Ein KI-Einsatz ist nur dann sinnvoll, wenn er nicht bloss technologisch möglich, sondern funktional und wirtschaftlich überlegen ist. Zentrale Fragen: Verbessert KI die Qualität der Ergebnisse? Ermöglicht KI Fähigkeiten, die klassische Systeme nicht leisten können? Rechtfertigt das Volumen die zusätzlichen Kosten?</P>
              <H3>Risk Fit: Ist der Einsatz verantwortbar?</H3>
              <P>Je höher Risiko, Verantwortung und Nachvollziehbarkeitsanforderungen sind, desto stärker muss KI eingegrenzt, kontrolliert oder als unterstützende statt entscheidende Komponente eingesetzt werden. Zentrale Fragen: Müssen Ergebnisse erklärbar oder auditierbar sein? Welche regulatorischen Anforderungen bestehen? Wer trägt Verantwortung für Ergebnisse?</P>
              <H3>Kernlogik</H3>
              <BQ>Nur wenn Problem Fit, Value Fit und Risk Fit überzeugend erfüllt sind, ist KI als Lösung strategisch sinnvoll.</BQ>
            </div>
            <WritingFigure
              label="ABB. 01 · 3-SCHICHTEN-MODELL"
              type="FigurePlate · diagram"
              src="/assets/writings/decision-layer/drei_schichten_modell_de.svg"
              caption="Abb. 1 — Drei sequenzielle Bewertungsebenen: Problem Fit · Value Fit · Risk Fit"
              width={1200}
              height={600}
            />
          </WritingSection>

          {/* 07 Entscheidungslogik */}
          <WritingSection id="entscheidungslogik" num="07" label="Entscheidungslogik">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Nach welchen Kriterien wird bewertet?
              </h2>
              <H3>Problemtyp</H3>
              <P>Ist das Problem deterministisch oder interpretativ? Gibt es eindeutige Regeln oder offene Bewertungsspielräume? Deterministische Probleme mit klaren Regeln eignen sich meist für klassische Systeme. Interpretative Probleme mit hoher Kontextabhängigkeit sind deutlich eher KI-geeignet.</P>
              <H3>Datenstruktur</H3>
              <P>Liegen Daten strukturiert vor, oder sind Informationen unstrukturiert, verteilt oder sprachlich komplex? KI entfaltet ihren Mehrwert besonders dort, wo Informationen nicht sauber strukturiert sind und semantische Interpretation erforderlich ist.</P>
              <H3>Variabilität und Skalierungsbedarf</H3>
              <P>Je stärker Fälle variieren, desto schwieriger wird eine rein regelbasierte Lösung. Hohe Variabilität kann für KI sprechen — sofern Risiken und Qualitätssicherung beherrschbar bleiben. Ein geringer Skalierungsbedarf spricht oft gegen KI, selbst wenn der Anwendungsfall technisch geeignet wäre.</P>
              <H3>Kosten-Nutzen-Verhältnis</H3>
              <P>Jede KI-Lösung erzeugt laufende Aufwände: Betrieb und Modellkosten, Monitoring und Qualitätssicherung, Governance und Dokumentation sowie Wartung und Risikomanagement. KI ist nur sinnvoll, wenn der erwartete Nutzen diese Aufwände rechtfertigt.</P>
              <H3>Nachvollziehbarkeit und Wartbarkeit</H3>
              <P>Besonders in regulierten Kontexten ist Transparenz entscheidend. Müssen Entscheidungen erklärbar sein? Kann die Lösung von internen Teams verstanden und gepflegt werden? Eine KI-Lösung, die kurzfristig beeindruckt, aber langfristig schwer wartbar ist, erzeugt strategische Schulden.</P>
            </div>
          </WritingSection>

          {/* 08 Entscheidungsmodell */}
          <WritingSection id="entscheidungsmodell" num="08" label="Entscheidungsmodell">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Vier mögliche Ergebnisse
              </h2>
              <P>Aus der Bewertung ergeben sich vier typische Entscheidungspfade — der Decision Layer führt nicht zwangsläufig zu einem Ja oder Nein:</P>
            </div>
            <TableBlock rows={[
              { key: 'Keine KI', val: 'Aufgaben vollständig regelbasiert, deterministisch und transparent lösbar. Klassische Systeme sind präziser, günstiger und besser kontrollierbar.' },
              { key: 'Begrenzte KI', val: 'Anwendungsfall enthält sowohl deterministische als auch interpretative Elemente. KI wird gezielt dort eingesetzt, wo sie echten Mehrwert erzeugt.' },
              { key: 'Unterstützende KI', val: 'KI analysiert, strukturiert, priorisiert oder fasst zusammen. Die Verantwortung bleibt beim Menschen.' },
              { key: 'Integrierte KI', val: 'Stärkere Automatisierung bei geeignetem Risikoprofil: Problemtyp, Datenlage, Qualitätssicherung und Governance lassen dies zu. Monitoring bleibt essenziell.' },
            ]} />
            <WritingFigure
              label="ABB. 02 · ENTSCHEIDUNGSPFADE"
              type="FigurePlate · diagram"
              src="/assets/writings/decision-layer/entscheidungspfade_de.svg"
              caption="Abb. 2 — Vier Entscheidungspfade: Keine KI · Begrenzte KI · Unterstützende KI · Integrierte KI"
              width={1400}
              height={600}
            />
          </WritingSection>

          {/* 09 Praxisbeispiele */}
          <WritingSection id="praxisbeispiele" num="09" label="Praxisbeispiele">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Drei Anwendungsfälle, drei Entscheidungen
              </h2>
              <H3>Beispiel 1: Automatisierte Prüfung von Dokumenten und Anträgen</H3>
              <P>Ein naheliegender Ansatz besteht darin, einen KI-Agenten einzusetzen, der eingereichte Dokumente analysiert und potenzielle Unstimmigkeiten erkennt. Der Decision Layer zeigt jedoch, dass dieser erste Eindruck zu grob ist.</P>
              <P><strong className="text-stone-900 font-medium">Deterministische Prüfungen</strong> — Vollständigkeit der Unterlagen, Einhaltung von Formatvorgaben, Fristen und formale Kriterien — sind vollständig regelbasiert. Klassische Systemlogik ist hier nicht nur ausreichend, sondern überlegen.</P>
              <P><strong className="text-stone-900 font-medium">Interpretative Komponenten</strong> — Freitexte, Begründungen, Widersprüche oder fachliche Einschätzungen — sind ein anderer Fall. Hier kann KI einen echten Mehrwert schaffen.</P>
              <P><strong className="text-stone-900 font-medium">Schlussfolgerung:</strong> Hybride Architektur — klassische Systeme für formale Prüfungen, KI für semantische Analyse, menschliche Entscheidung bei Verantwortung und Sonderfällen.</P>
              <H3>Beispiel 2: Kontextbasierte Auswertung unstrukturierter Informationen</H3>
              <P>Organisationen arbeiten täglich mit grossen Mengen unstrukturierter Informationen: E-Mails, Berichten, Notizen, Protokollen. KI weist mehrere Merkmale auf, die hier eindeutig für ihren Einsatz sprechen: Informationen liegen unstrukturiert vor, Bedeutung entsteht durch sprachlichen Kontext, menschliche Bearbeitung ist zeitaufwendig und schwer skalierbar.</P>
              <BQ>KI als unterstützende Analyse- und Strukturierungsschicht — mit menschlicher Kontrolle bei verbindlichen Entscheidungen.</BQ>
              <H3>Beispiel 3: Wenn klassische Systeme überlegen sind</H3>
              <P>Viele Aufgaben sind deterministisch, reproduzierbar und ohne semantische Interpretation lösbar. Statusabfragen, Berechnungen, Plausibilitätsprüfungen, einfache Routing-Entscheidungen. Hier sind klassische Systeme präziser, transparenter, stabiler, günstiger und leichter zu warten.</P>
              <BQ>Der bewusste Verzicht auf KI kann Ausdruck höherer Systemreife sein.</BQ>
            </div>
          </WritingSection>

          {/* 10 Verantwortung */}
          <WritingSection id="verantwortung" num="10" label="Menschliche Verantwortung">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Verantwortung bleibt nicht delegierbar
              </h2>
              <P>KI kann Entscheidungen vorbereiten, Optionen strukturieren, Muster erkennen und Informationen verdichten. Sie ersetzt jedoch keine Verantwortung. Der Mensch übernimmt drei zentrale Funktionen, die nicht an ein System delegiert werden können:</P>
              <P><strong className="text-stone-900 font-medium">Kontextbewertung:</strong> Menschen können organisatorische, ethische, politische und soziale Kontexte einbeziehen, die nicht vollständig in Daten oder Modellen abgebildet sind.</P>
              <P><strong className="text-stone-900 font-medium">Finale Entscheidung:</strong> In risikorelevanten Fällen muss klar definiert sein, wer entscheidet. Verantwortung kann nicht vollständig an ein System übergeben werden.</P>
              <P><strong className="text-stone-900 font-medium">Korrektur und Eskalation:</strong> Menschen müssen erkennen können, wann KI-Ergebnisse unplausibel, unvollständig oder unangemessen sind.</P>
            </div>
          </WritingSection>

          {/* 11 Strategische Bedeutung */}
          <WritingSection id="strategisch" num="11" label="Strategische Bedeutung">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Gegenmodell zum reflexhaften AI-first-Denken
              </h2>
              <P>Der Decision Layer verschiebt den Fokus von Technologie zu Entscheidungsqualität und verändert damit die Art, wie Organisationen über Automatisierung, Verantwortung und Systemarchitektur nachdenken. Die strategische Wirkung zeigt sich auf mehreren Ebenen:</P>
              <ul className="list-disc pl-6 mb-5 space-y-2">
                {[
                  { strong: 'Wirtschaftlich:', text: ' Investitionen werden fokussierter, überdimensionierte Lösungen werden vermieden.' },
                  { strong: 'Organisatorisch:', text: ' Klarheit zwischen Fachbereichen, IT, Management und Governance-Funktionen.' },
                  { strong: 'Technologisch:', text: ' Robustere Gesamtarchitektur, in der klassische Automatisierung, KI-Komponenten und menschliche Verantwortung zusammenspielen.' },
                  { strong: 'Kulturell:', text: ' Eine Haltung bewusster Technologieentscheidungen statt technologischem Aktionismus.' },
                ].map((item, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">
                    <strong className="text-stone-900 font-medium">{item.strong}</strong>{item.text}
                  </li>
                ))}
              </ul>
              <BQ>Die Fähigkeit, KI bewusst zu begrenzen, wird zur strategischen Kernkompetenz.</BQ>
            </div>
          </WritingSection>

          {/* 12 Regulatorik */}
          <WritingSection id="regulatorik" num="12" label="Regulatorische Anschlussfähigkeit">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Kompatibel mit moderner KI-Governance
              </h2>
              <P>Der Decision Layer ist besonders anschlussfähig an drei Entwicklungen. Erstens: <strong className="text-stone-900 font-medium">Risikobasierte KI-Governance</strong> — moderne Regulierung folgt zunehmend einer risikobasierten Logik. Der Decision Layer greift diese Logik früh im Prozess auf. Zweitens: <strong className="text-stone-900 font-medium">Managementsysteme für KI</strong> — der Decision Layer kann als vorgelagerter Baustein eines KI-Managementsystems verstanden werden. Drittens: <strong className="text-stone-900 font-medium">Vertrauenswürdigkeit und Verantwortlichkeit</strong> — vertrauenswürdige KI entsteht nicht allein durch bessere Modelle, sondern durch nachvollziehbare Entscheidungen und klare Verantwortlichkeiten.</P>
            </div>
          </WritingSection>

          {/* 13 Leitfragen */}
          <WritingSection id="leitfragen" num="13" label="Praktische Leitfragen">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Praktische Leitfragen vor jeder KI-Implementierung
              </h2>
              <ol className="list-decimal pl-6 mb-5 space-y-2">
                {[
                  'Welches konkrete Problem soll gelöst werden?',
                  'Ist das Problem deterministisch oder interpretativ?',
                  'Liegen die relevanten Informationen strukturiert oder unstrukturiert vor?',
                  'Welche Teile des Prozesses lassen sich klassisch besser lösen?',
                  'Wo entsteht durch KI ein nachweisbarer Mehrwert?',
                  'Welche Risiken entstehen durch probabilistische Ergebnisse?',
                  'Welche Entscheidungen müssen nachvollziehbar oder erklärbar sein?',
                  'Wer trägt Verantwortung für Ergebnisse und Folgeentscheidungen?',
                  'Wie werden Qualität, Fehler und Abweichungen überwacht?',
                  'Ist die Lösung langfristig wartbar und wirtschaftlich tragfähig?',
                ].map((q, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">{q}</li>
                ))}
              </ol>
            </div>
          </WritingSection>

          {/* 14 Canvas */}
          <WritingSection id="canvas" num="14" label="Decision Layer Canvas">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Praktisches Arbeitsinstrument
              </h2>
              <P>Der folgende Canvas übersetzt den Decision Layer in ein praktisches Arbeitsinstrument für frühe Projektphasen, Use-Case-Bewertungen und Discovery-Workshops.</P>
            </div>
            <TableBlock rows={[
              { key: '1. Use Case', val: 'Welcher konkrete Anwendungsfall wird geprüft?' },
              { key: '2. Ziel des Prozesses', val: 'Welches Ergebnis soll verbessert werden?' },
              { key: '3. Problemtyp', val: 'Deterministisch, interpretativ oder gemischt?' },
              { key: '4. Datenstruktur', val: 'Strukturiert, teilstrukturiert oder unstrukturiert?' },
              { key: '5. Interpretationsbedarf', val: 'Muss Bedeutung aus Kontext erschlossen werden?' },
              { key: '6. Klassische Lösungsoption', val: 'Welche nicht-KI-basierte Lösung wäre möglich?' },
              { key: '7. Erwarteter KI-Mehrwert', val: 'Was kann KI besser als klassische Systeme?' },
              { key: '8. Kosten und Aufwand', val: 'Welche Implementierungs- und Betriebsaufwände entstehen?' },
              { key: '9. Risiken', val: 'Welche Fehler, Verzerrungen oder Governance-Risiken sind relevant?' },
              { key: '10. Human-in-the-Loop', val: 'Wo ist menschliche Kontrolle notwendig?' },
              { key: '11. Monitoring', val: 'Wie werden Qualität und Abweichungen überwacht?' },
              { key: '12. Entscheidung', val: 'Keine KI / Begrenzte KI / Unterstützende KI / Integrierte KI' },
            ]} />
          </WritingSection>

          {/* 15 Verankerung */}
          <WritingSection id="verankerung" num="15" label="Organisatorische Verankerung">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Wer löst den Decision Layer aus?
              </h2>
              <P>Damit der Decision Layer wirksam wird, muss er nicht nur konzeptionell verstanden, sondern organisatorisch eingebettet sein. Er greift typischerweise in frühen Projektphasen — bei der Bewertung neuer Digitalisierungsvorhaben, vor der Auswahl technischer Lösungen, im Rahmen von Proof-of-Concept-Entscheidungen.</P>
              <P>Ausgelöst wird er durch Rollen, die für Struktur, Anforderungen und Priorisierung verantwortlich sind: Product Owner, Business Analysten, Projektverantwortliche, Enterprise-Architekten, Governance- und Compliance-Verantwortliche.</P>
            </div>
          </WritingSection>

          {/* 16 Fazit */}
          <WritingSection id="fazit" num="16" label="Fazit">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Der Fortschritt liegt in der bewussten Begrenzung
              </h2>
              <P>Der Decision Layer ist kein technisches Detail, sondern eine grundlegende Denklogik für den reifen Umgang mit Künstlicher Intelligenz. Er zeigt, dass KI nicht dort am wertvollsten ist, wo sie maximal eingesetzt wird, sondern dort, wo ihr Einsatz präzise begründet ist.</P>
            </div>
            <TableBlock rows={[
              { key: 'Effizientere Systeme', val: 'Weniger Überdimensionierung, klarere Systemgrenzen.' },
              { key: 'Geringere Komplexität', val: 'Nur dort KI, wo sie einen echten Vorteil bringt.' },
              { key: 'Bessere Entscheidungsqualität', val: 'Begründete Entscheidungen statt technologischer Reflexe.' },
              { key: 'Transparentere Governance', val: 'Nachvollziehbare Kriterien für alle Beteiligten.' },
              { key: 'Wirtschaftlichere KI-Investitionen', val: 'Fokussierter Ressourceneinsatz.' },
              { key: 'Robustere Mensch-Maschine-Architekturen', val: 'Klare Verantwortungsgrenzen zwischen System und Mensch.' },
            ]} />
            <div className="max-w-[66ch] mt-4">
              <BQ>Nicht der Einsatz von KI ist entscheidend — sondern die Qualität der Entscheidung, wann sie sinnvoll ist.</BQ>
            </div>
          </WritingSection>

          {/* Verbindungen */}
          <WritingSection id="verbindungen" num="17" label="Verbindungen">
            <WritingConnections
              cols={[
                {
                  title: 'Wirkt in',
                  items: [
                    { label: 'KI-Governance' },
                    { label: 'Entscheidungsarchitektur' },
                    { label: 'Regulierte Umgebungen' },
                    { label: 'Strategische Planung' },
                  ],
                },
                {
                  title: 'Verwandte Schriften',
                  items: [
                    { label: 'GPT-Stack', href: '/schriften/gpt-stack' },
                    { label: 'KI-Governance', href: '/schriften/ki-governance' },
                    { label: 'Denkarchitektur', href: '/schriften/denkarchitektur' },
                  ],
                },
                {
                  title: 'Verwandte Projekte',
                  items: [
                    { label: 'CivitasFlow', href: '/projekte/civitasflow' },
                    { label: 'GIS-Suchfunktion', href: '/projekte/gis-suchfunktion' },
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
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.2rem)] leading-[1.28] tracking-[-0.01em] max-w-[18ch] text-[#F5F4F0]">
                KI bewusst <em className="italic text-[#F0E1B5]">begrenzen</em> statt reflexhaft einsetzen.
              </h2>
            </div>
            <div>
              <p className="text-[1rem] leading-[1.75] text-[rgba(244,242,236,0.72)] font-light max-w-[42ch]">
                Für Gespräche zu KI-Entscheidungslogik, Governance-Frameworks und strategischem KI-Einsatz in Organisationen.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a href="mailto:kontakt@martinhsu.digital" className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem]">
                  kontakt@martinhsu.digital
                </a>
              </div>
            </div>
          </section>

          <WritingNextNav
            prev={{ label: 'GPT-Stack', kicker: 'Denkmodell', href: '/schriften/gpt-stack' }}
            next={{ label: 'KI-Governance', kicker: 'Position', href: '/schriften/ki-governance' }}
          />
        </div>
      </div>
    </PageShell>
  );
}
