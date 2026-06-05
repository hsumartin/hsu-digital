import PageShell from '@/components/layout/PageShell';
import WritingHeader from '@/components/writings/WritingHeader';
import WritingRecord from '@/components/writings/WritingRecord';
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
  <blockquote className="border-l-2 border-gold-500 pl-6 my-8 font-serif text-[1.1rem] italic leading-[1.6] text-stone-900">
    {children}
  </blockquote>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-blue-700 mt-8 mb-3">
    {children}
  </h3>
);
const SecH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
    {children}
  </h2>
);

function TableBlock({ rows, headers }: { rows: string[][]; headers: string[] }) {
  return (
    <div className="border border-stone-200 bg-[#F8F7F3] mt-[1.8rem] mb-[1.8rem] overflow-auto">
      <table className="w-full border-collapse" style={{ minWidth: 540 }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="bg-[#F8F7F3] font-mono text-[0.58rem] tracking-[0.09em] uppercase font-medium text-stone-400 px-4 py-[0.78rem] text-left border-b border-stone-200">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-[0.75rem] border-b border-stone-100 text-[0.88rem] leading-[1.55] last:border-b-0 ${j === 0 ? 'font-medium text-stone-900' : 'text-stone-700 font-light'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tocItems = [
  ['abstract',      '01', 'Abstract'],
  ['prolog',        '02', 'Der Moment der Verschiebung'],
  ['denken',        '03', 'KI als Kooperationspartner'],
  ['ebenen',        '04', 'Vier Ebenen des GPT-Stacks'],
  ['useplus',       '05', 'USE+ Framework™'],
  ['promptpilot',   '06', 'Systemkern & Governance'],
  ['emergenz',      '07', 'Qualität durch Rückkopplung'],
  ['agenten',       '08', 'Architekturgetriebene Führung'],
  ['profil',        '09', 'Cognitive System Architecture'],
  ['module',        '10', 'Module & KPI-Set'],
  ['ethik',         '11', 'Verantwortung'],
  ['oekologien',    '12', 'Denkökologien'],
  ['naechste',      '13', 'Nächste Schritte'],
  ['verbindungen',  '14', 'Verbindungen'],
];

export default function DenkarchitekturDossier({ writing }: { writing: WritingDetail }) {
  return (
    <PageShell>
      <WritingHeader
        eyebrow="Whitepaper · Konzept- und Framework-Papier"
        title={<>Vom Tool zur <em className="italic text-gold-600">Denkarchitektur</em></>}
        subtitle={writing.subtitle}
        lead={writing.lead}
        tags={[
          { label: 'GPT-Stack', variant: 'gold' },
          { label: 'USE+ Framework™', variant: 'blue' },
          { label: 'PromptPilot' },
          { label: 'Methodik' },
          { label: 'Agentik' },
          { label: 'Systemarchitektur' },
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
            <div className="bg-[#F8F7F3] border border-stone-200 px-[1.85rem] py-[1.65rem] mb-12 max-w-[66ch]">
              <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-gold-600 mb-[0.9rem]">Kerngedanke</p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-4">
                KI entfaltet ihr Potenzial nicht im einzelnen Prompt, sondern in der Architektur des Denkens. Der GPT-Stack, das USE+ Framework™ und der PromptPilot machen Denkprozesse sichtbar, strukturierbar und steuerbar — Grundlage für reproduzierbare Erkenntnis statt zufälliger Outputs.
              </p>
              <dl className="mt-4 grid gap-y-2">
                {[
                  { dt: 'Wert', dd: 'Kohärenz statt Fragmentierung; Reproduzierbarkeit statt Zufall; schnellere Lernkurven.' },
                  { dt: 'Ergebnisse', dd: 'Kürzere Entscheidungszeiten, höhere Terminologie- und Strukturqualität, auditierbare Wissenspfade.' },
                  { dt: 'Vorgehen', dd: '(1) Stack-Blueprint & Marker, (2) PromptPilot produktiv, (3) USE+ in Kern-Workflows, (4) Agent-Loops für Kohärenz/Qualität.' },
                  { dt: 'Ausblick', dd: 'Eine Denkökologie — ein Netzwerk aus Menschen, GPTs und Agenten, das Erkenntnis organisiert.' },
                ].map((item) => (
                  <div key={item.dt}>
                    <dt className="text-[0.82rem] font-medium text-stone-900">{item.dt}</dt>
                    <dd className="text-[0.85rem] text-stone-700 font-light">{item.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </WritingSection>

          {/* 02 Prolog */}
          <WritingSection id="prolog" num="02" label="Prolog — Der Moment der Verschiebung">
            <div className="max-w-[66ch]">
              <SecH2>Der Moment der Verschiebung</SecH2>
              <P>Ein Routinegespräch im PromptPilot — es ging um die Verfeinerung eines Systemprompts — führte zu einem unerwarteten Perspektivwechsel. Aus der lokalen Frage nach Formulierungsqualität entstand eine Struktur für Denkbewegungen: USE+. Rückblickend lässt sich dieser Moment als Ergebnis einer stillen Regel beschreiben: Wenn Interaktionen protokolliert, Zustände explizit gemacht und Entscheidungen rückverfolgbar werden, kondensieren Muster zu Modellen.</P>
              <P>Systemisch betrachtet ist das bemerkenswert, weil es die Grenze zwischen Werkzeuggebrauch und Erkenntnis verschiebt. Der Prompt war nicht länger Anweisung, sondern Messpunkt; der Dialog nicht länger Transaktion, sondern Raum für Hypothesenbildung. Aus wiederkehrenden Schleifen — Beobachten, Prüfen, Umformen — formte sich ein achtsamer Regelkreis.</P>
              <BQ>USE+ wurde nachträglich benannt, aber es war in der Interaktion bereits wirksam. Reflexion ersetzt Reaktion. Das System reagiert nicht — es erkennt.</BQ>
            </div>
          </WritingSection>

          {/* 03 KI als Kooperationspartner */}
          <WritingSection id="denken" num="03" label="KI als Kooperationspartner des Denkens">
            <div className="max-w-[66ch]">
              <SecH2>KI als Kooperationspartner des Denkens</SecH2>
              <P>Die verbreitete Metapher der «KI als Werkzeug» ist praktisch, aber sie unterschlägt eine zentrale Wirkung: Sprachmodelle spiegeln Denkstrukturen. Wer regelmässig mit ihnen arbeitet, erkennt, dass die Qualität der Ergebnisse weniger von einzelnen Eingaben abhängt als von der <strong className="text-stone-900 font-medium">Gestalt des Dialogs</strong> — von den Relationen zwischen Intention, Kontext, Evidenz und Rückkopplung.</P>
              <P>Diese Verschiebung wird sichtbar, sobald Interaktionen als Prozess statt als Ereignis verstanden werden. Fragen prägen Antworten, doch Antworten prägen wiederum Folgefragen; aus dieser Rückkopplung entsteht eine Architektur. Praktisch heisst das: Es genügt nicht, Modelle um bessere Formulierungen zu bitten — die Arbeit liegt darin, Annahmen zu explizieren, Zielgruppen zu klären, Qualitätskriterien festzulegen und Entscheidungen nachvollziehbar zu machen.</P>
              <P>Empirisch zeigt sich, dass Teams, die Interaktionen systematisch dokumentieren und auf wiederkehrende Strukturen prüfen, schneller zu stabilen Ergebnissen kommen. Entscheidend ist nicht die Perfektion eines einzelnen Durchgangs, sondern die <strong className="text-stone-900 font-medium">Reproduzierbarkeit</strong> des Weges dorthin.</P>
            </div>
          </WritingSection>

          {/* 04 Vier Ebenen */}
          <WritingSection id="ebenen" num="04" label="Vier Ebenen mit klar definierten Schnittstellen">
            <div className="max-w-[66ch]">
              <SecH2>Vier Ebenen mit klar definierten Schnittstellen</SecH2>
              <P>Systemisch betrachtet entsteht der Nutzen generativer Modelle nicht im einzelnen Prompt, sondern in der Architektur der Beziehungen zwischen Regeln, Methoden, Anwendungen und Reflexion. Der GPT-Stack beschreibt diese Architektur als vier Ebenen mit klar definierten Schnittstellen.</P>
              <H3>Kern-Ebene</H3>
              <P>Die Kern-Ebene fasst jene Elemente, die Stabilität erzeugen: Regelwerke, Ethik- und Governance-Module sowie die Marker-Logik, über die Zustände und Übergänge explizit gemacht werden (z. B. <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Analyse]</code>, <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Check:Evidenz]</code>, <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[Export:Markdown]</code>). Diese Ebene definiert, was als gültige Operation gilt und wann ein Pfad fortgeführt, verzweigt oder beendet wird.</P>
              <H3>Methoden-Ebene</H3>
              <P>Auf der Methoden-Ebene werden wiederkehrende Denk- und Arbeitsweisen gekapselt: Analyse-Module, Evaluationsroutinen, Framework-Bausteine. Methodische Konsistenz wirkt dabei wie ein Verstärker: Wenn Bewertungslogiken als Module vorliegen, kann ein Anwendungsfall ohne erneute Erfindung des Vorgehens skaliert werden.</P>
              <H3>Anwendungs-Ebene</H3>
              <P>Die Anwendungs-Ebene umfasst spezifische Custom-GPTs für Projekte, Lernen, Design oder Organisationsaufgaben. Entscheidend ist, dass Anwendungen nicht isoliert konstruiert werden, sondern aus Kern und Methoden zusammengesetzt sind. Dadurch bleibt ihre innere Logik überprüfbar.</P>
              <H3>Meta-Ebene</H3>
              <P>Die Meta-Ebene hält den Stack in Bewegung. Sie beobachtet, bewertet und optimiert das Systemverhalten. Agenten übernehmen hier Rollen wie Analyst (Muster erkennen), Evaluator (nach Kriterien prüfen), Optimierer (Prompts und Pfade anpassen) und Lerner (Glossare und Marker aktualisieren).</P>
              <BQ>Die Wirkung des Stacks entsteht an den Schnittstellen zwischen den Ebenen. Aus episodischem Arbeiten wird ein reproduzierbarer Prozess.</BQ>
            </div>
            <WritingFigure
              label="ABB. 01 · GPT-STACK ARCHITEKTUR"
              type="FigurePlate · diagram"
              src="/assets/writings/denkarchitektur/stack-poster.png"
              caption="Abb. 1 — GPT-Stack: Kern, Anwendungs-Ebene, Meta-Ebene"
              width={1200}
              height={700}
              maxHeight={600}
            />
          </WritingSection>

          {/* 05 USE+ Framework */}
          <WritingSection id="useplus" num="05" label="USE+ Framework™ — Methodik der Denkentfaltung">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <SecH2>Methodik der Denkentfaltung</SecH2>
              <P>Das USE+-Modell ist weniger ein Prozessdiagramm als eine <strong className="text-stone-900 font-medium">Denkbewegung</strong>. Es beschreibt, wie aus alltäglicher Nutzung eine reflektierte Praxis wird, die Prinzipien und Messpunkte hervorbringt. Es macht sichtbar, wie Arbeit zu Erkenntnis wird.</P>
            </div>
            {/* USE+ cycle 2×2 grid */}
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-[1.8rem] max-[600px]:grid-cols-1">
              {[
                { key: 'UNLOCK', title: 'Sichtbarmachen der Nutzung', text: 'Statt die Qualität einzelner Antworten zu bewerten, wird zunächst die Interaktionsspur gelesen: Welche Aufgaben dominieren? Welche Prompts wiederholen sich? Wo entstehen Abbrüche? Diese Inventur schafft einen gemeinsamen Referenzrahmen.' },
                { key: 'SPOT', title: 'Erkennen ungenutzter Möglichkeiten', text: 'Nicht Fehler im engeren Sinn, sondern ungenutzte Möglichkeiten: fehlende Taxonomien, unklare Ausgangsdaten, unscharfe Kriterien, unterlassene Rückkopplung. Das Potenzial wird präzisiert, nicht maximiert.' },
                { key: 'EXPAND', title: 'Erlebbare Erweiterung', text: 'Statt abstrakter Empfehlungen werden kleine Simulationen erzeugt: ein Beispiel-Workflow, ein konkret gefülltes Schema, zwei kontrastierende Varianten. Diese Artefakte sind Beweise durch Erfahrung.' },
                { key: 'ELEVATE', title: 'Metaperspektive verankern', text: 'Die erprobten Elemente werden in Prinzipien, Policies und Marker überführt: Welche Quellenpflicht gilt? Welche Quality Gates sind verbindlich? Aus Episoden wird System.' },
              ].map((step) => (
                <div key={step.key} className="bg-[#FBFAF7] p-[1.5rem]">
                  <p className="font-mono text-[0.72rem] tracking-[0.2em] text-gold-600 font-medium mb-[0.6rem]">{step.key}</p>
                  <h4 className="text-[0.9rem] font-medium text-stone-900 mb-[0.4rem]">{step.title}</h4>
                  <p className="text-[0.88rem] leading-[1.65] text-stone-700 font-light m-0">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="max-w-[66ch]">
              <P>Ein kurzer Fall verdeutlicht den Ablauf: In einer Produkt-Discovery stauten sich Feature-Vorschläge. UNLOCK zeigte Wiederholungen. SPOT machte sichtbar, dass ein Outcomes-Raster fehlte. EXPAND simulierte drei Nutzer-Stories mit messbaren Ergebnissen. ELEVATE setzte den Bewertungsmarker <code className="font-mono text-[0.88em] bg-stone-100 px-1 rounded">[OutcomeScore]</code> und einen minimalen Evidenzstandard fest. Das Team gewann Klarheit, Rework ging zurück.</P>
              <BQ>USE+ wirkte nicht als zusätzlicher Prozess, sondern als Architektur einer Bewegung: vom Wünschbaren zum Begründeten.</BQ>
            </div>
            <WritingFigure
              label="ABB. 02 · USE+ ZYKLUS"
              type="FigurePlate · diagram"
              src="/assets/writings/denkarchitektur/useplus-cycle.png"
              caption="Abb. 2 — USE+ Zyklus: UNLOCK → SPOT → EXPAND → ELEVATE — von der Ist-Nutzung zur Metaperspektive"
              width={1200}
              height={700}
              maxHeight={560}
            />
          </WritingSection>

          {/* 06 PromptPilot */}
          <WritingSection id="promptpilot" num="06" label="Systemkern und Governance — PromptPilot">
            <div className="max-w-[66ch]">
              <SecH2>Systemkern und Governance</SecH2>
              <P>Der PromptPilot bildet das zentrale <strong className="text-stone-900 font-medium">Steuer- und Reflexionssystem</strong> des GPT-Stacks. Er ist keine Variante eines Prompt-Builders, sondern eine integrierte Architektur aus Regeln, Modulen und Prüflogiken, die Interaktionen führt, Zustände erkennt und Qualität institutionalisiert.</P>
              <P>Der PromptPilot kombiniert fünf Elemente:</P>
              <ul className="list-disc pl-6 mb-5 space-y-2">
                {[
                  { strong: 'Rollenprofil-Logik.', text: ' Das Modell agiert als Senior Prompt Engineer & Systemanalyst — klar getrennt von builder-nahen Werkzeugen.' },
                  { strong: 'Modul-Struktur.', text: ' Über 60 adressierbare Module bündeln Referenz-, Analyse-, UX-, Rewrite-, Debug- und Export-Funktionen.' },
                  { strong: 'Marker-System.', text: ' Eindeutige Marker steuern Zustände und Prüfpfade: ', code: '[System:]', codePost: ', [Analyse], [Check:Evidenz], [Export:Markdown].' },
                  { strong: 'Validierungsebene.', text: ' Automatische Prüfungen erkennen doppelte Referenzen, Regelkonflikte und Terminologie-Drift.' },
                  { strong: 'Agentenfähigkeit.', text: ' Der PromptPilot simuliert Handlungslogiken: planen → selbstprüfen → verzweigen → fortsetzen/abbrechen.' },
                ].map((item, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">
                    <strong className="text-stone-900 font-medium">{item.strong}</strong>{item.text}
                  </li>
                ))}
              </ul>
              <P>Der PromptPilot verhindert nicht «Halluzinationen» im engeren Sinn — er <strong className="text-stone-900 font-medium">reduziert deren Wirkung durch strukturelle Redundanz- und Konsistenzprüfungen</strong>. Qualität wird zur Eigenschaft der Architektur, nicht zur nachträglichen Korrektur.</P>
            </div>
            <WritingFigure
              label="ABB. 03 · PROMPTPILOT — ZUSTANDSMASCHINE"
              type="FigurePlate · diagram"
              src="/assets/writings/denkarchitektur/promptpilot-state.png"
              caption="Abb. 3 — PromptPilot: Zustandsmaschine, Marker-System und Quality Gates"
              width={1200}
              height={700}
              maxHeight={560}
            />
          </WritingSection>

          {/* 07 Qualität durch Rückkopplung */}
          <WritingSection id="emergenz" num="07" label="Qualität durch gestaltete Rückkopplung">
            <div className="max-w-[66ch]">
              <SecH2>Qualität durch gestaltete Rückkopplung</SecH2>
              <P>Emergenz beschreibt das Auftreten neuer Strukturen aus wiederholten, lokal sinnvollen Schritten. Im Kontext generativer Modelle ist dies mehr als eine Metapher: Interaktion, Protokollierung und Prüfung erzeugen neue Ebenen der Ordnung, die nicht aus einem Pflichtenheft abzulesen sind.</P>
              <P>Praktisch folgt daraus eine Arbeitsform, die Planung nicht ersetzt, aber anders gewichtet: kurze Iterationen statt langer Spezifikationen; sichtbare Zwischenstände statt impliziter Annahmen; verbindliche Quality Gates statt nachträglicher Kontrolle. Wo Teams so arbeiten, verschiebt sich der Fokus von der Erzeugung einzelner Ergebnisse zur Pflege eines <strong className="text-stone-900 font-medium">Lernraums</strong>, in dem Ergebnisse reproduzierbar werden.</P>
            </div>
          </WritingSection>

          {/* 08 Agenten */}
          <WritingSection id="agenten" num="08" label="Architekturgetriebene Führung — Agentik">
            <div className="max-w-[66ch]">
              <SecH2>Architekturgetriebene Führung</SecH2>
              <P>Agenten sind keine autonome Zielgrösse, sondern eine <strong className="text-stone-900 font-medium">Fähigkeitsschicht</strong> des Stacks. Ihre Aufgabe ist, Denk- und Arbeitsprozesse zu beobachten, zu bewerten und gezielt zu verändern — mit klaren Mandaten und überprüfbaren Effekten.</P>
              <P>Der operative Kern ist ein zyklischer Ablauf: <strong className="text-stone-900 font-medium">Analyse → Evaluation → Optimierung → Lernen.</strong></P>
              <ul className="list-disc pl-6 mb-5 space-y-2">
                {[
                  { strong: 'Analyse:', text: ' Muster und Abweichungen aus Interaktions- und Artefaktspuren werden extrahiert: Terminologie-Drift, widersprüchliche Kriterien, fehlende Quellen.' },
                  { strong: 'Evaluation:', text: ' Prüfung entlang definierter Massstäbe — Kohärenz, Evidenz, Struktur, Stil — erzeugt Ratings, die über Projekte vergleichbar sind.' },
                  { strong: 'Optimierung:', text: ' Konkrete Änderungen werden eingeleitet: Prompts werden neu gerahmt, Pfade anders verzweigt.' },
                  { strong: 'Lernen:', text: ' Glossare, Beispiele und Marker werden aktualisiert, sodass Verbesserungen in den Stack einfliessen.' },
                ].map((item, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">
                    <strong className="text-stone-900 font-medium">{item.strong}</strong>{item.text}
                  </li>
                ))}
              </ul>
              <BQ>Menschen behalten Urteil und Verantwortung; Modelle bringen Reichweite; Agenten sichern Anschlussfähigkeit und Qualität. Das Ergebnis ist eine Symbiose: ein System, das nicht autonom handelt, sondern gemeinsam erkennt.</BQ>
            </div>
            <WritingFigure
              label="ABB. 04 · AGENTEN-LOOP"
              type="FigurePlate · diagram"
              src="/assets/writings/denkarchitektur/agent-loop.png"
              caption="Abb. 4 — Agentik: Analyse → Evaluation → Optimierung → Lernen"
              width={1200}
              height={600}
              maxHeight={480}
            />
          </WritingSection>

          {/* 09 Cognitive System Architecture */}
          <WritingSection id="profil" num="09" label="Cognitive System Architecture als Profil">
            <div className="max-w-[66ch]">
              <SecH2>Cognitive System Architecture als Profil</SecH2>
              <P>Prompt-Engineering erzeugt häufig lokale Effekte: eine gelungene Formulierung, eine schnellere Antwort. Strategische Arbeit hingegen gestaltet Systemwirkungen. Sie setzt nicht bei Prompts an, sondern bei Meta-Frameworks, Rollen und Rückkopplungen, die Qualität reproduzierbar machen.</P>
              <P>Das Profil lässt sich entlang dreier Leitfragen konturieren. <strong className="text-stone-900 font-medium">Erstens:</strong> Welche Prinzipien sind nicht verhandelbar? Dazu zählen Evidenzpflicht, transparente Zustände und klare Datenpfade. <strong className="text-stone-900 font-medium">Zweitens:</strong> Welche Fähigkeiten werden institutionalisiert? Architekturzeichnen, Marker-Design, Evaluationsroutinen. <strong className="text-stone-900 font-medium">Drittens:</strong> Wie wird Lernen gesichert? Durch Log-Pflichten, Versionierung und eine Agentik, die Verbesserungen aus Projekten in den Stack zurückführt.</P>
            </div>
          </WritingSection>

          {/* 10 Module */}
          <WritingSection id="module" num="10" label="Module mit klaren Schnittstellen">
            <div className="max-w-[66ch] mb-0">
              <SecH2>Module mit klaren Schnittstellen</SecH2>
            </div>
            <TableBlock
              headers={['Modul', 'Zweck', 'Output']}
              rows={[
                ['PromptPilot', 'Steuer- und Reflexionsrahmen', 'Entscheidungsreife Pfade, Logs, Zustandsabschlüsse'],
                ['EvaluationGPT', 'Wirkungsanalyse und Qualitätsprüfung', 'Ratings, Befunde, Handlungsempfehlungen'],
                ['MetaPromptGPT', 'Selbstreflexion und Debugging', 'Hypothesen, Korrekturpfade, aktualisierte Marker'],
                ['AtlasGPT', 'Dokumentation und Wissensnetz', 'Navigierbare Tickets, Abhängigkeitskarte'],
                ['AgentBuilder / AgentPilot', 'Orchestrierung', 'Synchronisierte Schleifen, Status-Berichte, Alerts'],
              ]}
            />
            <H3>KPI-Set</H3>
            <TableBlock
              headers={['KPI', 'Ziel nach 90 Tagen']}
              rows={[
                ['Kohärenz (Terminologie-Konsistenz)', '+20 %'],
                ['Entscheidungszeit (Median Frage→Entwurf)', '−30 %'],
                ['Rework (Schleifen bis Freigabe)', '−25 %'],
                ['Governance-Treue (Pfade ohne Override)', 'Messbar steigend'],
              ]}
            />
          </WritingSection>

          {/* 11 Verantwortung */}
          <WritingSection id="ethik" num="11" label="Verantwortung als Gestaltungseigenschaft">
            <div className="max-w-[66ch]">
              <SecH2>Verantwortung als Gestaltungseigenschaft</SecH2>
              <P>Ethik ist kein nachgelagerter Prüfpunkt, sondern eine <strong className="text-stone-900 font-medium">Gestaltungseigenschaft</strong> der Architektur. Der Stack bindet Werte an Verfahren, indem er sie als Regeln, Marker und Schwellen operationalisiert.</P>
              <P>Drei Prinzipien leiten die Umsetzung. <strong className="text-stone-900 font-medium">Transparenz:</strong> Entscheidungen, Quellen und Zustände sind sichtbar und rückverfolgbar. <strong className="text-stone-900 font-medium">Begründung:</strong> Aussagen tragen Evidenz — oder kommunizieren begründete Unsicherheit. <strong className="text-stone-900 font-medium">Begrenzung:</strong> Datenpfade sind definiert; sensible Informationen werden nur in erlaubten Kontexten verarbeitet.</P>
            </div>
          </WritingSection>

          {/* 12 Denkökologien */}
          <WritingSection id="oekologien" num="12" label="Denkökologien">
            <div className="max-w-[66ch]">
              <SecH2>Denkökologien</SecH2>
              <P>Denkökologien bezeichnen Netzwerke aus Menschen, GPTs und Agenten, in denen Wissen weniger gespeichert als <strong className="text-stone-900 font-medium">verknüpft</strong> wird. Der Wert entsteht aus Beziehungsdichte und Rückkopplung: Je dichter die Verbindungen zwischen Rollen, Artefakten und Kontexten, desto schneller werden Hypothesen gebildet, geprüft und verbessert.</P>
              <P>Für die Praxis folgt daraus eine Designregel: Baue <strong className="text-stone-900 font-medium">Schnittstellen zuerst</strong>. Wenn Austausch und Evaluation funktionieren, kann Inhalt iterieren, ohne das System zu destabilisieren.</P>
            </div>
          </WritingSection>

          {/* 13 Nächste Schritte */}
          <WritingSection id="naechste" num="13" label="Nächste Schritte">
            <div className="max-w-[66ch] mb-0">
              <SecH2>Nächste Schritte</SecH2>
              <P>Die Analyse zeigt, dass KI ihr Potenzial entfaltet, wenn sie als Denkarchitektur verstanden und gestaltet wird. Der Stack bietet die Grundform, USE+ liefert die Bewegung, der PromptPilot sichert Führung und Qualität, Agentik schliesst die Schleifen.</P>
            </div>
            {/* Roadmap */}
            <div className="border border-stone-200 bg-[#F8F7F3] mb-8">
              {[
                { time: '30 Tage', text: 'Blueprint, Rollen, Marker v1; Zustände & Logs aktiv; KPI-Baseline.' },
                { time: '90 Tage', text: 'USE+ in drei Kern-Workflows; Agent-Loop produktiv; Quality Gates live; erster Retro-Zyklus; Verbesserungsnachweis.' },
                { time: '180 Tage', text: 'Atlas als Wissensgraph; Ausweitung auf weitere Domänen; Ethik-Marker aktiv; Continuous-Improvement-Backlog.' },
              ].map((step) => (
                <div key={step.time} className="flex gap-6 items-baseline border-t border-stone-100 first:border-t-0 px-6 py-5">
                  <span className="font-mono text-[0.65rem] tracking-[0.15em] text-gold-600 shrink-0 w-20">{step.time}</span>
                  <p className="text-[0.88rem] text-stone-700 font-light m-0">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="max-w-[66ch]">
              <BQ>Reflexion ersetzt Reaktion. Das System reagiert nicht — es erkennt. Wer jetzt baut, baut nicht nur Werkzeuge. Er baut Räume für Erkenntnis.</BQ>
              <p className="text-[0.8rem] text-stone-400 italic mt-8 pt-6 border-t border-stone-100">
                «USE+ Framework™» ist eine Marke von Martin Hsu. Die Nutzung des Namens ohne vorherige schriftliche Zustimmung ist nicht gestattet. © 2025 Martin Hsu. Zitate sind mit Quellenangabe zulässig; Reproduktionen erfordern eine Lizenz.
              </p>
            </div>
          </WritingSection>

          {/* 14 Verbindungen */}
          <WritingSection id="verbindungen" num="14" label="Verbindungen">
            <WritingConnections
              cols={[
                {
                  title: 'Wirkt in',
                  items: [
                    { label: 'Systemarchitektur' },
                    { label: 'Prompt-Engineering' },
                    { label: 'Agentik' },
                    { label: 'Qualitätssicherung' },
                  ],
                },
                {
                  title: 'Verwandte Schriften',
                  items: [
                    { label: 'GPT-Stack', href: '/schriften/gpt-stack' },
                    { label: 'Decision Layer', href: '/schriften/decision-layer' },
                    { label: 'KI-Governance', href: '/schriften/ki-governance' },
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
                Denken als <em className="italic text-[#F0E1B5]">Architektur</em> gestalten.
              </h2>
            </div>
            <div>
              <p className="text-[1rem] leading-[1.75] text-[rgba(244,242,236,0.72)] font-light max-w-[42ch]">
                Für Gespräche zu GPT-Stack, USE+ Framework™, PromptPilot und Systemarchitektur für strukturiertes KI-Denken.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a href="mailto:kontakt@martinhsu.digital" className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem]">
                  kontakt@martinhsu.digital
                </a>
              </div>
            </div>
          </section>

          <WritingNextNav
            prev={{ label: 'KI-Governance', kicker: 'Position', href: '/schriften/ki-governance' }}
          />
        </div>
      </div>
    </PageShell>
  );
}
