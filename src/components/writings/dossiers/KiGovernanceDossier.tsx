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

function TableBlock({ rows }: { rows: Array<{ key: string; val: string; extra?: string }> }) {
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
            {row.extra && <span className="block text-stone-400 mt-1 text-[0.82rem]">{row.extra}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

const tocItems = [
  ['abstract',     '01', 'Abstract & Struktur'],
  ['kap1',         '02', 'Kap. 1 – Ausgangslage'],
  ['kap2',         '03', 'Kap. 2 – Steuerungslücke'],
  ['kap3',         '04', 'Kap. 3 – Zielbild'],
  ['kap4',         '05', 'Kap. 4 – Sechs Prinzipien'],
  ['kap5',         '06', 'Kap. 5 – Decision Layer'],
  ['kap6',         '07', 'Kap. 6 – Operative Verankerung'],
  ['kap7',         '08', 'Kap. 7 – Rolle der Organisation'],
  ['kap8',         '09', 'Kap. 8 – Beschaffung'],
  ['kap9',         '10', 'Kap. 9 – Schlussfolgerung'],
  ['quellenhinweise', '11', 'Quellenhinweise'],
  ['verbindungen', '12', 'Verbindungen'],
];

export default function KiGovernanceDossier({ writing }: { writing: WritingDetail }) {
  return (
    <PageShell>
      <WritingHeader
        eyebrow="Whitepaper · Governance-Rahmenpapier · Version 4.0 · Quellengeprüfter Entwurf"
        title={<>KI-<em className="italic text-gold-600">Governance</em> in regulierten Umgebungen</>}
        subtitle={writing.subtitle}
        lead={writing.lead}
        tags={[
          { label: 'Governance', variant: 'gold' },
          { label: 'Öffentliche Verwaltung', variant: 'blue' },
          { label: 'EU AI Act' },
          { label: 'Regulierte Umgebungen' },
          { label: 'Datenschutz' },
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
          <WritingSection id="abstract" num="01" label="Abstract und Dokumentstruktur">
            <WritingAbstract paragraphs={writing.abstractText} />
            <WritingFigure
              label="ABB. 01 · DOKUMENTSTRUKTUR"
              type="FigurePlate · diagram"
              src="/assets/writings/ki-governance/abb1_governance_dokumentstruktur.svg"
              caption="Abb. 1 — Dokumentstruktur: Diagnose (Kap. 1–2) · Rahmen (Kap. 3–5) · Umsetzung (Kap. 6–8) · Fazit (Kap. 9)"
              width={1200}
              height={600}
            />
          </WritingSection>

          {/* 02 Kap. 1 */}
          <WritingSection id="kap1" num="02" label="Kapitel 1 — Ausgangslage">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Technologische Beschleunigung und institutionelle Trägheit
              </h2>
              <P>Künstliche Intelligenz entwickelt sich in einem Tempo, das bestehende organisatorische, rechtliche und gesellschaftliche Strukturen zunehmend herausfordert. Die öffentliche Verwaltung steht dabei vor einer spezifischen Herausforderung. Während privatwirtschaftliche Unternehmen KI-Systeme vergleichsweise flexibel einführen können, unterliegen Behörden einem anderen Anforderungsprofil. Entscheidungen der öffentlichen Hand betreffen Bürgerinnen und Bürger in unmittelbarer und rechtlich verbindlicher Weise. Sie müssen nachvollziehbar, anfechtbar und im Zweifelsfall juristisch vertretbar sein.</P>
              <P>Institutionelle Trägheit ist dabei nicht allein auf fehlenden Willen zur Veränderung zurückzuführen. Sie ist strukturell bedingt: Budgetzyklen, Ausschreibungsverfahren, Personalentwicklungspfade und Rechtssetzungsprozesse sind auf Stabilität ausgerichtet, nicht auf Anpassungsgeschwindigkeit.</P>
              <H3>Das Spannungsfeld zwischen Innovation und Verantwortung</H3>
              <P>Insbesondere in regulierten Umgebungen entsteht ein Spannungsfeld zwischen zwei zentralen Anforderungen: der Notwendigkeit, Effizienz und Qualität durch technologische Innovation zu steigern, und der Verpflichtung, Entscheidungen nachvollziehbar, rechtssicher und gemeinwohlorientiert zu treffen.</P>
              <P>Die Frage lautet nicht, ob Verwaltungen KI einsetzen sollen, sondern unter welchen Bedingungen, in welchem Umfang und mit welcher Steuerungslogik dies verantwortbar ist.</P>
            </div>
          </WritingSection>

          {/* 03 Kap. 2 */}
          <WritingSection id="kap2" num="03" label="Kapitel 2 — Die Steuerungslücke">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Die Steuerungslücke
              </h2>
              <H3>Fehlende Systematik bei Einsatzentscheidungen</H3>
              <P>Die zentrale Herausforderung liegt nicht in der Technologie selbst, sondern in der fehlenden Fähigkeit vieler Organisationen, ihren Einsatz systematisch zu steuern. Entscheidungen über den KI-Einsatz erfolgen häufig situativ: Ein Werkzeug wird ausprobiert, weil es öffentlich verfügbar ist, oder weil ein Pilotprojekt politischen Rückenwind geniesst. Kriterien wie Eignung der Datenbasis, Überprüfbarkeit der Ergebnisse oder Klärung der Haftungsfrage bleiben dabei oft ungeklärt.</P>
              <H3>Unklare Abgrenzung der KI-Anwendungsformen</H3>
              <P>Unterschiedliche Anwendungsformen von KI stellen grundlegend verschiedene Governance-Anforderungen. Eine Organisation, die nicht zwischen diesen Formen unterscheidet, kann keine angemessene Steuerungslogik entwickeln.</P>
            </div>
            <TableBlock rows={[
              { key: 'Reine Assistenz', val: 'Unterstützung ohne direkte Entscheidungsrelevanz (Textzusammenfassung, Entwürfe)', extra: 'Gering — Prüfverantwortung beim Menschen' },
              { key: 'Entscheidungsunterstützung', val: 'Vorbereitung konkreter Entscheidungen mit rechtlicher oder fachlicher Wirkung', extra: 'Hoch — Prüfmechanismen, Rollenzuweisungen, dokumentierte Verantwortlichkeiten' },
              { key: 'Automatisierte Verarbeitung', val: 'Selbstständige Durchführung ohne kontinuierliche menschliche Aufsicht', extra: 'Höchste Anforderungen — rechtliche Prüfung, Auditierbarkeit, Qualitätskontrollen' },
            ]} />
            <div className="max-w-[66ch]">
              <H3>Algorithmische Fairness als strukturelles Risiko</H3>
              <P>KI-Modelle lernen aus historischen Daten. Wenn diese Daten gesellschaftliche Benachteiligungen widerspiegeln, übernimmt das Modell diese Muster und wendet sie auf neue Fälle an. Im Verwaltungskontext hat dies unmittelbare Auswirkungen auf die Gleichbehandlungspflicht. <strong className="text-stone-900 font-medium">Algorithmische Fairness ist keine optionale ethische Ergänzung, sondern eine rechtlich und organisational verbindliche Anforderung.</strong></P>
              <H3>Erklärbarkeit als Rechtspflicht</H3>
              <P>Die DSGVO beschränkt in Art. 22 Entscheidungen, die ausschliesslich auf automatisierter Verarbeitung beruhen und rechtliche Wirkung entfalten. Der EU AI Act ergänzt diese Logik für bestimmte Hochrisiko-Systeme durch Transparenz-, Dokumentations-, Aufsichts- und Erklärungspflichten. Systeme, die keine nachvollziehbare Erklärung ihrer Ausgaben liefern können, dürfen in rechtlich relevanten Kontexten nicht ohne entsprechende Absicherung eingesetzt werden.</P>
            </div>
          </WritingSection>

          {/* 04 Kap. 3 */}
          <WritingSection id="kap3" num="04" label="Kapitel 3 — Zielbild">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Governance als Ermöglichungsstruktur
              </h2>
              <P>Ziel einer funktionierenden KI-Governance ist nicht die vollständige Kontrolle technologischer Systeme, sondern die Schaffung eines stabilen, nachvollziehbaren und anpassungsfähigen Rahmens für deren Einsatz. Governance im hier verwendeten Sinne bedeutet weder maximale Einschränkung noch unkritische Freigabe. Es geht um <strong className="text-stone-900 font-medium">strukturierte Ermöglichung unter definierten Bedingungen</strong>.</P>
              <P>KI wird nicht als autonomes Entscheidungssystem verstanden, sondern als unterstützendes Element innerhalb klar definierter Grenzen. Die Verantwortung für Entscheidungen verbleibt konsequent beim Menschen — auch dann, wenn KI-Systeme in Qualität und Umfang besser skalieren als menschliche Bearbeitung. Der Grundsatz der menschlichen Letztverantwortung ist nicht primär eine technologische, sondern eine rechtliche und demokratische Anforderung.</P>
              <BQ>KI-Governance kann nicht einmalig definiert und danach statisch angewendet werden. Sie muss lernfähig sein.</BQ>
            </div>
          </WritingSection>

          {/* 05 Kap. 4 */}
          <WritingSection id="kap4" num="05" label="Kapitel 4 — Sechs Prinzipien">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Sechs Prinzipien verantwortungsvoller KI-Governance
              </h2>
              {[
                { num: '4.1', title: 'Transparenz', text: 'Der Einsatz von KI muss nachvollziehbar sein. Eingaben, Entscheidungsgrundlagen und Ergebnisse sind so zu dokumentieren, dass sie bei Bedarf überprüft werden können. In der Praxis erfordert Transparenz standardisierte Dokumentationsroutinen, die in den Arbeitsablauf integriert sind.' },
                { num: '4.2', title: 'Verantwortung', text: 'Die Verantwortung für Inhalte und Entscheidungen liegt beim Menschen. Verantwortung muss konkret zugeordnet sein — es muss klar sein, welche Person in welcher Funktion für welche Art von KI-gestützter Entscheidung verantwortlich ist.' },
                { num: '4.3', title: 'Verhältnismässigkeit', text: 'Der Einsatz von KI muss dem Zweck angemessen sein. Verhältnismässigkeit bedeutet auch, dass der Steuerungsaufwand dem Risikopotenzial einer Anwendung entspricht.' },
                { num: '4.4', title: 'Nachvollziehbarkeit', text: 'Ergebnisse müssen überprüfbar und in ihrem Kontext verständlich sein. Dort, wo Nachvollziehbarkeit nicht gewährleistet ist, darf das Ergebnis eines KI-Systems nicht unkritisch übernommen werden.' },
                { num: '4.5', title: 'Datenschutz und Datensouveränität', text: 'Die Verarbeitung von Daten erfolgt innerhalb klar definierter rechtlicher und organisatorischer Rahmenbedingungen. Datensouveränität geht über den reinen Datenschutz hinaus — sie umfasst die Fähigkeit einer Organisation, selbst zu bestimmen, welche Daten in welchen Systemen verarbeitet werden.' },
                { num: '4.6', title: 'Lernfähigkeit', text: 'Wirksame KI-Governance ist keine statische Struktur, sondern ein System, das sich kontinuierlich weiterentwickelt. Erfahrungen aus dem Betrieb von KI-Systemen müssen systematisch erfasst, ausgewertet und in die Weiterentwicklung eingebracht werden.' },
              ].map((p) => (
                <div key={p.num}>
                  <H3>{p.num} {p.title}</H3>
                  <P>{p.text}</P>
                </div>
              ))}
            </div>
          </WritingSection>

          {/* 06 Kap. 5 */}
          <WritingSection id="kap5" num="06" label="Kapitel 5 — Entscheidungslogik">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Entscheidungslogik vor dem KI-Einsatz
              </h2>
              <P>Bevor ein KI-System eingesetzt wird, müssen fünf Prüfschritte durchlaufen werden. Die vollständige operative Methodik ist im Begleitdokument <em className="italic">Decision Layer: Wann KI sinnvoll ist – und wann nicht</em> beschrieben.</P>
              <ol className="list-decimal pl-6 mb-5 space-y-2">
                {[
                  { strong: 'Problemdefinition:', text: ' Das zu lösende Problem muss präzise definiert sein, einschliesslich der Abgrenzung von Randfällen.' },
                  { strong: 'Nutzenklärung:', text: ' Welcher konkrete, messbare Nutzen wird durch den Einsatz von KI erwartet?' },
                  { strong: 'Prüfung nicht-KI-basierter Alternativen:', text: ' Gibt es eine einfachere oder robustere Lösung ohne KI?' },
                  { strong: 'Dateneignung und Zulässigkeit:', text: ' Sind die verwendeten Daten geeignet, rechtlich zulässig und repräsentativ?' },
                  { strong: 'Überprüfbarkeit und Verantwortbarkeit:', text: ' Ist das erwartete Ergebnis überprüfbar, und wer haftet im Schadensfall?' },
                ].map((item, i) => (
                  <li key={i} className="text-[1rem] leading-[1.75] text-stone-700 font-light">
                    <strong className="text-stone-900 font-medium">{item.strong}</strong>{item.text}
                  </li>
                ))}
              </ol>
              <H3>Risikobasierte Einordnung nach EU AI Act</H3>
              <P>Der EU AI Act unterscheidet verbotene KI-Praktiken, Hochrisiko-Systeme mit umfassenden Anforderungen, KI-Systeme mit spezifischen Transparenzpflichten sowie sonstige Systeme ohne spezifische Pflichten. Für den Schweizer Verwaltungskontext ist die Frage relevant, welche eigenen regulatorischen Grundlagen gelten und wie sich diese zur EU-Regulierung verhalten.</P>
            </div>
            <WritingFigure
              label="ABB. 02 · RISIKOSTUFENMATRIX"
              type="FigurePlate · diagram"
              src="/assets/writings/ki-governance/abb3_risikostufenmatrix.svg"
              caption="Abb. 2 — Risikostufenmatrix: Vier Kategorien nach EU AI Act mit zugeordneten Governance-Anforderungen"
              width={1200}
              height={700}
            />
          </WritingSection>

          {/* 07 Kap. 6 */}
          <WritingSection id="kap6" num="07" label="Kapitel 6 — Operative Verankerung">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Von der Abstraktion zur Praxis
              </h2>
              <P>Governance entfaltet ihre Wirkung erst, wenn sie in den Arbeitsalltag integriert wird. In vielen Organisationen bleibt Governance abstrakt, weil die Verbindung zwischen Prinzipien und konkretem Handeln fehlt.</P>
              <H3>Standardisierte Anwendungsmuster</H3>
              <P>Standardisierte Strukturen für den Einsatz von KI in wiederkehrenden Aufgaben definieren, welche Eingaben zulässig sind, welche Ausgaben geprüft werden müssen und wie Ergebnisse dokumentiert werden. Standardisierung bedeutet nicht Starrheit — sie schafft einen definierten Rahmen, innerhalb dessen situative Anpassungen möglich sind.</P>
              <H3>Rollen und Verantwortlichkeiten</H3>
              <P>Für jede Kategorie von KI-Anwendungen muss festgelegt sein, wer die Ausgabe prüft, wer sie freigibt und wer bei Abweichungen oder Fehlern handlungspflichtig ist. Ergänzend empfiehlt sich die Benennung einer übergeordneten Verantwortlichkeit für KI-Governance auf Organisationsebene.</P>
              <H3>Lifecycle-Management</H3>
              <P>Ein häufig vernachlässigter Aspekt ist das Management von KI-Systemen über den gesamten Lebenszyklus. KI-Systeme degradieren über Zeit — Trainingsdaten altern, weil sich die Realität verändert, auf die sie bezogen sind. Dieses Phänomen wird als <strong className="text-stone-900 font-medium">Modelldrift</strong> bezeichnet.</P>
              <H3>Umgang mit Halluzinationsrisiken</H3>
              <P>Generative KI-Systeme weisen ein spezifisches Fehlerverhalten auf: Das System produziert plausibel klingende, aber faktisch falsche Aussagen. In regulierten Verwaltungskontexten ist dies besonders problematisch. Massnahmen: Beschränkung generativer KI auf inhaltlich prüfbare Aufgaben, Verpflichtung zur Quellenangabe, Schulung der Anwendenden, Ausschluss aus Aufgaben mit schwerwiegenden Folgen.</P>
            </div>
          </WritingSection>

          {/* 08 Kap. 7 */}
          <WritingSection id="kap7" num="08" label="Kapitel 7 — Rolle der Organisation">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Was Organisationen konkret leisten müssen
              </h2>
              <H3>Digitale Transformation als Führungsaufgabe</H3>
              <P>Führungspersonen müssen KI-Governance nicht als Delegationsaufgabe verstehen, sondern als Führungsverantwortung. Sie müssen in der Lage sein, differenziert über KI zu sprechen: sachlich in der Einschätzung von Möglichkeiten, konsequent in der Benennung von Grenzen.</P>
              <H3>Kompetenzaufbau als strategische Priorität</H3>
              <P>Der Aufbau von Kompetenzen im Umgang mit KI kann nicht an einzelne Stabsstellen oder Spezialistinnen delegiert werden. Kompetenz im KI-Umgang umfasst: Verständnis der Möglichkeiten und Grenzen, Fähigkeit zur kritischen Beurteilung von Ausgaben, Wissen um rechtliche Anforderungen sowie situationsgerechte Nutzung.</P>
              <H3>Change Management</H3>
              <P>Die Einführung von KI verändert Arbeitsrollen und Arbeitsinhalte. Widerstände gegen KI-Einführungen sind häufig keine irrationale Technikfeindlichkeit, sondern Ausdruck berechtigter Sorgen um Arbeitsplatzsicherheit und Kontrollverlust. Wirksames Change Management erfordert frühzeitige Kommunikation, aktive Einbindung der Betroffenen und ausreichend Zeit für den Kompetenzaufbau.</P>
              <H3>Wirtschaftlichkeit im öffentlichen Kontext</H3>
              <P>KI-Investitionen müssen gegenüber politischen Entscheidungsträgern, Rechnungsprüforganen und der Öffentlichkeit begründet werden. Ein realistischer Business Case berücksichtigt auch die Kosten der Governance selbst: Schulungen, Prüfprozesse, Dokumentation und laufende Überwachung sind reale Aufwände. <strong className="text-stone-900 font-medium">Überhöhte Effizienzversprechen beschädigen das Vertrauen langfristig.</strong></P>
            </div>
          </WritingSection>

          {/* 09 Kap. 8 */}
          <WritingSection id="kap8" num="09" label="Kapitel 8 — Beschaffung und Koordination">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                Governance endet nicht an der Organisationsgrenze
              </h2>
              <H3>Hybride Architekturmodelle</H3>
              <P>Für regulierte Umgebungen stellt sich die Frage, welche Daten und Prozesse welcher Infrastruktur anvertraut werden dürfen. Personenbezogene oder besonders schützenswerte Daten erfordern in vielen Fällen eine lokale oder zumindest innereuropäische Verarbeitung.</P>
              <H3>Vendor-Governance</H3>
              <P>Abhängigkeiten von einzelnen Anbietern (Vendor-Lock-ins) schränken die strategische Handlungsfähigkeit ein. Beschaffungsverfahren für KI-Systeme müssen die spezifischen Eigenschaften dieser Technologie berücksichtigen: Trainings- und Betriebsdatenregelungen, Anforderungen an Erklärbarkeit und Auditierbarkeit, Haftungsfragen bei Systemfehlern.</P>
              <H3>Interdepartementale Koordination</H3>
              <P>In föderalen Strukturen wie der Schweiz ist die Frage der überbehördlichen Koordination von KI-Governance ebenso relevant. Was koordiniert werden sollte, sind Grundprinzipien, Mindeststandards, gemeinsame Risikoklassifizierungen und Austauschmechanismen für Erfahrungen und Wissen.</P>
              <H3>Regulatorischer Rahmen: EU AI Act und Schweizer Kontext</H3>
              <P>Für die Schweiz ergibt sich die Notwendigkeit, regulatorische Entwicklungen frühzeitig zu beobachten. Als Nicht-EU-Mitglied ist die Schweiz nicht direkt dem EU AI Act unterworfen, aber indirekt betroffen, da viele in der Schweiz eingesetzte KI-Systeme von EU-Unternehmen stammen. Schweizer Verwaltungen, die eigene Governance-Strukturen aufbauen, die mit dem EU AI Act kompatibel sind, schaffen gleichzeitig eine robuste Grundlage für allfällige nationale Regulierungen.</P>
            </div>
          </WritingSection>

          {/* 10 Kap. 9 */}
          <WritingSection id="kap9" num="10" label="Kapitel 9 — Schlussfolgerung">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.2vw,2.45rem)] leading-[1.18] tracking-[-0.015em] mb-[1.2rem] max-w-[24ch]">
                KI-Governance als dynamisches Lernsystem
              </h2>
              <P>KI-Governance in regulierten Umgebungen ist mehr als ein Regelwerk. Sie ist die Fähigkeit einer Organisation, technologische Möglichkeiten in verantwortbares, nachvollziehbares und wirksames Handeln zu übersetzen.</P>
              <P>Die öffentliche Verwaltung steht dabei vor einer doppelten Aufgabe. Sie muss technologische Innovation nutzen, um Leistungsfähigkeit, Effizienz und Qualität zu verbessern. Zugleich muss sie sicherstellen, dass Entscheidungen rechtmässig, transparent, überprüfbar und gemeinwohlorientiert bleiben.</P>
              <BQ>Governance sollte nicht als Vermeidungsstrategie verstanden werden. Ihr Ziel ist es, kontrollierte Nutzung zu ermöglichen, Verantwortung zu sichern und Entwicklung lernfähig zu gestalten.</BQ>
              <P>Die Zukunftsfähigkeit öffentlicher Verwaltung wird nicht allein davon abhängen, welche KI-Systeme verfügbar sind, sondern davon, ob Verwaltungen die Fähigkeit entwickeln, diese Systeme verantwortlich zu steuern, nachvollziehbar einzubetten und lernfähig weiterzuentwickeln.</P>
            </div>
          </WritingSection>

          {/* 11 Quellenhinweise */}
          <WritingSection id="quellenhinweise" num="11" label="Quellenhinweise">
            <div className="max-w-[66ch] border-t border-stone-100 pt-6">
              {[
                { num: '[1]', text: 'DSGVO Art. 22 sowie Art. 13–15 — Automatisierte Entscheidungen und Informationspflichten. Verordnung (EU) 2016/679.' },
                { num: '[2]', text: 'EU AI Act — Verordnung (EU) 2024/1689. In Kraft seit 1. August 2024. Zu Erklärungspflichten: Art. 13, Art. 26 Abs. 11, Art. 86.' },
                { num: '[3]', text: 'Hochrisiko-KI-Systeme in der öffentlichen Verwaltung gemäss Anhang III EU AI Act.' },
                { num: '[5]', text: 'Für die Schweiz sind die Entwicklungen im Rahmen des Digital Governance Acts und allfälliger nationaler KI-Regulierungen zu verfolgen.' },
              ].map((fn) => (
                <p key={fn.num} className="text-[0.82rem] leading-[1.65] text-stone-400 mb-3">
                  <strong className="text-stone-700 font-medium">{fn.num}</strong> {fn.text}
                </p>
              ))}
            </div>
          </WritingSection>

          {/* 12 Verbindungen */}
          <WritingSection id="verbindungen" num="12" label="Verbindungen">
            <WritingConnections
              cols={[
                {
                  title: 'Wirkt in',
                  items: [
                    { label: 'Öffentliche Verwaltung' },
                    { label: 'EU AI Act' },
                    { label: 'Compliance & Governance' },
                    { label: 'Digitale Transformation' },
                  ],
                },
                {
                  title: 'Verwandte Schriften',
                  items: [
                    { label: 'GPT-Stack', href: '/schriften/gpt-stack' },
                    { label: 'Decision Layer', href: '/schriften/decision-layer' },
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
                Governance als <em className="italic text-[#F0E1B5]">Ermöglichungsstruktur</em>, nicht als Bremse.
              </h2>
            </div>
            <div>
              <p className="text-[1rem] leading-[1.75] text-[rgba(244,242,236,0.72)] font-light max-w-[42ch]">
                Für Gespräche zu KI-Governance in der Verwaltung, regulatorischer Anschlussfähigkeit und verantwortungsvollem KI-Einsatz.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a href="mailto:kontakt@martinhsu.digital" className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem]">
                  kontakt@martinhsu.digital
                </a>
              </div>
            </div>
          </section>

          <WritingNextNav
            prev={{ label: 'Decision Layer', kicker: 'Framework', href: '/schriften/decision-layer' }}
          />
        </div>
      </div>
    </PageShell>
  );
}
