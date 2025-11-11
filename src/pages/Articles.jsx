import React from "react";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../api/articles";

export default function Articles() {
  return (
    <main className="min-h-screen bg-surface-base text-text-primary px-6 sm:px-10 md:px-16 lg:px-20 py-20 transition-theme duration-700">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gold-400 mb-3">
          Beiträge
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Gedanken, Analysen und Strategien zu digitalen Transformationen.
        </p>
      </header>

     {/* ✨ Goldene Trennlinie – identisch zur Startseite */}
     <div className="relative flex justify-center z-20 mb-12">
       <div className="w-[70%] h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
     </div>

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {articles.map((a) => (
          <ArticleCard
            key={a.slug}
            title={a.title}
            subtitle={a.subtitle}
            excerpt={a.excerpt}
            href={`/beitraege/${a.slug}`}
            image={a.image}
            category={a.category}
            date={a.date}
            author={a.author}
            language={a.lang}
            readingTime={a.readingTime}
          />
        ))}
      </section>
    </main>
  );
}
