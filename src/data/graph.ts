export interface GraphNode {
  id: string;
  type: 'projekt' | 'artikel' | 'tag';
  cat: 'ugz' | 'arch' | 'ki' | 'tag';
  label: string;
  short: string;
  url: string | null;
  tags: string[];
  count?: number;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export const MAIN_NODES: GraphNode[] = [
  {
    id: 'civitasflow',
    type: 'projekt',
    cat: 'ugz',
    label: 'CivitasFlow',
    short: 'Digitales Fachsystem für Baubewilligungsverfahren',
    url: '/projekte/civitasflow',
    tags: ['Digitalisierung', 'Öffentliche Verwaltung', 'Product Ownership', 'Systemdenken'],
  },
  {
    id: 'gis',
    type: 'projekt',
    cat: 'ugz',
    label: 'GIS-Suchfunktion',
    short: 'Räumliche Zuständigkeiten im Baubewilligungsverfahren',
    url: '/projekte/gis-suchfunktion',
    tags: ['GIS & Geodaten', 'Öffentliche Verwaltung', 'Wissensstruktur', 'Systemdenken'],
  },
  {
    id: 'ohnesorg',
    type: 'projekt',
    cat: 'arch',
    label: 'Erinnerung als räumliche Eskalation',
    short: 'Ohnesorg-Denkmal · Bachelorthesis · Raumsequenz',
    url: '/projekte/ohnesorg',
    tags: ['Architektonische Praxis', 'Visualisierung', 'Systemdenken'],
  },
  {
    id: 'soundtoform',
    type: 'projekt',
    cat: 'arch',
    label: 'Sound to Form',
    short: 'Klang als architektonischer Generierungsprozess',
    url: '/projekte/sound-to-form',
    tags: ['Generativ & Parametrisch', 'Architektonische Praxis', 'Visualisierung'],
  },
  {
    id: 'waerme',
    type: 'projekt',
    cat: 'arch',
    label: 'Algorithmische Wärme',
    short: 'Wachs als reaktives Medium',
    url: '/projekte/algorithmische-waerme',
    tags: ['Generativ & Parametrisch', 'Material & Prozess', 'Architektonische Praxis'],
  },
  {
    id: 'mittenmang',
    type: 'projekt',
    cat: 'arch',
    label: 'Mittenmang',
    short: 'Städtebaulicher Entwurf Hamburg · Grünband · Strategie',
    url: '/projekte/mittenmang',
    tags: ['Architektonische Praxis', 'Systemdenken'],
  },
  {
    id: 'gptstack',
    type: 'artikel',
    cat: 'ki',
    label: 'GPT-Stack',
    short: 'Modulare Denk- und Arbeitsarchitektur für KI',
    url: '/schriften/gpt-stack',
    tags: ['KI & Agenten', 'Systemdenken', 'Wissensstruktur'],
  },
  {
    id: 'decisionlayer',
    type: 'artikel',
    cat: 'ki',
    label: 'Decision Layer',
    short: 'Wann KI sinnvoll ist und wann nicht',
    url: '/schriften/decision-layer',
    tags: ['KI & Agenten', 'Governance & Ethik', 'Öffentliche Verwaltung'],
  },
  {
    id: 'kigovernance',
    type: 'artikel',
    cat: 'ki',
    label: 'KI-Governance',
    short: 'KI in regulierten Umgebungen',
    url: '/schriften/ki-governance',
    tags: ['KI & Agenten', 'Governance & Ethik', 'Öffentliche Verwaltung'],
  },
  {
    id: 'denkarchitektur',
    type: 'artikel',
    cat: 'ki',
    label: 'Denkarchitektur',
    short: 'Wie KI Denken sichtbar macht',
    url: '/schriften/denkarchitektur',
    tags: ['KI & Agenten', 'Systemdenken', 'Visualisierung', 'Wissensstruktur'],
  },
];

function buildTagCounts(nodes: GraphNode[]): Record<string, number> {
  const counts: Record<string, number> = {};
  nodes.forEach((n) => n.tags.forEach((t) => { counts[t] = (counts[t] || 0) + 1; }));
  return counts;
}

const tagCounts = buildTagCounts(MAIN_NODES);

export const TAG_NODES: GraphNode[] = Object.entries(tagCounts).map(([label, count]) => ({
  id: 'tag_' + label,
  type: 'tag' as const,
  cat: 'tag' as const,
  label,
  short: '',
  url: null,
  tags: [],
  count,
}));

export const ALL_NODES: GraphNode[] = [...MAIN_NODES, ...TAG_NODES];

export const EDGES: GraphEdge[] = [];
MAIN_NODES.forEach((n) =>
  n.tags.forEach((t) => EDGES.push({ source: n.id, target: 'tag_' + t })),
);
