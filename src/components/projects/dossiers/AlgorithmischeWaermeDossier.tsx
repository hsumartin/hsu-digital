import PageShell from '@/components/layout/PageShell';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectRecord from '@/components/projects/ProjectRecord';
import ProjectAbstract from '@/components/projects/ProjectAbstract';
import DetailSection from '@/components/projects/DetailSection';
import FigurePlate from '@/components/projects/FigurePlate';
import ProjectConnections from '@/components/projects/ProjectConnections';
import ProjectNextNav from '@/components/projects/ProjectNextNav';
import { ProjectDetail } from '@/data/projects';

const experiments = [
  {
    num: '01',
    title: 'Thermische Erosion durch Heissluft',
    meta: 'UR5 · Heissluftpistole · Wachsplatte · Gruppenarbeit',
    text: 'Eine Wachsplatte wurde mit einer am Roboterarm befestigten Heissluftpistole bestrahlt. Bewegungsrouten, Geschwindigkeiten und Pausenintervalle wurden über Python definiert. An Stellen intensiver Bestrahlung entstanden Löcher, Blasen und geschmolzene Ränder — der algorithmische Weg als thermisches Relief ablesbar.',
    observation: 'Wachs absorbiert Wärme ungleichmässig. Kumulierte Wärmepunkte perforieren, kurzbestrahlte Zonen deformieren nur.',
  },
  {
    num: '02',
    title: 'Thermische Erosion durch Heisswasser',
    meta: 'UR5 · Bewegungspfad · heisses Wachs · Eiswasser · Gruppenarbeit',
    text: 'Heisses, flüssiges Wachs wurde entlang des programmierten Bewegungspfades des Roboterarms in ein Eiswasserbad gegossen. Der Thermoschock liess das Wachs beim Kontakt sofort erstarren. Das Resultat ist eine gitterartige Struktur, die den algorithmischen Pfad als materielles Objekt im Raum sichtbar macht.',
    observation: 'Die programmierte Route wird zur Gussform. Der Algorithmus schreibt sich als dreidimensionaler Körper in das Material ein.',
  },
  {
    num: '03',
    title: 'Kreisbewegung während des Erstarrens',
    meta: 'UR5 · Holzstab · flüssig → fest · Langzeitbeobachtung',
    text: 'Eine konstante Kreisbewegung im heissen, flüssigen Wachs, während dieses langsam erstarrte. Mit fortschreitender Abkühlung bildeten sich konzentrische Schichten erstarrten Wachses, die den Radius zunehmend einschränkten. Der Roboter, programmiert für eine konstante Aktion, wurde vom Material gestoppt.',
    observation: 'Der Aggregatzustandswechsel ist nicht passiv. Das Material schreibt die Grenze seiner Bearbeitbarkeit selbst.',
  },
  {
    num: '04',
    title: 'Eiswürfel im heissen Wachs',
    meta: 'Manueller Eingriff · Thermoschock · analoges Experiment',
    text: 'Ein runder Eiswürfel wurde in heisses, flüssiges Wachs fallen gelassen. Das umliegende Wachs erstarrte sofort beim Kontakt und bildete feine Wachsfäden um ihn herum. Der Eiswürfel schrieb sich nicht als Hohlraum, sondern als Fadennetz in das Material ein.',
    observation: 'Das Eis löst sich nicht auf. Es provoziert eine Erstarrungsreaktion, die seinen eigenen Umriss als Fadenskulptur hinterlässt.',
  },
];

