// src/utils/placeholders.js

/**
 * Marken-Placeholder-System
 * Struktur & Design konsistent für alle Content-Typen:
 * - project  → Navy + Gold diagonal
 * - article  → Bronze-Gold horizontal
 * - empty    → Graphit + Goldschein
 */

export const placeholders = {
  project: {
    src: "/images/placeholder-project.png",
    alt: "Project coming soon",
    title: "Project Coming Soon",
    description: "Neues Projekt in Vorbereitung.",
  },
  article: {
    src: "/images/placeholder-article.png",
    alt: "Article coming soon",
    title: "Article Coming Soon",
    description: "Neuer Artikel in Vorbereitung.",
  },
  empty: {
    src: "/images/placeholder-empty.png",
    alt: "Content in progress",
    title: "Content in Progress",
    description: "Dieser Bereich wird bald erweitert.",
  },
};

/**
 * Utility-Funktion
 * Gibt passenden Placeholder-Typ zurück.
 * Fallback: "empty"
 */
export const getPlaceholder = (type = "empty") => {
  return placeholders[type] || placeholders.empty;
};
