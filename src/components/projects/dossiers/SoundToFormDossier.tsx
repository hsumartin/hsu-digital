import PageShell from '@/components/layout/PageShell';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectRecord from '@/components/projects/ProjectRecord';
import ProjectAbstract from '@/components/projects/ProjectAbstract';
import DetailSection from '@/components/projects/DetailSection';
import FigurePlate from '@/components/projects/FigurePlate';
import ProjectConnections from '@/components/projects/ProjectConnections';
import ProjectNextNav from '@/components/projects/ProjectNextNav';
import { ProjectDetail } from '@/data/projects';

export default function SoundToFormDossier({ project }: { project: ProjectDetail }) {
  return (
    <PageShell>
      <ProjectHeader
        eyebrow="Computational · TU Braunschweig · WS 2014/15"
        title={<>Sound to <em className="italic text-gold-600">Form</em></>}
        subtitle={project.subtitle}
        lead={project.lead}
        tags={[
          { label: 'Studie', variant: 'gold' },
          { label: 'Generativer Prozess', variant: 'blue' },
          { label: 'Audiodaten' },
          { label: 'Geometrie' },
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
                ['ausgangsfrage', '02', 'Ausgangsfrage'],
                ['methode', '03', 'Methode & Prozess'],
                ['objekt', '04', 'Objekt & Rendering'],
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
              label="ABB. 01 · Amplitudenanalyse"
              type="FigurePlate · Diagramm"
              src="/assets/projects/sound-to-form/diagram_amplitude.png"
              caption="Amplitudenanalyse: Zeitachse → Schichthöhe (links), Formbreite → Profilhöhe (rechts). Blender, TU Braunschweig 2014."
              width={680}
              height={300}
              maxHeight={380}
            />
          </DetailSection>

          <DetailSection id="ausgangsfrage" num="02" label="Ausgangsfrage">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Kann ein Musikstück die strukturelle Grundlage eines architektonischen Objekts liefern?
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Nicht als Stimmungsreferenz, sondern als geometrischer Datensatz. Ausgangspunkt war
                Hans Zimmers Komposition <em>Why Do We Fall</em> aus dem Soundtrack zu{' '}
                <em>The Dark Knight Rises</em>. Das Stück wurde in Blender als Audiodatei importiert
                und mithilfe eines Audio-Visualisierungsworkflows in zeitbasierte Kurven und
                Amplitudengraphen übersetzt.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Diese Graphen wurden nicht als Animation belassen, sondern als einzelne Zeitschnitte
                extrahiert. Jeder Schnitt entspricht einem Moment im Stück, einem Intensitätswert,
                einer Raumhöhe.
              </p>
            </div>
          </DetailSection>

          <DetailSection id="methode" num="03" label="Methode & Prozess">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Software-Kette als Übersetzungsapparat
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                In Rhino 3D wurden die Zeitschnitte räumlich übereinandergelegt und zu einem
                dreidimensionalen Objekt zusammengefügt. Die vertikale Entwicklung folgt dem
                emotionalen Spannungsbogen der Komposition: von gedrückter Grundlage zu
                aufsteigender Verdichtung, zur zackigen Gipfelform.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-px bg-stone-200 border border-stone-200 max-[680px]:grid-cols-1">
              {[
                { num: '01', tool: 'Blender', step: 'Audioimport → Amplitudengraph → Zeitschnitte' },
                { num: '02', tool: 'Rhino 3D', step: 'Schichten räumlich übereinanderlegen → 3D-Objekt fügen' },
                { num: '03', tool: 'Maya', step: 'Animation: Schichtaufbau synchron zur Komposition' },
              ].map((item) => (
                <div key={item.num} className="bg-[#FBFAF7] p-[1.35rem_1.45rem]">
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-blue-700 mb-[0.55rem]">Schritt {item.num}</div>
                  <h3 className="text-[0.96rem] leading-[1.35] font-medium text-stone-900 mb-[0.45rem]">{item.tool}</h3>
                  <p className="text-[0.88rem] leading-[1.65] text-stone-700 font-light">{item.step}</p>
                </div>
              ))}
            </div>
          </DetailSection>

          <DetailSection id="objekt" num="04" label="Objekt & Rendering">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Generatives Skulpturobjekt
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Das resultierende Objekt ist keine funktionale Architektur. Es ist ein generatives
                Skulpturobjekt, dessen Form vollständig aus dem zeitlichen und dynamischen Verlauf
                des Musikstücks abgeleitet ist. Die Geometrie trägt die Entstehungslogik in sich.
              </p>
            </div>

            {/* Formmodelle als Paar — wie in HTML (img-pair) */}
            <figure className="my-12 border border-stone-200 bg-[#FBFAF7]">
              <div className="flex items-center justify-between gap-4 px-4 py-[0.72rem] border-b border-stone-100 font-mono text-[0.6rem] tracking-[0.14em] uppercase text-stone-400">
                <b className="text-gold-600 font-medium">ABB. 02 · Formmodell Ansichten 1 & 2</b>
                <span>FigurePlate · Modell</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-stone-200 p-px max-[560px]:grid-cols-1">
                {[
                  { src: '/assets/projects/sound-to-form/model_view1.png', alt: 'Formmodell Ansicht 1' },
                  { src: '/assets/projects/sound-to-form/model_view2.png', alt: 'Formmodell Ansicht 2' },
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
                  </div>
                ))}
              </div>
              <figcaption className="px-4 py-[0.8rem] border-t border-stone-100 font-mono text-[0.62rem] tracking-[0.08em] leading-[1.55] text-stone-400">
                Formmodell, zwei Ansichten. Schichtaufbau aus extrahierten Zeitschnitten der Komposition. Rhino 3D, TU Braunschweig 2014.
              </figcaption>
            </figure>

            <FigurePlate
              label="ABB. 03 · Photomontage"
              type="FigurePlate · Rendering"
              src="/assets/projects/sound-to-form/collage_eisenbahn.png"
              caption="Digitale Collage, Photoshop. Das Objekt im urbanen Randkontext mit Eisenbahntrassee — Bildsprache bewusst auf den Charakter der Komposition abgestimmt. TU Braunschweig 2014."
              width={680}
              height={400}
            />
          </DetailSection>

          <DetailSection id="reflexion" num="05" label="Reflexion">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Audiodaten als Generierungsquelle
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Das Projekt war ein Experiment innerhalb des MAYA-Workshops, der nDynamics und
                parametrische Formgenerierung zum Thema hatte. Anstatt nCloth-Simulationen
                abzugeben, wurde ein eigenständiger Weg gewählt: Audiodaten als
                Generierungsquelle, Software-Kette als Übersetzungsapparat, Musik als
                formgebendes Prinzip.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                <strong className="text-stone-900 font-medium">Einordnung:</strong> Die Methode
                schliesst sich an eine Tradition an, in der zeitbasierte oder akustische Daten
                direkt in Geometrie überführt werden — von Iannis Xenakis&apos; Philips-Pavillon bis zu
                zeitgenössischen parametrischen Ansätzen. Das Ergebnis erhebt keinen Anspruch auf
                architektonische Vollständigkeit, zeigt aber die Tragfähigkeit des Ansatzes als
                konzeptionelles Werkzeug.
              </p>
            </div>
          </DetailSection>

          <DetailSection id="verbindungen" num="06" label="Verbindungen">
            <ProjectConnections
              cols={[
                {
                  title: 'Arbeitsfelder',
                  items: [
                    { label: 'Generativer Entwurf' },
                    { label: 'Computational Design' },
                    { label: 'Daten als Entwurfsgrundlage' },
                    { label: 'Parametrische Modellierung' },
                  ],
                },
                {
                  title: 'Prinzipien',
                  items: [
                    { label: 'Prozess vor Form' },
                    { label: 'Daten vor Intuition' },
                    { label: 'Werkzeugkette als Methode' },
                  ],
                },
                {
                  title: 'Verwandte Inhalte',
                  items: [
                    { label: 'Algorithmische Wärme', href: '/projekte/algorithmische-waerme' },
                    { label: 'Denkarchitektur', href: '/schriften/denkarchitektur' },
                  ],
                },
              ]}
            />
          </DetailSection>

          <ProjectNextNav
            prev={{ label: 'GIS-Suchfunktion', kicker: 'Featured · GIS', href: '/projekte/gis-suchfunktion' }}
            next={{ label: 'Algorithmische Wärme', kicker: 'Material', href: '/projekte/algorithmische-waerme' }}
          />
        </div>
      </div>
    </PageShell>
  );
}