export default function AlgorithmischeWaermeDossier({ project }: { project: ProjectDetail }) {
  return (
    <PageShell>
      <ProjectHeader
        eyebrow="Material · Institute of Media Design · 2016"
        title={<>Algorithmische <em className="italic text-gold-600">Wärme</em></>}
        subtitle={project.subtitle}
        lead={project.lead}
        tags={[
          { label: 'Experiment', variant: 'gold' },
          { label: 'Materialstudie', variant: 'blue' },
          { label: 'Robotik' },
          { label: 'Wachs' },
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
                ['ausgangspunkt', '02', 'Ausgangspunkt'],
                ['versuche', '03', 'Vier Versuche'],
                ['werkzeuge', '04', 'Werkzeuge'],
                ['reflexion', '05', 'Reflexion'],
                ['verbindungen', '06', 'Verbindungen'],
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
              label="ABB. 01 · UR5-Roboterarm"
              type="FigurePlate · Dokumentation"
              src="/assets/projects/algorithmische-waerme/3.png"
              caption="UR5-Industrieroboterarm mit Bewegungsbahnen. Institute of Media Design, 2016."
              width={680}
              height={480}
            />
          </DetailSection>

          <DetailSection id="ausgangspunkt" num="02" label="Ausgangspunkt">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Wachs als reaktives Material
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Im Rahmen eines experimentellen Seminars stand Wachs als reaktives Material im
                Mittelpunkt. Die zentrale Frage war nicht formaler Natur, sondern prozessual: Wie
                verhält sich heisses, flüssiges Wachs unter verschiedenen physischen Eingriffen?
                Welche Spuren hinterlässt Energie in einem instabilen, phasenändernden Stoff?
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-6 my-8 font-serif text-[1.1rem] italic leading-[1.55] text-stone-900">
                Das Wachs ist kein passives Substrat. Es antwortet, setzt Grenzen und schreibt
                seinen eigenen Zustand in die Form ein.
              </blockquote>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Das Seminar begann mit einem UR5-Industrieroboterarm, gesteuert über Rhino,
                Grasshopper, das Scorpio-Plugin und Python. Im Verlauf entstanden vier
                eigenständige Versuchsanordnungen.
              </p>
            </div>
            <FigurePlate
              label="ABB. 02 · Grasshopper-Definition"
              type="FigurePlate · Werkzeug"
              src="/assets/projects/algorithmische-waerme/grasshopper.png"
              caption="Grasshopper-Definition zur prozeduralen Steuerung des Roboterarms. Rhino, Institute of Media Design 2016."
              width={680}
              height={400}
            />
          </DetailSection>

          <DetailSection id="versuche" num="03" label="Vier Versuchsanordnungen">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Dasselbe Material, vier Bedingungen
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Die vier Versuchsanordnungen befragten dasselbe Material unter unterschiedlichen
                Bedingungen: mit algorithmischer Hitze, mit der programmierten Route als Gussform,
                mit mechanischer Bewegung über Zeit und mit analogem Thermoschock.
              </p>
            </div>

            <div className="grid gap-px bg-stone-200 border border-stone-200">
              {experiments.map((exp) => (
                <div key={exp.num} className="bg-[#FBFAF7] p-[1.35rem_1.45rem]">
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-blue-700 mb-[0.35rem]">
                    Experiment {exp.num}
                  </div>
                  <h3 className="text-[0.96rem] leading-[1.35] font-medium text-stone-900 mb-[0.2rem]">
                    {exp.title}
                  </h3>
                  <div className="font-mono text-[0.6rem] tracking-[0.1em] text-stone-400 mb-[0.7rem]">
                    {exp.meta}
                  </div>
                  <p className="text-[0.88rem] leading-[1.65] text-stone-700 font-light mb-[0.6rem]">
                    {exp.text}
                  </p>
                  <div className="border-l-2 border-stone-200 pl-3 font-mono text-[0.7rem] text-stone-400 italic">
                    {exp.observation}
                  </div>
                </div>
              ))}
            </div>

            <FigurePlate
              label="ABB. 03 · Gitterstruktur Experiment 02"
              type="FigurePlate · Dokumentation"
              src="/assets/projects/algorithmische-waerme/IMG-20161017-WA0011.jpg"
              caption="Erstarrte Gitterstruktur von oben: Der programmierte Bewegungspfad als dreidimensionaler Körper im Wachs. Institute of Media Design, 2016."
              width={680}
              height={510}
              maxHeight={480}
            />
            <FigurePlate
              label="ABB. 04 · Endzustand Kreisexperiment — Experiment 03"
              type="FigurePlate · Dokumentation"
              src="/assets/projects/algorithmische-waerme/IMG-20161017-WA0012.jpg"
              caption="Endzustand Kreisexperiment: Konzentrische Erstarrungsschichten um den Stab. Der Roboter wurde vom Material gestoppt."
              width={680}
              height={510}
              maxHeight={480}
            />
            <FigurePlate
              label="ABB. 05 · Fadenskulptur Experiment 04"
              type="FigurePlate · Dokumentation"
              src="/assets/projects/algorithmische-waerme/IMG-20161017-WA0013.jpg"
              caption="Fadenskulptur um den Eiswürfel: Das Eis schreibt sich als Fadennetz in das Wachs ein — nicht als Hohlraum."
              width={680}
              height={510}
              maxHeight={480}
            />
          </DetailSection>

          <DetailSection id="werkzeuge" num="04" label="Werkzeuge & Methoden">
            <div className="border border-stone-200 bg-[#F8F7F3]">
              {[
                { cat: 'Roboter', tool: 'UR5-Industrieroboterarm' },
                { cat: 'Software', tool: 'Rhino 3D & Grasshopper' },
                { cat: 'Plugin', tool: 'Scorpio (Robotersteuerung)' },
                { cat: 'Programmierung', tool: 'Python (prozedural)' },
                { cat: 'Material', tool: 'Wachs (selbstgegossen)' },
                { cat: 'Werkzeuge', tool: 'Heissluftpistole · Holzstab · Eiswasser · Eis' },
              ].map((row) => (
                <div key={row.cat} className="grid grid-cols-[14rem_1fr] border-t border-stone-100 first:border-t-0 max-[650px]:grid-cols-1">
                  <div className="p-[1rem_1.1rem] border-r border-stone-100 font-mono text-[0.72rem] tracking-[0.08em] text-blue-700 max-[650px]:border-r-0 max-[650px]:border-b max-[650px]:border-dashed">
                    {row.cat}
                  </div>
                  <div className="p-[1rem_1.1rem] text-[0.9rem] leading-[1.6] text-stone-700 font-light">
                    {row.tool}
                  </div>
                </div>
              ))}
            </div>
          </DetailSection>

          <DetailSection id="reflexion" num="05" label="Reflexion">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Material als eigenständiger Akteur
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                In keiner der Anordnungen wurde ein Objekt geplant. Stattdessen wurden Bedingungen
                geschaffen, unter denen das Material seine eigene Form entwickelte. Die Integration
                von Python in Grasshopper ermöglichte den Übergang von parametrischer
                Formdefinition zu prozeduraler Verhaltenssteuerung.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                <strong className="text-stone-900 font-medium">Kernsatz:</strong> Entwerfen heisst
                nicht, Formen vorzugeben. Es heisst, Bedingungen für Transformation zu schaffen
                und die Antworten des Materials zu lesen.
              </p>
            </div>
          </DetailSection>

          <DetailSection id="verbindungen" num="06" label="Verbindungen">
            <ProjectConnections
              cols={[
                {
                  title: 'Arbeitsfelder',
                  items: [
                    { label: 'Prozessbasierter Entwurf' },
                    { label: 'Computational Design' },
                    { label: 'Robotik & Materialforschung' },
                    { label: 'Verhaltensbasierte Steuerung' },
                  ],
                },
                {
                  title: 'Prinzipien',
                  items: [
                    { label: 'Prozess vor Form' },
                    { label: 'Material als Akteur' },
                    { label: 'Bedingungen statt Formen' },
                  ],
                },
                {
                  title: 'Verwandte Inhalte',
                  items: [
                    { label: 'Sound to Form', href: '/projekte/sound-to-form' },
                    { label: 'Denkarchitektur', href: '/schriften/denkarchitektur' },
                  ],
                },
              ]}
            />
          </DetailSection>

          <ProjectNextNav
            prev={{ label: 'Sound to Form', kicker: 'Computational', href: '/projekte/sound-to-form' }}
            next={{ label: 'Mittenmang', kicker: 'Städtebau', href: '/projekte/mittenmang' }}
          />
        </div>
      </div>
    </PageShell>
  );
}
