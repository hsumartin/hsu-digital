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
    hasDetail: true,
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
    hasDetail: true,
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
    hasDetail: true,
  },
  {
    slug: 'ki-menschliche-entwicklung',
    id: 'SCH · 05',
    title: 'KI und die Erweiterung menschlicher Entwicklungsmöglichkeiten',
    type: 'Whitepaper',
    year: '2026',
    principle: '«Entwicklung ist mehr als das, was jemand heute schon kann.»',
    description:
      'Wie neue Werkzeuge nicht nur unsere heutigen Fähigkeiten ergänzen, sondern auch zukünftige Interessen, Erfahrungen und Denkweisen beeinflussen könnten.',
    tags: ['Menschliche Entwicklung', 'Mensch-KI-Zusammenarbeit', 'Entwicklungsoffenheit'],
    featured: false,
    hasDetail: true,
  },
  {
    slug: 'methodengefuehrte-ki-systementwicklung',
    id: 'SCH · 06',
    title: 'Von der Problemstellung zur eigenständigen Systemkonzeption',
    type: 'Whitepaper',
    year: '2026',
    principle: '«Ein Architekturentwurf ist kein Implementierungsnachweis.»',
    description:
      'Eine quellengebundene Fallstudie zur methodengeführten, KI-gestützten Entwicklung eines lokalen Agentensystems.',
    tags: ['Methode', 'Fallstudie', 'Lokales Agentensystem'],
    featured: false,
    hasDetail: true,
  },
  {
    slug: 'ki-kultureller-beschleuniger',
    id: 'SCH · 07',
    title: 'KI als kultureller Beschleuniger',
    type: 'Whitepaper',
    year: '2026',
    principle: '«Entscheidend sind die Bedingungen, nicht allein die Leistung.»',
    description:
      'Dieses Whitepaper untersucht, unter welchen technischen, individuellen und institutionellen Bedingungen KI nicht nur Aufgaben beschleunigt, sondern neue Fragen, überprüfbare Erkenntnisse und gemeinschaftlich nutzbare Wissensformen ermöglichen kann.',
    tags: ['Erkenntnistheorie', 'Digitale Souveränität', 'Wissenschaftliche Assistenz'],
    featured: false,
    hasDetail: true,
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

export const decisionLayerDetail: WritingDetail = {
  ...writings[1],
  subtitle: 'Wann KI sinnvoll ist — und wann nicht',
  lead: 'Der Decision Layer ist eine vorgelagerte Entscheidungslogik, die vor jeder KI-Implementierung prüft, ob KI im konkreten Anwendungsfall die sinnvollste Lösung darstellt. Sein Ziel ist nicht, KI zu verhindern, sondern ihren Einsatz dort zu konzentrieren, wo sie einen klaren funktionalen, wirtschaftlichen oder qualitativen Mehrwert erzeugt.',
  record: [
    { key: 'Kategorie', value: 'Whitepaper' },
    { key: 'Version', value: '2.0 · April 2026' },
    { key: 'Prinzip', value: 'Bewusste Begrenzung' },
    { key: 'Artefakte', value: '3-Schichten-Modell · Entscheidungspfade · Canvas' },
    { key: 'Wirkt in', value: 'Governance · Strategie · Regulierte Umgebungen' },
  ],
  abstractText: [
    'Nicht die maximale Nutzung von KI entscheidet über Zukunftsfähigkeit, sondern die Fähigkeit, ihren Einsatz bewusst, kontextsensibel und begründet zu steuern.',
    'Der Decision Layer wirkt als strategischer Filter vor jeder KI-Implementierung — strukturiert in drei Prüfebenen: Problem Fit, Value Fit und Risk Fit. Die Reife im Umgang mit KI zeigt sich nicht in der Breite ihres Einsatzes, sondern in der Präzision ihrer Begrenzung.',
  ],
};

export const kiGovernanceDetail: WritingDetail = {
  ...writings[2],
  subtitle: 'Struktur, Verantwortung und wirksame Integration in der öffentlichen Verwaltung',
  lead: 'Die zentrale Herausforderung beim KI-Einsatz in regulierten Umgebungen liegt nicht in der technologischen Leistungsfähigkeit, sondern in der Fähigkeit von Organisationen, deren Nutzung strukturiert, verantwortbar und lernfähig zu steuern.',
  record: [
    { key: 'Kategorie', value: 'Whitepaper' },
    { key: 'Version', value: '4.0 · Quellengeprüfter Entwurf' },
    { key: 'Prinzip', value: 'Kontrolle bleibt beim Menschen' },
    { key: 'Artefakte', value: 'Dokumentstruktur · Risikomatrix · Prinzipien' },
    { key: 'Wirkt in', value: 'Verwaltung · EU AI Act · Governance' },
  ],
  abstractText: [
    'Die zentrale Herausforderung beim Einsatz künstlicher Intelligenz in regulierten Umgebungen liegt nicht primär in der technologischen Leistungsfähigkeit der Systeme, sondern in der Fähigkeit von Organisationen, deren Nutzung strukturiert, verantwortbar und lernfähig zu steuern.',
    'Dieses Whitepaper entfaltet sechs Thesen: Das Kernproblem ist organisatorischer, nicht technischer Natur. Governance muss Handlungsfähigkeit ermöglichen, nicht nur Kontrolle bedeuten. KI-Einsatz braucht eine vorgelagerte Entscheidungslogik. Verantwortung verbleibt beim Menschen, muss aber organisatorisch übersetzt werden. KI-Governance entfaltet Wirkung erst durch operative Verankerung. KI-Governance ist ein kontinuierlicher Lernprozess.',
  ],
};

export const denkarchitekturDetail: WritingDetail = {
  ...writings[3],
  subtitle: 'Wie KI Denken sichtbar macht',
  lead: 'KI entfaltet ihr Potenzial nicht im einzelnen Prompt, sondern in der Architektur des Denkens. Der GPT-Stack, das USE+ Framework™ und der PromptPilot machen Denkprozesse sichtbar, strukturierbar und steuerbar — Grundlage für reproduzierbare Erkenntnis statt zufälliger Outputs.',
  record: [
    { key: 'Kategorie', value: 'Whitepaper' },
    { key: 'Version', value: 'April 2026' },
    { key: 'Prinzip', value: 'Denken sichtbar machen' },
    { key: 'Artefakte', value: 'Stack-Poster · USE+-Zyklus · PromptPilot · Agenten-Loop' },
    { key: 'Wirkt in', value: 'Systemdenken · PromptPilot · Agentik' },
  ],
  abstractText: [
    'KI entfaltet ihr Potenzial nicht im einzelnen Prompt, sondern in der Architektur des Denkens. Der GPT-Stack, das USE+ Framework™ und der PromptPilot machen Denkprozesse sichtbar, strukturierbar und steuerbar — Grundlage für reproduzierbare Erkenntnis statt zufälliger Outputs.',
    'Wert: Kohärenz statt Fragmentierung; Reproduzierbarkeit statt Zufall; schnellere Lernkurven. Ziel ist eine Denkökologie — ein Netzwerk aus Menschen, GPTs und Agenten, das Erkenntnis organisiert.',
  ],
};

const kiMenschlicheEntwicklungLead =
  'Wie neue Werkzeuge nicht nur unsere heutigen Fähigkeiten ergänzen, sondern auch zukünftige Interessen, Erfahrungen und Denkweisen beeinflussen könnten.';

export const kiMenschlicheEntwicklungDetail: WritingDetail = {
  ...writings[4],
  subtitle: 'Zwischen Können, Ermöglichen und neuen Interessen',
  lead: kiMenschlicheEntwicklungLead,
  record: [
    { key: 'Kategorie', value: 'Whitepaper' },
    { key: 'Version', value: '1.4' },
    { key: 'Thema', value: 'KI und Gesellschaft' },
    { key: 'Artefakte', value: 'Drei Dimensionen · Rückkopplung' },
    { key: 'Sprachen', value: 'Deutsch · English' },
  ],
  abstractText: [kiMenschlicheEntwicklungLead],
};

const methodengefuehrteLead =
  'Methodisches Whitepaper mit historischem Erkenntnisinteresse. Kein Implementierungs-, Sicherheits- oder Wirksamkeitsnachweis des geplanten lokalen KI-Agentensystems.';

export const methodengefuehrteKiSystementwicklungDetail: WritingDetail = {
  ...writings[5],
  subtitle: 'Eine Fallstudie zur methodengeführten, KI-gestützten Entwicklung eines lokalen Agentensystems',
  lead: methodengefuehrteLead,
  record: [
    { key: 'Kategorie', value: 'Whitepaper' },
    { key: 'Version', value: '1.6.1' },
    { key: 'Stand', value: '23. Oktober 2026' },
    { key: 'Artefakte', value: 'Vier Illustrationen · Anhang A–C' },
    { key: 'Sprachen', value: 'Deutsch · English' },
  ],
  abstractText: [methodengefuehrteLead],
};

const kiKulturellerBeschleunigerLead =
  'Die gesellschaftliche Bedeutung künstlicher Intelligenz entscheidet sich nicht allein an ihrer Leistungsfähigkeit, sondern an den Bedingungen, unter denen aus individueller Assistenz überprüfbare Erkenntnis, kollektives Wissen und gesellschaftlicher Nutzen entstehen können.';

export const kiKulturellerBeschleunigerDetail: WritingDetail = {
  ...writings[6],
  subtitle: 'Gesellschaftliche Voraussetzungen für die Erweiterung menschlicher Erkenntnis, Zusammenarbeit und Entwicklung',
  lead: kiKulturellerBeschleunigerLead,
  record: [
    { key: 'Kategorie', value: 'Whitepaper' },
    { key: 'Version', value: '1.5' },
    { key: 'Lesezeit', value: 'ca. 35–45 Min.' },
    { key: 'Artefakte', value: 'Drei Abbildungen' },
    { key: 'Sprachen', value: 'Deutsch · English' },
  ],
  abstractText: [kiKulturellerBeschleunigerLead],
};

export function getWritingDetail(slug: string): WritingDetail | null {
  if (slug === 'ki-kultureller-beschleuniger') return kiKulturellerBeschleunigerDetail;
  if (slug === 'methodengefuehrte-ki-systementwicklung') return methodengefuehrteKiSystementwicklungDetail;
  if (slug === 'ki-menschliche-entwicklung') return kiMenschlicheEntwicklungDetail;
  if (slug === 'gpt-stack') return gptStackDetail;
  if (slug === 'decision-layer') return decisionLayerDetail;
  if (slug === 'ki-governance') return kiGovernanceDetail;
  if (slug === 'denkarchitektur') return denkarchitekturDetail;
  return null;
}
