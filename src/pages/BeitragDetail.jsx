import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../Layout.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { motion } from "framer-motion";

const artikelDaten = {
  "ki-governance": {
    titel: "KI im öffentlichen Sektor – Verantwortung statt Hype",
    datum: "2025",
    inhalt: `
      Künstliche Intelligenz kann in der Verwaltung enorme Effizienzgewinne bringen –
      vorausgesetzt, sie wird verantwortungsvoll eingesetzt.  

      Entscheidend ist nicht die Technologie, sondern die **Governance-Struktur** dahinter.  
      Nur wenn Fachwissen, Datenqualität und Ethik Hand in Hand gehen, entsteht Vertrauen.  

      👉 In meinem Whitepaper analysiere ich, wie Städte den Spagat zwischen Innovation
      und Verantwortung meistern können.  
      [Whitepaper lesen](#)
    `,
    whitepaper: "#",
    linkedin:
      "https://www.linkedin.com/in/martinhsu-digital",
  },
  "bim-und-verwaltung": {
    titel: "BIM und Datenqualität im Baubewilligungsverfahren",
    datum: "2024",
    inhalt: `
      Building Information Modeling (BIM) wird oft als rein technisches Thema gesehen.  
      Doch für die Verwaltung bedeutet es vor allem **Prozessklarheit** und **Nachvollziehbarkeit**.  

      Dieser Beitrag zeigt, wie modellbasierte Datenprüfungen und klare Schnittstellen
      den Genehmigungsprozess beschleunigen – ohne die rechtliche Sorgfalt zu verlieren.
    `,
    whitepaper: "#",
    linkedin:
      "https://www.linkedin.com/in/martinhsu-digital",
  },
};

export default function BeitragDetail() {
  const { slug } = useParams();
  const artikel = artikelDaten[slug];

  if (!artikel) {
    return (
      <Layout>
        <Breadcrumbs />
        <p className="text-gray-600 mt-8">Beitrag nicht gefunden.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumbs />

      <motion.section
        id="beitrag-detail"
        className="space-y-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Titel + Datum */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-primary">
            {artikel.titel}
          </h1>
          <span className="text-sm text-gray-500">{artikel.datum}</span>
        </div>

        {/* Inhalt */}
        <article
          className="prose prose-neutral max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: artikel.inhalt.replace(/\n/g, "<br/>") }}
        />

        {/* Goldener Trenner */}
        <div className="w-24 h-1 bg-accent/80 rounded-full my-10 mx-auto"></div>

        {/* Call-to-Action Bereich */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* LinkedIn Button */}
          <a
            href={artikel.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md text-sm font-medium text-primary bg-accent hover:bg-accent/90 transition-colors"
          >
            💬 Auf LinkedIn diskutieren
          </a>

          {/* Whitepaper / PDF Button */}
          {artikel.whitepaper && artikel.whitepaper !== "#" && (
            <a
              href={artikel.whitepaper}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md text-sm font-medium border border-accent text-accent hover:bg-accent hover:text-primary transition-colors"
            >
              📄 Whitepaper herunterladen
            </a>
          )}
        </div>

        {/* Zurück-Link */}
        <div className="pt-10 text-center">
          <Link
            to="/beitraege"
            className="text-sm text-accent hover:text-primary transition-colors"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </motion.section>
    </Layout>
  );
}
