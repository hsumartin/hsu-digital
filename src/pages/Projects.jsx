import React from "react";
import ProjectCard from "../components/ProjectCard";
import { getPlaceholder } from "../utils/placeholders";
import SectionHeader from "../components/SectionHeader";

// Eager Load für MDX-Projekte
const projectModules = import.meta.glob("../content/projects/*.mdx", { eager: true });

export default function Projects() {
  // Projekte aus MDX-Dateien extrahieren
  const projects = Object.entries(projectModules)
    .map(([path, mod]) => {
      const fm = mod.frontmatter ?? {};
      const slug = fm.slug ?? path.split("/").pop().replace(/\.mdx$/, "");
      return {
        title: fm.title ?? "Unbenanntes Projekt",
        description: fm.description ?? "Dieses Projekt wird bald ergänzt.",
        slug,
        image: fm.image ?? getPlaceholder("project")?.src,
        date: fm.date ?? "1970-01-01",
        tags: fm.tags ?? [],
        client: fm.client ?? null,
        role: fm.role ?? null,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Fallback für leere Liste
  const list = projects.length
    ? projects
    : [
        {
          title: "Projekt folgt bald",
          description: "Ein neues Projekt ist in Vorbereitung.",
          slug: "coming-soon",
          image: getPlaceholder("project")?.src,
        },
      ];

  return (
    <main className="bg-navy-900 text-neutral-50 min-h-screen overflow-hidden">
      {/* Header-Bereich */}
      <SectionHeader
  title="Projekte"
  subtitle="Strategisch gestaltete Projekte mit Fokus auf Wirkung, Markenführung und digitale Tiefe."
/>

      {/* Grid mit Motion-Potenzial */}
      <section className="pb-32 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {list.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            href={`/projekte/${p.slug}`}
            image={p.image}
            type="project"
            tags={p.tags}
          />
        ))}
      </section>
    </main>
  );
}
