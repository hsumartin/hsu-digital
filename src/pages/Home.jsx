import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { projects } from "../data/projects";   // <— named export erwartet
import { articles } from "../data/articles";   // <— named export erwartet

export default function Home() {
  // Fallbacks, falls Arrays (noch) leer/undefined sind
  const latestProjects = Array.isArray(projects) ? projects.slice(0, 3) : [];
  const latestArticles = Array.isArray(articles) ? articles.slice(0, 3) : [];

  return (
    <main className="bg-navy-900 text-neutral-50 min-h-screen overflow-x-hidden">
      {/* === HERO (kompakt, Bild links, Text rechts) === */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-10 md:gap-12">
        {/* Profilbild (Variante A – feiner Rahmen + dezenter Glow) */}
        <div className="relative w-56 md:w-64 flex-shrink-0">
          <img
            src="/images/martin-hsu-profile.png"
            alt="Martin Hsu"
            className="rounded-lg border border-gold-400/20 shadow-[0_0_25px_rgba(209,169,84,0.05)] opacity-95"
          />
          <div className="absolute inset-0 rounded-lg border border-gold-400/20 opacity-30 blur-[2px]" />
        </div>

        {/* Textbereich */}
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Martin Hsu
          </h1>
          <h2 className="text-2xl font-semibold text-gold-400 mb-6">
            Product Owner · BIM Manager · Digital Architect
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Ich gestalte digitale Systeme, in denen Struktur, Daten und Intelligenz
            harmonisch zusammenwirken – mit Fokus auf Architektur, Prozessautomatisierung
            und KI-gestützten Wissenstransfer.
          </p>

          <Link
            to="/profil"
            className="inline-block px-6 py-3 border border-gold-400 text-gold-400 font-medium rounded-md hover:bg-gold-400 hover:text-navy-900 transition-all duration-300"
          >
            Mehr über mich
          </Link>
        </div>
      </section>

      {/* === PROJEKTE: Teaser (3) === */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h3 className="text-3xl font-semibold text-white mb-8 text-center">Aktuelle Projekte</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((p) => (
            <Card
              key={p.id || p.title}
              title={p.title}
              description={p.description}
              href={p.href || "/projekte"}
              className="bg-navy-900/60 border border-navy-700/60 hover:border-gold-400/40 hover:shadow-[0_0_20px_rgba(209,169,84,0.12)] rounded-lg transition-all duration-300"
            />
          ))}
          {latestProjects.length === 0 && (
            <div className="col-span-full text-center text-gray-400">
              (Noch keine Projekte hinterlegt)
            </div>
          )}
        </div>
        <div className="text-center mt-8">
          <Link to="/projekte" className="text-gold-400 hover:underline hover:text-gold-300">
            Alle Projekte ansehen →
          </Link>
        </div>
      </section>

      {/* === BEITRÄGE: Teaser (3), etwas heller abgesetzt === */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <h3 className="text-3xl font-semibold text-white mb-8 text-center">Neueste Beiträge</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((a) => (
            <Card
              key={a.id || a.title}
              title={a.title}
              description={a.description || a.excerpt}
              href={a.href || "/beitraege"}
              className="bg-navy-800/60 border border-navy-700/60 hover:border-gold-400/40 hover:shadow-[0_0_15px_rgba(209,169,84,0.10)] rounded-lg transition-all duration-300"
            />
          ))}
          {latestArticles.length === 0 && (
            <div className="col-span-full text-center text-gray-400">
              (Noch keine Beiträge hinterlegt)
            </div>
          )}
        </div>
        <div className="text-center mt-8">
          <Link to="/beitraege" className="text-gold-400 hover:underline hover:text-gold-300">
            Mehr Beiträge lesen →
          </Link>
        </div>
      </section>
    </main>
  );
}
