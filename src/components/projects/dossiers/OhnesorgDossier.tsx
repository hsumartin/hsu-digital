import PageShell from '@/components/layout/PageShell';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectRecord from '@/components/projects/ProjectRecord';
import ProjectAbstract from '@/components/projects/ProjectAbstract';
import DetailSection from '@/components/projects/DetailSection';
import FigurePlate from '@/components/projects/FigurePlate';
import ProjectConnections from '@/components/projects/ProjectConnections';
import ProjectNextNav from '@/components/projects/ProjectNextNav';
import { ProjectDetail } from '@/data/projects';

const akte = [
  {
    num: 'I',
    title: 'Eingang «Leberwurst»',
    text: 'Der Besucher betritt das Denkmal durch die Pilotiszone des Bestandsgebäudes. Dichte Cortenstahllamellen füllen den Durchgang. Der Raum ist so eng, dass man sich seitlich hindurchzwängen muss. Die Beengtheit ist keine Unannehmlichkeit — sie ist das Programm. So eng standen die Demonstranten auf dem Gehweg vor der Deutschen Oper.',
  },
  {
    num: 'II',
    title: 'Foyer und Labyrinth',
    text: 'Auf den unteren Ebenen beginnt die steigende Handlung. Raumfolgen werden enger, Blickbeziehungen fragmentieren sich. Viele Richtungswechsel führen unweigerlich zu einem Ziel, verdecken aber zugleich die Sicht. Die Hetzjagd durch die Krumme Strasse wird räumlich erfahrbar.',
  },
  {
    num: 'III',
    title: 'Der Todesraum',
    text: 'Man kommt urplötzlich an — unter jenem Ort, an dem Benno Ohnesorg tot zu Boden fiel. Drei Cortenstahlscheiben schweben wie ein Damoklesschwert über dem Boden. Ein Glaselement liegt im Boden. Man kann die Fläche betreten, aber es erfordert Überwindung. Auf politische Symbolik wird bewusst verzichtet.',
  },
  {
    num: 'IV',
    title: 'Freitreppe',
    text: 'Durch das erlebte Labyrinth verlässt man den Todesraum. Der Weg zurück ist unnötig lang, wie die Irrfahrt des Krankenwagens mit Benno Ohnesorgs lebloser Hülle durch Berlin. An der Freitreppe betrachtet man ein letztes Mal die Rückwand des Todesraums.',
  },
  {
    num: 'V',
    title: 'Raum der Stille',
    text: 'Dunkelheit. Ein einziger horizontaler Lichtschlitz in der Wand. Der Raum symbolisiert die Vertuschungsversuche. Der Schlitz steht für die Erkenntnisse, die langsam ans Tageslicht kommen. Der Besucher wird angehalten, der Wahrheit nachzugehen.',
  },
];

