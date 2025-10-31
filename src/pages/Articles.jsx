import React from "react";
import Card from "../components/Card";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <main className="bg-navy-900 text-neutral-50 min-h-screen">
      {/* Header / Intro */}
      <section className="py-24 px-8 md:px-20 text-center">
        <h1 className="text-4xl font-semibold text-gold-500 mb-4">Beiträge</h1>
        <p className="max-w-2xl mx-auto text-neutral-200">
          Analysen, Zukunftsthemen und Perspektiven rund um Künstliche
          Intelligenz, Digitalisierung und kreative Prozesse.
        </p>
      </section>

      {/* Beiträge Grid */}
      <section className="pb-32 px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((a) => (
          <Card
            key={a.title}
            title={a.title}
            description={a.description}
            href={a.href}
          />
        ))}
      </section>
    </main>
  );
}
