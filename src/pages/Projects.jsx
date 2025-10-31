import React from "react";
import Card from "../components/Card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="bg-navy-900 text-neutral-50 min-h-screen">
      {/* Header / Intro */}
      <section className="py-24 px-8 md:px-20 text-center">
        <h1 className="text-4xl font-semibold text-gold-500 mb-4">Projekte</h1>
        <p className="max-w-2xl mx-auto text-neutral-200">
          Eine Auswahl meiner bisherigen Projekte und Entwicklungen im Bereich
          Digitalisierung, BIM und Prozessmanagement.
        </p>
      </section>

      {/* Projekte Grid */}
      <section className="pb-32 px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            description={p.description}
            href={p.href}
          />
        ))}
      </section>
    </main>
  );
}
