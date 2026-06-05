export type WritingType = 'Denkmodell' | 'Framework' | 'Position' | 'Whitepaper';

export interface WritingIndex {
  slug: string;
  id: string;
  title: string;
  type: WritingType;
  year: string;
  principle: string;
  description: string;
  tags: string[];
  featured: boolean;
  hasDetail: boolean;
}

export interface WritingDetail extends WritingIndex {
  subtitle: string;
  lead: string;
  record: Array<{ key: string; value: string }>;
  abstractText: string[];
}

export const writings: WritingIndex[] = [
  {
    slug: 'gpt-stack',
    id: 'SCH · 01',
    title: 'GPT-Stack',
    type: 'Denkmodell',
    year: '2025–2026',
    principle: '«Struktur vor Modell.»',
    description:
      'Eine modulare Denk- und Arbeitsarchitektur für KI. Qualität entsteht nicht aus Modellleistung allein, sondern aus der Struktur, in der Modelle eingesetzt, geprüft und weiterentwickelt werden.',
    tags: ['Methode', 'CivitasFlow', 'KI-Haltung'],
    featured: true,
    hasDetail: true,
  },
  {
    slug: 'decision-layer',
    id: 'SCH · 02',
    title: 'Decision Layer',
    type: 'Framework',
    year: '2025–2026',
    principle: '«Bewusste Begrenzung statt Maximierung.»',
    description:
      'Ein Entscheidungsmodell für den Einsatz von KI: Problem Fit, Value Fit und Risk Fit bilden eine vorgelagerte Prüflogik, bevor Werkzeuge, Modelle oder Automatisierungen ausgewählt werden.',
    tags: ['Methode', 'GIS ohne KI', 'Governance'],
    featured: true,
    hasDetail: false,
  },
  {
    slug: 'ki-governance',
    id: 'SCH · 03',
    title: 'KI-Governance in regulierten Umgebungen',
    type: 'Position',
    year: '2025–2026',
    principle: '«Kontrolle bleibt beim Menschen.»',
    description:
      'Sechs Thesen zur organisatorischen Steuerungslogik für eine nachvollziehbare, kontrollierte Nutzung von KI in Verwaltung, regulierten Kontexten und verantwortungsvollen Systemumgebungen.',
    tags: ['Verwaltung', 'Human-in-the-loop', 'Kontrolle'],
    featured: false,
    hasDetail: false,
  },
  {
    slug: 'denkarchitektur',
    id: 'SCH · 04',
    title: 'Vom Tool zur Denkarchitektur',
    type: 'Framework',
    year: '2025–2026',
    principle: '«Denken sichtbar und steuerbar machen.»',
    description:
      'GPT-Stack, USE+ Framework und PromptPilot als System: Denkprozesse werden sichtbar, strukturierbar und steuerbar. Der Schwerpunkt liegt auf Methode statt Werkzeugkatalog.',
    tags: ['Systemdenken', 'PromptPilot', 'Denkmodell'],
    featured: false,
    hasDetail: false,
  },
];

export const gptStackDetail: WritingDetail = {
  ...writings[0],
  subtitle: 'Eine modulare Denk- und Arbeitsarchitektur für KI',
  lead: 'Der GPT-Stack beschreibt KI-Arbeit nicht als Nutzung einzelner Tools, sondern als modulare Rollenarchitektur. Im Zentrum steht die Frage, wie Denk-, Prüf- und Arbeitsfunktionen getrennt, verbunden und kontrollierbar gemacht werden können.',
  record: [
    { key: 'Kategorie', value: 'Whitepaper' },
    { key: 'Status', value: 'Referenzschrift' },
    { key: 'Prinzip', value: 'Struktur vor Tool' },
    { key: 'Artefakte', value: 'Kreismodell · Durchlauf · Roadmap' },
    { key: 'Wirkt in', value: 'KI · Systemdenken · Portfolio' },
  ],
  abstractText: [
    'Dieses Whitepaper beschreibt den GPT-Stack als modulare Architektur für den strukturierten, reflektierten Einsatz von KI. Die Qualität von KI-Arbeit entsteht dabei nicht primär durch Modellleistung, sondern durch die Struktur, in der Modelle, Rollen, Prüfungen und Entscheidungen angeordnet werden.',
    'Die Schrift dient als konzeptionelle Grundlage für ein Portfolio, das KI nicht als einzelne Anwendung präsentiert, sondern als Denk- und Arbeitsarchitektur.',
  ],
};

export function getWritingDetail(slug: string): WritingDetail | null {
  if (slug === 'gpt-stack') return gptStackDetail;
  return null;
}
