import PageShell from '@/components/layout/PageShell';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectRecord from '@/components/projects/ProjectRecord';
import ProjectAbstract from '@/components/projects/ProjectAbstract';
import DetailSection from '@/components/projects/DetailSection';
import FigurePlate from '@/components/projects/FigurePlate';
import ProjectConnections from '@/components/projects/ProjectConnections';
import ProjectNextNav from '@/components/projects/ProjectNextNav';
import { ProjectDetail } from '@/data/projects';

export default function MittenmangDossier({ project }: { project: ProjectDetail }) {
  return (
    <PageShell>
      <ProjectHeader
        eyebrow="Städtebau · ISU TU Braunschweig · 2015/16"
        title={<>Mitten<em className="italic text-gold-600">mang</em></>}
        subtitle={project.subtitle}
        lead={project.lead}
        tags={[
          { label: 'Entwurf', variant: 'gold' },
          { label: 'Städtebau', variant: 'blue' },
          { label: 'Hamburg' },
          { label: 'Grünband' },
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
                ['projekt', '02', 'Projekt'],
                ['reflexion', '03', 'Reflexion'],
                ['erkenntnis', '04', 'Erkenntnis'],
                ['verbindungen', '05', 'Verbindungen'],
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
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 mt-8 max-[680px]:grid-cols-1">
              <FigurePlate
                label="ABB. 01 · Analysekarte"
                type="FigurePlate · Analyse"
                src="/assets/projects/mittenmang/analysekarte.png"
                caption="Grün- und Blauplan — Fragmentiertes Grünband im Hamburger Hafenrandgebiet."
                width={680}
                height={510}
              />
              <FigurePlate
                label="ABB. 02 · Lageplan"
                type="FigurePlate · Plan"
                src="/assets/projects/mittenmang/grundplan.png"
                caption="Lageplan 1:1000 — Interventionsgebiet Brandshof. Brückenstruktur als urbaner Landschaftsraum."
                width={680}
                height={510}
              />
            </div>
          </DetailSection>

          <DetailSection id="projekt" num="02" label="Projekt">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Die Verweigerung als Ausgangspunkt
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Das Projekt begann mit einer ungewöhnlichen Entscheidung: Die Gruppe verweigerte
                die Beschränkung auf das zugewiesene Areal am Hamburger Hafenrand und fragte
                stattdessen nach dem grösseren räumlichen Zusammenhang.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Eine Kontextanalyse zeigte ein unterbrochenes Grünband, das sich fragmentiert
                durch mehrere Stadtteile zog. Daraus entstand die Leitidee: eine begehbare
                Brückenstruktur, die dieses Band aufgreift, vervollständigt und drei Stadtgebiete
                verbindet — nicht als Verkehrsweg, sondern als urbaner Landschaftsraum für
                Fussgänger und Radfahrer.
              </p>
            </div>
          </DetailSection>

          <DetailSection id="reflexion" num="03" label="Reflexion">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Zwischen Konzept und Umsetzung
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Die Idee war stark. Die Umsetzung offenbarte ein strukturelles Problem, das erst
                im Rückblick klar benennbar wurde.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-6 my-8 font-serif text-[1.05rem] italic leading-[1.75] text-stone-900">
                Zwischen der Konzeptidee und dem konkreten Entwurf fehlte eine mittlere Ebene:
                die räumliche Strategie.
              </blockquote>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Sie hätte festgelegt, nach welchem Prinzip das Konzept in Entscheidungen
                übersetzt wird, welche Konflikte es löst und was es unter keinen Umständen
                aufgeben darf. Ohne diese Ebene wurde jede externe Rückmeldung zur Bedrohung.
                Das Konzept blieb stark, der Entwurf blieb fragmentiert.
              </p>
            </div>
          </DetailSection>

          <DetailSection id="erkenntnis" num="04" label="Erkenntnis">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Konzeptebene, Strategieebene, Umsetzungsebene
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                Eine Leitidee ist kein Entwurf. Sie wird erst handlungsfähig, wenn sie in
                operative Prinzipien übersetzt ist, die unter Druck standhalten. Der Schritt
                dazwischen ist kein kreativer, sondern ein analytischer.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                <strong className="text-stone-900 font-medium">Übertrag:</strong> Die
                Unterscheidung zwischen Konzeptebene, Strategieebene und Umsetzungsebene prägt
                seither die Arbeitsweise — auch in Digitalisierungs- und KI-Projekten, wo
                dieselbe Lücke regelmässig entscheidend wird.
              </p>
            </div>
          </DetailSection>

          <DetailSection id="verbindungen" num="05" label="Verbindungen">
            <ProjectConnections
              cols={[
                {
                  title: 'Arbeitsfelder',
                  items: [
                    { label: 'Städtebaulicher Entwurf' },
                    { label: 'Konzept- und Strategieentwicklung' },
                    { label: 'Landschaftsraum' },
                    { label: 'Reflexive Praxis' },
                  ],
                },
                {
                  title: 'Prinzipien',
                  items: [
                    { label: 'Strategie vor Umsetzung' },
                    { label: 'Struktur vor Werkzeug' },
                    { label: 'Analyse vor Entwurf' },
                  ],
                },
                {
                  title: 'Verwandte Inhalte',
                  items: [
                    { label: 'Erinnerung als räumliche Eskalation', href: '/projekte/ohnesorg' },
                    { label: 'Decision Layer', href: '/schriften/decision-layer' },
                  ],
                },
              ]}
            />
          </DetailSection>

          <ProjectNextNav
            prev={{ label: 'Algorithmische Wärme', kicker: 'Material', href: '/projekte/algorithmische-waerme' }}
            next={{ label: 'Erinnerung als räumliche Eskalation', kicker: 'Architektur', href: '/projekte/ohnesorg' }}
          />
        </div>
      </div>
    </PageShell>
  );
}