export default function OhnesorgDossier({ project }: { project: ProjectDetail }) {
  return (
    <PageShell>
      <ProjectHeader
        eyebrow="Architektur · Bachelorthesis · TU Braunschweig 2017/18"
        title={<>Erinnerung als <em className="italic text-gold-600">räumliche Eskalation</em></>}
        subtitle={project.subtitle}
        lead={project.lead}
        tags={[
          { label: 'Entwurf', variant: 'gold' },
          { label: 'Raumdramaturgie', variant: 'blue' },
          { label: 'Erinnerung' },
          { label: 'Corten · Beton' },
        ]}
      />

      <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <ProjectRecord items={project.record} />
      </div>

      <div className="grid grid-cols-[220px_1fr] gap-16 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[4.8rem] pb-24 max-[980px]:grid-cols-1 max-[980px]:gap-10">
        <aside className="sticky top-24 self-start max-[980px]:static" aria-label="Inhaltsnavigation">
          <div className="border border-stone-200 bg-[#F8F7F3] p-[1.1rem_1.15rem]">
            <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-gold-600 mb-[0.85rem]">Inhalt</div>
            <ol className="list-none">
              {[
                ['ueberblick', '01', 'Überblick'],
                ['kontext', '02', 'Kontext'],
                ['konzept', '03', 'Konzept'],
                ['raumsequenz', '04', 'Raumsequenz'],
                ['akte', '05', 'Fünf Akte'],
                ['materialitaet', '06', 'Materialität'],
                ['verbindungen', '07', 'Verbindungen'],
              ].map(([id, num, label]) => (
                <li key={id} className="border-t border-stone-100">
                  <a href={`#${id}`} className="flex gap-[0.65rem] items-baseline py-[0.58rem] no-underline font-mono text-[0.68rem] tracking-[0.05em] text-stone-400 hover:text-stone-900 transition-colors">
                    <span className="text-blue-700">{num}</span>{label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="min-w-0">
          <DetailSection id="ueberblick" num="01" label="Überblick">
            <ProjectAbstract text={project.abstractText} />
            <FigurePlate
              label="ABB. 01 · Eingang «Leberwurst»"
              type="FigurePlate · Rendering"
              src="/assets/projects/ohnesorg/eingang_leberwurst.jpg"
              caption="Aussenansicht Eingang unter dem Bestandsgebäude. Cortenstahllamellen, zwei Figuren. Akt I der Raumdramaturgie."
              width={680}
              height={383}
            />
          </DetailSection>

          <DetailSection id="kontext" num="02" label="Kontext">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                2. Juni 1967
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Am 2. Juni 1967 wurde der 26-jährige Student Benno Ohnesorg im Hinterhof der
                Krummen Strasse 66/67 in Westberlin erschossen. Der Schütze war
                Polizeibeamter Karl-Heinz Kurras, der Jahre später als inoffizieller Mitarbeiter
                der DDR-Staatssicherheit enttarnt wurde.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Das Projekt setzt sich nicht mit der Repräsentation dieses Ereignisses
                auseinander, sondern mit dessen räumlicher Übersetzbarkeit. Im Zentrum steht die
                Frage: Wie kann ein Moment der Eskalation architektonisch erfahrbar gemacht werden?
              </p>
            </div>
            <FigurePlate
              label="ABB. 02 · Zeitlinie"
              type="FigurePlate · Analyse"
              src="/assets/projects/ohnesorg/analyse_zeitlinie.jpg"
              caption="Zeitlinie des 2. Juni 1967 — Akteure und Ereignisse in chronologischer Abfolge."
              width={680}
              height={383}
            />
          </DetailSection>

          <DetailSection id="konzept" num="03" label="Konzept">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Freytag-Schema als räumliche Methode
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Vor jeder Entwurfsentscheidung stand die Analyse. Der Ablauf des 2. Juni 1967
                folgt einer erschreckend präzisen Dramaturgie, die sich direkt auf das klassische
                Freytag-Schema eines fünfaktigen Dramas übertragen lässt. Diese Struktur ist nicht
                literarisch gemeint, sondern methodisch. Sie bestimmt die räumliche Organisation
                des Denkmals vollständig.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Ein Besucher schreitet durch das Gebäude so, wie man unweigerlich durch die Zeit
                schreitet. Die Bewegung durch die Architektur ist das Erleben eines
                Ereignisstranges.
              </p>
            </div>
            <FigurePlate
              label="ABB. 03 · Freytag-Schema"
              type="FigurePlate · Konzeptdiagramm"
              src="/assets/projects/ohnesorg/konzept_freytag_diagramm.jpg"
              caption="Freytag-Schema mit den fünf Akten des historischen Ereignisses vom 2. Juni 1967 — Zeitangaben und Ereignisse eingetragen. Methodische Grundlage der räumlichen Organisation."
              width={680}
              height={383}
            />
          </DetailSection>

          <DetailSection id="raumsequenz" num="04" label="Raumsequenz">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Einschreibung in den Bestand
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Das Denkmal ist in den Sockel des bestehenden aufgeständerten Wohngebäudes an der
                Krummen Strasse eingeschrieben und führt von dort in vier Ebenen unterirdisch in
                den Hinterhof hinein. Der Abstieg ist die Metapher: Man vergräbt sich in das
                Ereignis.
              </p>
            </div>
            <FigurePlate
              label="ABB. 04 · Lageplan Erdgeschoss"
              type="FigurePlate · Plan"
              src="/assets/projects/ohnesorg/plan_lageplan_eg.jpg"
              caption="Lageplan Erdgeschoss M 1:100. Einbettung in Bestandsgebäude und Kontext Krumme Strasse, Berlin."
              width={680}
              height={480}
            />
            <FigurePlate
              label="ABB. 05 · Längstschnitt"
              type="FigurePlate · Schnitt"
              src="/assets/projects/ohnesorg/Längstschnitt.jpg"
              caption="Längstschnitt: Abstieg nach unten sichtbar. Bestandsgebäude und neuer Baukörper im Verhältnis."
              width={680}
              height={340}
            />
            <FigurePlate
              label="ABB. 06 · Querschnitt"
              type="FigurePlate · Schnitt"
              src="/assets/projects/ohnesorg/Querschnitt.jpg"
              caption="Querschnitt durch das Denkmal. Vier Untergeschossebenen auf Kotenhöhen −3.40 / −6.30 / −9.20."
              width={680}
              height={340}
            />

            {/* Grundrisse UG 01–04 als 2×2-Grid */}
            <figure className="my-12 border border-stone-200 bg-[#FBFAF7]">
              <div className="flex items-center justify-between gap-4 px-4 py-[0.72rem] border-b border-stone-100 font-mono text-[0.6rem] tracking-[0.14em] uppercase text-stone-400">
                <b className="text-gold-600 font-medium">ABB. 07 · Grundrisse UG 01–04</b>
                <span>FigurePlate · Pläne</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-stone-200 p-px max-[560px]:grid-cols-1">
                {['01', '02', '03', '04'].map((n) => (
                  <div key={n} className="bg-[#F8F7F3] p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/assets/projects/ohnesorg/Grundriss_UG_${n}.jpg`}
                      alt={`Grundriss UG ${n}`}
                      className="block w-full h-auto"
                      loading="lazy"
                    />
                    <p className="font-mono text-[0.56rem] tracking-[0.1em] text-stone-400 mt-2">
                      UG {n}
                    </p>
                  </div>
                ))}
              </div>
              <figcaption className="px-4 py-[0.8rem] border-t border-stone-100 font-mono text-[0.62rem] tracking-[0.08em] leading-[1.55] text-stone-400">
                Grundrisse UG 01–04 — Abstieg und Verdichtung über vier Ebenen. Mit jeder Ebene nimmt die Grundrissfläche ab.
              </figcaption>
            </figure>
          </DetailSection>

          <DetailSection id="akte" num="05" label="Fünf Akte">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Annäherung, Verdichtung, Konfrontation
              </h2>
            </div>
            <div className="grid gap-px bg-stone-200 border border-stone-200">
              {akte.map((akt) => (
                <div key={akt.num} className="bg-[#FBFAF7] p-[1.35rem_1.45rem]">
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-blue-700 mb-[0.35rem]">
                    Akt {akt.num}
                  </div>
                  <h3 className="text-[0.96rem] leading-[1.35] font-medium text-stone-900 mb-[0.55rem]">
                    {akt.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.65] text-stone-700 font-light">{akt.text}</p>
                </div>
              ))}
            </div>
            <FigurePlate
              label="ABB. 08 · Akt III — Der Todesraum"
              type="FigurePlate · Rendering"
              src="/assets/projects/ohnesorg/rendering_akt3_todesraum.jpg"
              caption="Todesraum: Schwebende Cortenplatten, roter Lichtpunkt im Boden, zwei Figuren. Rendering 2025."
              width={680}
              height={510}
            />
            <FigurePlate
              label="ABB. 09 · Akt V — Raum der Stille"
              type="FigurePlate · Rendering"
              src="/assets/projects/ohnesorg/rendering_akt5_raum_der_stille.jpg"
              caption="Raum der Stille: Dunkelheit, horizontaler Lichtschlitz. Der Schlitz steht für Erkenntnisse, die langsam ans Tageslicht kommen. Rendering 2025."
              width={680}
              height={323}
            />
            {/* Vergleich Original 2017/18 vs. KI-Aufbereitung 2026 */}
            <figure className="my-12 border border-stone-200 bg-[#FBFAF7]">
              <div className="flex items-center justify-between gap-4 px-4 py-[0.72rem] border-b border-stone-100 font-mono text-[0.6rem] tracking-[0.14em] uppercase text-stone-400">
                <b className="text-gold-600 font-medium">ABB. 10 · Vergleich: Original und KI-Aufbereitung</b>
                <span>FigurePlate · Vergleich</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-stone-200 p-px max-[560px]:grid-cols-1">
                {[
                  { src: '/assets/projects/ohnesorg/original_Perspektiven.jpg', alt: 'Originalrendering TU Braunschweig 2017/18', label: 'Originalrendering — TU Braunschweig 2017/18' },
                  { src: '/assets/projects/ohnesorg/rendering_akt3_todesraum.jpg', alt: 'KI-Aufbereitung 2026', label: 'KI-Aufbereitung — 2026' },
                ].map((img) => (
                  <div key={img.src} className="bg-[#F8F7F3] p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block w-full object-contain"
                      style={{ maxHeight: 420, height: 'auto' }}
                      loading="lazy"
                    />
                    <p className="font-mono text-[0.56rem] tracking-[0.1em] text-stone-400 mt-2">{img.label}</p>
                  </div>
                ))}
              </div>
              <figcaption className="px-4 py-[0.8rem] border-t border-stone-100 font-mono text-[0.62rem] tracking-[0.08em] leading-[1.55] text-stone-400">
                Direkter Vergleich: Gleiche Raumsequenz, unterschiedliche Darstellungsmittel. Entwurf und Raumlogik unverändert.
              </figcaption>
            </figure>

            <FigurePlate
              label="ABB. 11 · Explosionsisometrie"
              type="FigurePlate · Diagramm"
              src="/assets/projects/ohnesorg/sprengiso.jpg"
              caption="Explosionsisometrie — alle Ebenen des Denkmals in räumlicher Auflösung. Vier Untergeschosse und Einbettung in den Bestand."
              width={680}
              height={700}
              maxHeight={600}
            />
          </DetailSection>

          <DetailSection id="materialitaet" num="06" label="Materialität & Atmosphäre">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Corten rostet. Es dokumentiert die Zeit.
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Corten altert sichtbar und dokumentiert die Zeit, die seit dem Ereignis vergangen
                ist. Die Oberfläche ist uneben, schwer, dunkel. Beton ist das Material des
                Nachkriegsberlins. Die neuen Bauteile greifen dasselbe Material auf — aber
                dunkler, roher, gewichtiger.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Licht wird nicht als Ausleuchtung verstanden, sondern als dramaturgisches
                Werkzeug: gefiltert, gerichtet, teilweise entzogen. Es kommt nie von oben, nie
                vollständig, nie beruhigend. Licht ist in diesem Denkmal immer etwas, das man
                suchen muss.
              </p>
            </div>
          </DetailSection>

          <DetailSection id="verbindungen" num="07" label="Verbindungen">
            <ProjectConnections
              cols={[
                {
                  title: 'Arbeitsfelder',
                  items: [
                    { label: 'Raumdramaturgie' },
                    { label: 'Erinnerungsarchitektur' },
                    { label: 'Sequenzbasierter Entwurf' },
                    { label: 'Atmosphäre & Materialität' },
                  ],
                },
                {
                  title: 'Prinzipien',
                  items: [
                    { label: 'Sequenz vor Form' },
                    { label: 'Körper vor Symbol' },
                    { label: 'Zeitliche Logik vor gestalterischer Geste' },
                  ],
                },
                {
                  title: 'Verwandte Inhalte',
                  items: [
                    { label: 'Algorithmische Wärme', href: '/projekte/algorithmische-waerme' },
                    { label: 'Mittenmang', href: '/projekte/mittenmang' },
                    { label: 'Denkarchitektur', href: '/schriften/denkarchitektur' },
                  ],
                },
              ]}
            />
          </DetailSection>

          <ProjectNextNav
            prev={{ label: 'Mittenmang', kicker: 'Städtebau', href: '/projekte/mittenmang' }}
          />
        </div>
      </div>
    </PageShell>
  );
}
