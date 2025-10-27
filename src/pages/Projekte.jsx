import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../Layout.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Card, CardContent } from "../components/ui/card.jsx";

export default function Projekte() {
  const tabs = ["Digitalisierung", "KI / GPT", "GIS / BIM"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const projekte = {
    Digitalisierung: [
      {
        titel: "Dokumenten-Automation (DCP)",
        beschreibung:
          "Erstellung dynamischer Word-Vorlagen mit DocumentsCorePack zur Standardisierung von Fachprozessen und Verbesserung der Nutzerführung.",
      },
    ],
    "KI / GPT": [
      {
        titel: "KI-Atlas Stadt Zürich",
        beschreibung:
          "Konzeption eines Lernsystems für den verantwortungsvollen KI-Einsatz in der Verwaltung – Fokus auf Prompterstellung und Governance.",
      },
      {
        titel: "Prompt-Pilot Stack",
        beschreibung:
          "Aufbau eines mehrschichtigen GPT-Frameworks für Strukturierung, Audit und Governance von Prompts und KI-Modulen.",
      },
    ],
    "GIS / BIM": [
      {
        titel: "Geodaten-Suchmaske (QGIS)",
        beschreibung:
          "Aufbau einer geoverknüpften Suchmaske zur Ansprechpartner-Suche nach Gebietszuständigkeit – Integration QGIS und SQL.",
      },
    ],
  };

  return (
    <Layout>
      <Breadcrumbs />

      <section id="projekte" className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-primary">Projekte</h2>
          <span className="text-sm text-gray-500">Auswahl</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-accent text-primary"
                  : "text-gray-500 hover:text-accent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animierte Projektkarten */}
        <div className="mt-4 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projekte[activeTab].map((p) => (
                <Card key={p.titel}>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-primary">
                      {p.titel}
                    </h3>
                    <p className="mt-2 text-gray-700">{p.beschreibung}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
}
