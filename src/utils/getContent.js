// src/utils/getContent.js
export async function getArticles() {
  const files = import.meta.glob("../content/articles/*.mdx", { eager: true });
  return Object.values(files).map((mod) => mod.frontmatter);
}

export async function getProjects() {
  const files = import.meta.glob("../content/projects/*.mdx", { eager: true });
  return Object.values(files).map((mod) => mod.frontmatter);
}
