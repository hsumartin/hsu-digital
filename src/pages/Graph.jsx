import React from "react";
import { Link } from "react-router-dom";

// Erste „Knoten“ – deine Themen
const nodes = [
  {
    id: "ai-2027",
    title: "AI 2027",
    description:
      "Zukunft der strategischen Intelligenz – Verbindung von Führung, KI und Entscheidungsstrukturen.",
    related: ["Cognitive Design", "Process Thinking"],
  },
  {
    id: "cognitive-design",
    title: "Cognitive Design",
    description:
      "Gestaltung intelligenter Systeme, die Kontext verstehen und selbst strukturieren.",
    related: ["AI 2027", "Knowledge Graph"],
  },
  {
    id: "knowledge-graph",
    title: "Knowledge Graph",
    description:
      "Strukturierte Wissensnetzwerke, die Denken, Daten und Erfahrung verbinden.",
    related: ["Cognitive Design", "Process Thinking"],
  },
  {
    id: "process-thinking",
    title: "Process Thinking",
    description:
      "Systemisches Prozessverständnis als Fundament für jede digitale Transformation.",
    related: ["AI 2027", "Knowledge Graph"],
  },
  {
    id: "digital-transformation",
    title: "Digitale Transformation",
    description:
      "Verbindung von Technologie, Struktur und Kultur – evolutionär statt disruptiv.",
    related: ["Process Thinking", "AI 2027"],
  },
];

export default function Graph() {
  return (
    <main className="bg-navy-900 text-neutral-50 min-h-screen px-8 md:px-20 py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gold-500 mb-4">
          Knowledge Graph
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-200">
          Eine semantische Karte meiner Themenfelder, Konzepte und Querverbindungen.
          Jeder Knoten steht für eine Idee – verbunden durch Logik, Erfahrung
          und digitale Intelligenz.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="bg-navy-800 border border-navy-700 rounded-xl p-6 hover:-translate-y-1 hover:shadow-gold transition-all duration-300"
          >
            <h3 className="text-xl text-gold-400 font-medium mb-2">
              {node.title}
            </h3>
            <p className="text-sm text-neutral-200 mb-4 leading-relaxed">
              {node.description}
            </p>

            {node.related && node.related.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {node.related.map((rel) => (
                  <Link
                    key={rel}
                    to="#"
                    className="text-xs border border-gold-500/30 text-gold-400 px-2 py-1 rounded-md hover:bg-gold-500 hover:text-navy-900 transition-all"
                  >
                    {rel}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className="text-center mt-20">
        <Link
          to="/"
          className="border border-gold-500 text-neutral-50 px-6 py-3 rounded-md transition-all duration-300 hover:bg-gold-500 hover:text-navy-900"
        >
          Zurück zur Startseite
        </Link>
      </footer>
    </main>
  );
}
