export type ProjectCategory = 'ugz' | 'arch';

export interface ProjectIndex {
  slug: string;
  title: string;
  context: string;
  domain: string;
  kicker: string;
  status: string;
  tags: string[];
  description: string;
  artifacts: string;
  category: ProjectCategory;
  featured: boolean;
  hasDetail: boolean;
}

export interface ProjectDetail extends ProjectIndex {
  subtitle: string;
  lead: string;
  record: Array<{ key: string; value: string; gold?: boolean }>;
  abstractText: string;
  notice?: string;
}

export const projects: ProjectIndex[] = [
  {
    slug: 'civitasflow',
    title: 'CivitasFlow',
    context: 'Öffentliche Verwaltung · Baubewilligung · Product Ownership',
    domain: 'Verwaltung · Baubewilligung',
    kicker: 'Featured · Fachsystem',
    status: 'Im Einsatz',
    tags: ['Requirements', 'Systemlogik', 'Referenzfall'],
    description:
      'Digitales Fachsystem zur Vernetzung fachlicher Prüfungen, Zuständigkeiten und Arbeitsstände im Baubewilligungsverfahren. Die Fallstudie zeigt, wie organisatorische Wirklichkeit in prüfbare Systemlogik übersetzt wird.',
    artifacts: 'Systemarchitektur · Prozessmodell · Rollenmatrix',
    category: 'ugz',
    featured: true,
    hasDetail: true,
  },
  {
    slug: 'gis-suchfunktion',
    title: 'GIS-Suchfunktion',
    context: 'GIS · Datenmodellierung · Verwaltung',
    domain: 'Geodaten · Suchlogik · Verwaltung',
    kicker: 'Featured · GIS',
    status: 'Publiziert',
    tags: ['GIS', 'Datenmodell', 'Geodaten'],
    description:
      'Räumliche Zuständigkeiten im Baubewilligungsverfahren werden in eine geodatenbasierte, prüfbare und nachführbare Struktur überführt. Im Zentrum stehen Layerlogik, Suchbarkeit und fachliche Nachvollziehbarkeit.',
    artifacts: 'Layerstruktur · Suchlogik · Prozessbezug',
    category: 'ugz',
    featured: true,
    hasDetail: false,
  },
  {
    slug: 'sound-to-form',
    title: 'Sound to Form',
    context: 'Klangdaten · Geometrie · Prozess',
    domain: 'Klangdaten · Geometrie · Prozess',
    kicker: 'Computational',
    status: 'Studie',
    tags: ['Computational', 'Geometrie'],
    description:
      'Audiodaten werden in geometrische und animierte Strukturen übersetzt. Musik wird als Datensatz, Kurve und Formprozess lesbar.',
    artifacts: 'Prozesskette · Amplitudengraph · Formgenerierung',
    category: 'arch',
    featured: false,
    hasDetail: false,
  },
  {
    slug: 'algorithmische-waerme',
    title: 'Algorithmische Wärme',
    context: 'Robotik · Wachs · Reaktion',
    domain: 'Robotik · Wachs · Reaktion',
    kicker: 'Material',
    status: 'Experiment',
    tags: ['Material', 'Robotik'],
    description:
      'Experimentelle Materialstudie über Wärme, Steuerung und Reaktion. Ein Roboterarm steuert thermische Prozesse, das Material antwortet mit Form.',
    artifacts: 'Versuchsreihe · Werkzeugkette · Materialreaktion',
    category: 'arch',
    featured: false,
    hasDetail: false,
  },
  {
    slug: 'ohnesorg',
    title: 'Erinnerung als räumliche Eskalation',
    context: 'Ohnesorg-Denkmal',
    domain: 'Erinnerung · Raumdramaturgie · Konzept',
    kicker: 'Architektur',
    status: 'Entwurf',
    tags: ['Architektur', 'Erinnerung'],
    description:
      'Ein Erinnerungsort wird als sequenzielle Raumdramaturgie verstanden. Architektur erzeugt Annäherung, Verdichtung, Konfrontation und Reflexion.',
    artifacts: 'Raumsequenz · Akte · Städtebauliche Setzung',
    category: 'arch',
    featured: false,
    hasDetail: false,
  },
  {
    slug: 'mittenmang',
    title: 'Mittenmang',
    context: 'Hamburg · Grünband · Strategie',
    domain: 'Hamburg · Grünband · Strategie',
    kicker: 'Städtebau',
    status: 'Entwurf',
    tags: ['Städtebau', 'Strategie'],
    description:
      'Städtebaulicher Entwurf in Hamburg, der ein unterbrochenes Grünband als räumliche Strategie weiterführt und Landschaft, Verbindung und Quartierslogik zusammendenkt.',
    artifacts: 'Grünband · Städtebauliche Setzung · Strategie',
    category: 'arch',
    featured: false,
    hasDetail: false,
  },
];

export const civitasflowDetail: ProjectDetail = {
  ...projects[0],
  subtitle: 'Digitales Fachsystem für Baubewilligungen',
  lead: 'Eine webbasierte Plattform zur Vernetzung fachlicher Prüfungen, Zuständigkeiten und Arbeitsstände im Baubewilligungsverfahren. Der Fokus liegt nicht auf Technologie als Selbstzweck, sondern auf der Modellierung organisatorischer Wirklichkeit.',
  record: [
    { key: 'Status', value: 'Im Einsatz', gold: true },
    { key: 'Domäne', value: 'Verwaltung · Baubewilligung' },
    { key: 'Rolle', value: 'PO-nah · Requirements · QS' },
    { key: 'Methodik', value: 'Scrum · User Stories · MVP' },
    { key: 'Systemtyp', value: 'Fachapplikation' },
    { key: 'Artefakte', value: 'Architektur · Prozess · Matrix' },
    { key: 'Darstellung', value: 'Abstrahiert' },
    { key: 'Vertraulichkeit', value: 'Keine internen Daten' },
  ],
  abstractText:
    'CivitasFlow modelliert ein digitales Fachsystem für verwaltungsnahe Baubewilligungsverfahren. Im Zentrum steht die Übersetzung fachlicher Zuständigkeiten, Prüfbereiche und Prozessstände in eine nachvollziehbare Systemstruktur. Die Fallstudie zeigt, wie Product Ownership, Requirements Engineering und Systemdenken zusammenwirken, wenn digitale Verwaltung nicht nur automatisiert, sondern fachlich modelliert wird.',
  notice:
    'CivitasFlow wird als abstrahierte Portfolio-Fallstudie geführt. Interne Bezeichnungen, reale Daten und vertrauliche Abläufe werden nicht dargestellt.',
};

export function getProjectDetail(slug: string): ProjectDetail | null {
  if (slug === 'civitasflow') return civitasflowDetail;
  return null;
}
