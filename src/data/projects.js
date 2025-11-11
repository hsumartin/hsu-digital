const modules = import.meta.glob("../content/projects/*.mdx", { eager: true });

const placeholder = {
  title: "Projekt in Planung",
  subtitle: "Bald verfügbar",
  slug: "coming-soon",
  image: "/images/bg-projects.png", // immer gleiches Banner
  date: "1970-01-01",
};

export const projects = Object.entries(modules)
  .map(([path, mod]) => {
    const fm = mod.frontmatter || {};
    const slug = fm.slug || path.split("/").pop().replace(/\.mdx$/, "");

    return {
      slug,
      title: fm.title?.trim() || placeholder.title,
      subtitle: fm.subtitle?.trim() || placeholder.subtitle,
      description: fm.description?.trim() || "",
      date: fm.date || placeholder.date,
      tags: fm.tags || [],
      image: fm.image?.trim() || placeholder.image,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

if (projects.length === 0) projects.push(placeholder);
