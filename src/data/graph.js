// 🧠 Knowledge Graph – Martin Hsu Digital
// Struktur analog zu articles.js, aber fokussiert auf Konzepte & Verbindungen

export const nodes = [
  {
    id: 1,
    slug: "systemarchitektur",
    title: "Systemarchitektur",
    subtitle: "Strukturen des Denkens und Handelns",
    teaser:
      "Verbindung zwischen organisationalen, technischen und kognitiven Systemen.",
    category: "Architecture",
    image: "/images/graph/systemarchitektur.webp",
    date: "2025-10-21",
    connections: ["ki-denkarchitektur", "metastruktur", "cognitive-frameworks"],
    accentColor: "#D1A954",
  },
  {
    id: 2,
    slug: "ki-denkarchitektur",
    title: "KI-Denkarchitektur",
    subtitle: "Vom Tool zur Denkarchitektur",
    teaser:
      "Wie künstliche Intelligenz Denken sichtbar, strukturierbar und steuerbar macht.",
    category: "Cognition",
    image: "/images/graph/ki-architektur.webp",
    date: "2025-11-05",
    connections: ["systemarchitektur", "human-in-the-loop"],
    accentColor: "#CBB57A",
  },
  {
    id: 3,
    slug: "metastruktur",
    title: "Metastruktur",
    subtitle: "Rahmen für relationale Ordnung",
    teaser:
      "Wie Ordnungsprinzipien aus Architektur, Design und Philosophie emergente Systeme bilden.",
    category: "Philosophy",
    image: "/images/graph/metastruktur.webp",
    date: "2025-08-17",
    connections: ["systemarchitektur", "graphensemantik"],
    accentColor: "#FBE7B0",
  },
];

// 🧩 Exports für spätere Erweiterung
export const getNodeBySlug = (slug) => nodes.find((n) => n.slug === slug);
export const relatedNodes = (slug) =>
  nodes.filter((n) => getNodeBySlug(slug)?.connections.includes(n.slug));
