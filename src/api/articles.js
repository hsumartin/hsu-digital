// /src/api/articles.js
// ⚙️ Datenquelle für alle Artikel (MDX)
// Zentraler, typensicherer, performanter Parser

/**
 * Artikeltyp zur besseren Lesbarkeit / IDE-Support
 * @typedef {Object} Article
 * @property {string} slug
 * @property {string} title
 * @property {string} subtitle
 * @property {string} excerpt
 * @property {string} image
 * @property {string} date
 * @property {string} author
 * @property {string} category
 * @property {string} lang
 * @property {string} readingTime
 */

/**
 * 🔁 Lädt alle Artikel aus /content/articles
 * @returns {Article[]} – sortiertes Array mit allen Artikeln (neueste zuerst)
 */
export function getAllArticles() {
  const modules = import.meta.glob("../content/articles/*.mdx", { eager: true });

  const allArticles = Object.entries(modules)
    .map(([path, mod]) => {
      const fm = mod.frontmatter || {};
      const slug = path.split("/").pop().replace(/\.mdx$/, "");

      return {
        slug,
        title: fm.title?.trim() || "Unbenannter Artikel",
        // 🔧 Subtitle mit Fallback auf teaser (z. B. bei älteren Artikeln)
        subtitle: fm.subtitle?.trim() || fm.teaser?.trim() || "",
        excerpt: fm.excerpt?.trim() || "",
        image: fm.image?.trim() || "/images/bg-articles.png",
        date: fm.date || "1970-01-01",
        author: fm.author || "Martin Hsu",
        category: fm.category || "Allgemein",
        lang: fm.lang || fm.language || "de",
        readingTime: fm.readingTime || fm.reading_time || "",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return allArticles;
}

/**
 * 🔍 Holt einen bestimmten Artikel anhand des Slugs
 * (z. B. für ArticleDetail oder dynamisches Routing)
 */
export function getArticleBySlug(slug) {
  const articles = getAllArticles();
  return articles.find((a) => a.slug === slug) || null;
}

/**
 * 🧠 Optionales Memoization-Pattern (Performance)
 * → verhindert mehrfaches Re-Parsing bei Hot Reload / Build
 */
let cache = null;
export function useArticles() {
  if (!cache) cache = getAllArticles();
  return cache;
}

// Für einfache Imports:
export const articles = useArticles();
