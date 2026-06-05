import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectRecord from '@/components/projects/ProjectRecord';
import ProjectAbstract from '@/components/projects/ProjectAbstract';
import DetailSection from '@/components/projects/DetailSection';
import FigurePlate from '@/components/projects/FigurePlate';
import MatrixTable from '@/components/projects/MatrixTable';
import ProjectConnections from '@/components/projects/ProjectConnections';
import ProjectNextNav from '@/components/projects/ProjectNextNav';
import { getProjectDetail } from '@/data/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: 'civitasflow' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) return {};
  return {
    title: `${project.title} · Projektdetail · Martin Hsu`,
    description: project.abstractText,
    alternates: { canonical: `/projekte/${slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) notFound();

  return (
    <PageShell>
      {/* 01 Header */}
      <ProjectHeader
        eyebrow="Fachapplikation · Öffentliche Verwaltung"
        title={
          <>
            Civitas<em className="italic text-gold-600">Flow</em>
          </>
        }
        subtitle={project.subtitle}
        lead={project.lead}
        tags={[
          { label: 'Im Einsatz', variant: 'gold' },
          { label: 'Product Ownership', variant: 'blue' },
          { label: 'Requirements' },
          { label: 'Systemlogik' },
        ]}
      />

      {/* 03 ProjectRecord */}
      <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <ProjectRecord items={project.record} />

        {/* Notice */}
        {project.notice && (
          <div className="border border-stone-200 bg-[#F0EEE8] px-[1.15rem] py-4 mt-8 text-[0.88rem] leading-[1.65] text-stone-700 font-light">
            <strong className="text-stone-900 font-medium">Hinweis zur Darstellung:</strong>{' '}
            {project.notice}
          </div>
        )}
      </div>

      {/* Main detail layout */}
      <div className="grid grid-cols-[220px_1fr] gap-16 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)] py-[4.8rem] pb-24 max-[980px]:grid-cols-1 max-[980px]:gap-10">
        {/* Aside: table of contents */}
        <aside className="sticky top-24 self-start max-[980px]:static" aria-label="Inhaltsnavigation">
          <div className="border border-stone-200 bg-[#F8F7F3] p-[1.1rem_1.15rem]">
            <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-gold-600 mb-[0.85rem]">
              Inhalt
            </div>
            <ol className="list-none">
              {[
                ['ueberblick', '01', 'Überblick'],
                ['kontext', '02', 'Kontext'],
                ['ausgangslage', '03', 'Ausgangslage'],
                ['beitrag', '04', 'Beitrag'],
                ['systemlogik', '05', 'Systemlogik'],
                ['rollen', '06', 'Rollen'],
                ['prozess', '07', 'Prozess'],
                ['schnittstellen', '08', 'Schnittstellen'],
                ['relevanz', '09', 'Relevanz'],
                ['verbindungen', '10', 'Verbindungen'],
              ].map(([id, num, label]) => (
                <li key={id} className="border-t border-stone-100">
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

        {/* Detail content */}
        <div className="min-w-0">

          {/* 01 Überblick */}
          <DetailSection id="ueberblick" num="01" label="Überblick">
            <ProjectAbstract text={project.abstractText} />
            <FigurePlate
              label="ABB. 01 · Systemarchitektur"
              type="FigurePlate · Diagramm"
              src="/assets/projects/civitasflow/civitasflow_systemarchitektur.svg"
              caption="Systemarchitektur: Schematische Darstellung zentraler Systembereiche, Module und Schnittstellen von CivitasFlow. Die Darstellung ist abstrahiert und enthält keine internen Daten."
              darkInset
              width={680}
              height={408}
            />
          </DetailSection>

          {/* 02 Kontext */}
          <DetailSection id="kontext" num="02" label="Projektkontext">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Verwaltungslogik als Systemaufgabe
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                In der öffentlichen Verwaltung sind Bewilligungsverfahren für Bauvorhaben komplex
                und interdisziplinär. Ein einziges Gesuch kann gleichzeitig Prüfungen aus mehreren
                Fachbereichen auslösen und unterschiedliche Rollen, Fristen, Dokumente und
                Zuständigkeiten berühren.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Die Herausforderung liegt nicht nur in der digitalen Erfassung eines Gesuchs, sondern
                in der Abbildung paralleler fachlicher Prüfungen, Zuständigkeiten,
                Bearbeitungsstände und Dokumentlogiken. Digitale Prozesse werden deshalb erst dann
                belastbar, wenn die organisatorische Wirklichkeit präzise modelliert wird.
              </p>
            </div>
          </DetailSection>

          {/* 03 Ausgangslage */}
          <DetailSection id="ausgangslage" num="03" label="Ausgangslage">
            <div className="max-w-[66ch] mb-[1.6rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Strukturfrage statt reines Digitalisierungsproblem
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Die Ausgangslage wird nicht als allgemeines Digitalisierungsproblem beschrieben,
                sondern als konkrete Strukturfrage: Welche Informationen, Rollen, Prüfbereiche und
                Prozessstände müssen sichtbar werden, damit eine Fachapplikation die
                Verwaltungspraxis trägt?
              </p>
            </div>
            {/* ProblemMap */}
            <div className="border border-stone-200 bg-[#F8F7F3]">
              {[
                { num: '01', title: 'Medienbrüche', text: 'Informationen liegen in unterschiedlichen Kanälen, Ablagen oder Bearbeitungsständen vor.' },
                { num: '02', title: 'Zuständigkeiten', text: 'Fachstellen benötigen klare Rollen, Sichtbarkeiten und Verantwortlichkeiten.' },
                { num: '03', title: 'Prozesssicht', text: 'Gesuche durchlaufen mehrere Prüflogiken, die parallel oder sequenziell wirken können.' },
                { num: '04', title: 'Dokumente', text: 'Vorlagen, Stellungnahmen und Prüfberichte müssen nachvollziehbar erzeugt und zugeordnet werden.' },
                { num: '05', title: 'Steuerung', text: 'Pendenzen, Fristen und Status müssen für unterschiedliche Rollen lesbar sein.' },
              ].map((row) => (
                <div
                  key={row.num}
                  className="grid grid-cols-[3.5rem_12rem_1fr] border-t border-stone-100 first:border-t-0 max-[760px]:grid-cols-[3.5rem_1fr]"
                >
                  <div className="p-[1rem_1.1rem] font-mono text-[0.62rem] tracking-[0.14em] text-blue-700">
                    {row.num}
                  </div>
                  <div className="p-[1rem_1.1rem] border-l border-stone-100 text-[0.9rem] font-medium text-stone-900 max-[760px]:col-start-2">
                    {row.title}
                  </div>
                  <div className="p-[1rem_1.1rem] border-l border-stone-100 text-[0.9rem] leading-[1.62] text-stone-700 font-light max-[760px]:col-span-2 max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:border-dashed">
                    {row.text}
                  </div>
                </div>
              ))}
            </div>
          </DetailSection>

          {/* 04 Beitrag */}
          <DetailSection id="beitrag" num="04" label="Beitrag und Rolle">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Übersetzung fachlicher Anforderungen in prüfbare Systemlogik
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Der Beitrag lag in der Verbindung fachlicher Anforderungen mit einer
                nachvollziehbaren digitalen Struktur. Die Rolle wird nicht als Selbstbeschreibung
                inszeniert, sondern über konkrete Arbeitsfelder sichtbar gemacht.
              </p>
            </div>
            {/* ContributionList */}
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 max-[680px]:grid-cols-1">
              {[
                { kicker: 'Beitrag 01', title: 'Requirements Engineering', text: 'User Stories, Akzeptanzkriterien, fachliche Klärung und Strukturierung von Anforderungen.' },
                { kicker: 'Beitrag 02', title: 'Testing und Qualitätssicherung', text: 'Prüfung von Systemabläufen, Fehleranalyse und Koordination mit der technischen Umsetzung.' },
                { kicker: 'Beitrag 03', title: 'Support und Fachkoordination', text: 'Anwendungssupport, Rückmeldungen aus dem Betrieb und Vermittlung zwischen Fachbereichen.' },
                { kicker: 'Beitrag 04', title: 'Releasebegleitung', text: 'Einordnung von Änderungen, Prüfung fachlicher Auswirkungen und Begleitung iterativer Verbesserungen.' },
              ].map((item) => (
                <article key={item.kicker} className="bg-[#FBFAF7] p-[1.35rem_1.45rem]">
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-blue-700 mb-[0.55rem]">
                    {item.kicker}
                  </div>
                  <h3 className="text-[0.96rem] leading-[1.35] font-medium text-stone-900 mb-[0.45rem]">
                    {item.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.65] text-stone-700 font-light">{item.text}</p>
                </article>
              ))}
            </div>
          </DetailSection>

          {/* 05 Systemlogik */}
          <DetailSection id="systemlogik" num="05" label="Systemlogik">
            <div className="bg-blue-800 text-[#F5F4F0] border border-[#183B55] mt-[1.9rem]">
              <div className="grid grid-cols-2 gap-8 p-8 border-b border-[rgba(244,242,236,0.2)] max-[900px]:grid-cols-1">
                <h3 className="font-serif font-normal text-[clamp(1.45rem,2.4vw,2.05rem)] leading-[1.25] text-[#F5F4F0]">
                  Vier Ebenen der Systemmodellierung
                </h3>
                <p className="text-[0.95rem] leading-[1.72] text-[rgba(244,242,236,0.72)] font-light">
                  Die Systemlogik verbindet fachliche Wirklichkeit und digitale Struktur. Entscheidend
                  ist nicht nur, welche Funktionen das System besitzt, sondern wie Organisation, Daten,
                  Schnittstellen und Oberfläche zusammenwirken.
                </p>
              </div>
              <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
                {[
                  { num: '01', title: 'Organisation', text: 'Fachstellen, Rollen, Zuständigkeiten, Rechte und operative Verantwortung.' },
                  { num: '02', title: 'Daten', text: 'Baugesuche, Prüfbereiche, Status, Fristen, Pendenzen und Dokumentbezüge.' },
                  { num: '03', title: 'Schnittstellen', text: 'Eingaben, Geodaten, Finanzlogik, Dokumente und externe Umsysteme.' },
                  { num: '04', title: 'Oberfläche', text: 'Fallansichten, Fachreiter, Dashboards, Such- und Filterlogiken.' },
                ].map((layer) => (
                  <div key={layer.num} className="p-[1.35rem] border-r border-[rgba(244,242,236,0.18)] last:border-r-0 max-[900px]:[&:nth-child(2)]:border-r-0 max-[560px]:border-r-0 max-[560px]:border-b max-[560px]:last:border-b-0">
                    <div className="font-mono text-[0.58rem] tracking-[0.16em] text-[#F0E1B5] mb-[0.7rem]">
                      {layer.num}
                    </div>
                    <h4 className="text-[0.9rem] font-medium mb-[0.5rem] text-[#F5F4F0]">
                      {layer.title}
                    </h4>
                    <p className="text-[0.82rem] leading-[1.6] text-[rgba(244,242,236,0.7)] font-light">
                      {layer.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </DetailSection>

          {/* 06 Rollen */}
          <DetailSection id="rollen" num="06" label="Rollen und Berechtigungen">
            <div className="max-w-[66ch] mb-0">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Berechtigungen als Governance-Ebene
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Die Rollenmatrix zeigt, dass digitale Fachsysteme nicht nur Funktionsumfang, sondern
                auch Zugriff, Verantwortung und operative Steuerung modellieren müssen.
              </p>
            </div>
            <MatrixTable />
          </DetailSection>

          {/* 07 Prozess */}
          <DetailSection id="prozess" num="07" label="Prozessablauf">
            <FigurePlate
              label="ABB. 02 · Prozessablauf Baugesuch"
              type="FigurePlate · Prozess"
              src="/assets/projects/civitasflow/civitasflow_baugesuch_prozessablauf.svg"
              caption="Prozessmodell: Abstrahierter Ablauf eines Baugesuchs von der Eingabe über Prüfung und Stellungnahme bis zu Entscheid, Rechnung und Archivierung."
              darkInset
              width={680}
              height={620}
            />
          </DetailSection>

          {/* 08 Schnittstellen */}
          <DetailSection id="schnittstellen" num="08" label="Schnittstellen und Umsysteme">
            <div className="max-w-[66ch] mb-[1.8rem]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Einbettung in technische und organisatorische Umgebung
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                Schnittstellen werden als organisatorisch-technische Einbettung gezeigt, nicht als
                reiner Netzwerkplan.
              </p>
            </div>
            {/* InterfaceTable */}
            <div className="border border-stone-200 bg-[#F8F7F3]">
              {[
                { name: 'Eingabeplattform', desc: 'Übernahme strukturierter Gesuchs- und Kontaktdaten aus vorgelagerten Eingaben.' },
                { name: 'Geodaten / Kartenlayer', desc: 'Räumliche Informationen und Layerlogik für Lagebezug, Suche und fachliche Einordnung.' },
                { name: 'Dokumente / Vorlagen', desc: 'Erstellung von Stellungnahmen, Prüfberichten und wiederkehrenden Dokumentstrukturen.' },
                { name: 'Finanz- und Rechnungslogik', desc: 'Übergang von fachlichem Abschluss in abrechnungsrelevante Folgeprozesse.' },
                { name: 'Kontakt- und Rollenregister', desc: 'Zuordnung von Personen, Rollen, Fachstellen und Berechtigungen.' },
              ].map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-[14rem_1fr] border-t border-stone-100 first:border-t-0 max-[650px]:grid-cols-1"
                >
                  <div className="p-[1rem_1.1rem] border-r border-stone-100 font-mono text-[0.72rem] tracking-[0.08em] text-blue-700 max-[650px]:border-r-0 max-[650px]:border-b max-[650px]:border-dashed">
                    {row.name}
                  </div>
                  <div className="p-[1rem_1.1rem] text-[0.9rem] leading-[1.6] text-stone-700 font-light">
                    {row.desc}
                  </div>
                </div>
              ))}
            </div>
          </DetailSection>

          {/* 09 Relevanz */}
          <DetailSection id="relevanz" num="09" label="Relevanz">
            <div className="max-w-[66ch]">
              <h2 className="font-serif font-normal text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.012em] mb-[1.2rem]">
                Digitale Prozesse entstehen aus modellierter Verantwortung
              </h2>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-[1.1rem]">
                CivitasFlow zeigt, wie Product Ownership, Requirements Engineering und
                Informationsarchitektur zusammenwirken, wenn ein digitales System reale
                Verwaltungslogik tragen soll.
              </p>
              <p className="text-[1rem] leading-[1.82] text-stone-700 font-light">
                <strong className="text-stone-900 font-medium">Kernsatz:</strong> Digitale Prozesse
                entstehen nicht aus Technologie allein, sondern aus der präzisen Modellierung von
                Zuständigkeiten, Datenflüssen und fachlicher Verantwortung.
              </p>
            </div>
          </DetailSection>

          {/* 10 Verbindungen */}
          <DetailSection id="verbindungen" num="10" label="Verbindungen">
            <ProjectConnections
              cols={[
                {
                  title: 'Arbeitsfelder',
                  items: [
                    { label: 'Verwaltungsdigitalisierung' },
                    { label: 'Product Ownership' },
                    { label: 'Requirements Engineering' },
                    { label: 'Daten- und Prozessmodellierung' },
                  ],
                },
                {
                  title: 'Prinzipien',
                  items: [
                    { label: 'Struktur vor Werkzeug' },
                    { label: 'Beleg vor Behauptung' },
                    { label: 'System vor Oberfläche' },
                    { label: 'Verantwortung vor Automatisierung' },
                  ],
                },
                {
                  title: 'Verwandte Inhalte',
                  items: [
                    { label: 'GIS-Suchfunktion', href: '/projekte/gis-suchfunktion' },
                    { label: 'Decision Layer', href: '/schriften/decision-layer' },
                    { label: 'GPT-Stack', href: '/schriften/gpt-stack' },
                    { label: 'KI-Governance', href: '/schriften/ki-governance' },
                  ],
                },
              ]}
            />
          </DetailSection>

          {/* Contact CTA */}
          <section
            className="bg-blue-800 text-[#F5F4F0] border border-[#183B55] p-[clamp(2rem,4vw,3rem)]
                       grid grid-cols-[1.4fr_1fr] gap-10 items-start mt-4 max-[760px]:grid-cols-1"
            aria-label="Kontaktabschluss"
          >
            <div>
              <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.1rem)] leading-[1.25] tracking-[-0.01em] text-[#F5F4F0]">
                Systeme verständlich machen, bevor sie umgesetzt werden.
              </h2>
            </div>
            <div>
              <p className="text-[1rem] leading-[1.72] text-[rgba(244,242,236,0.72)] font-light">
                Für Gespräche zu Product Ownership, Informationsarchitektur,
                Verwaltungsdigitalisierung oder KI-gestützten Systemen.
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

          {/* Next nav */}
          <ProjectNextNav
            next={{ label: 'GIS-Suchfunktion', kicker: 'Featured · GIS', href: '/projekte' }}
          />
        </div>
      </div>
    </PageShell>
  );
}
