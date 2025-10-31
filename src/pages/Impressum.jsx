import React from "react";
import { motion } from "framer-motion";

export default function Impressum() {
  return (
    <section className="min-h-screen bg-navy-900 text-gray-200 py-20 px-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full text-center"
      >
        {/* Titel */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gold-400 mb-6">
          Impressum & Datenschutz
        </h1>

        {/* Goldene Linie */}
        <div className="border-t border-gold-500/30 w-24 mx-auto mb-10"></div>

        {/* Textblock */}
        <div className="text-left space-y-4 leading-relaxed text-gray-300">
          <p>
            <strong className="text-gold-300">Verantwortlich für den Inhalt:</strong>
            <br />
            Martin Hsu  
            <br />
            Dörflistrasse 111  
            <br />
            8050 Zürich, Schweiz
          </p>

          <p>
            <strong className="text-gold-300">E-Mail:</strong>{" "}
            <a
              href="mailto:kontakt@martinhsu.digital"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              kontakt@martinhsu.digital
            </a>
          </p>

          <div className="border-t border-gold-500/20 my-6"></div>

          <p>
            Diese Website dient der beruflichen Präsentation von Martin Hsu.  
            Sie wurde inhaltlich, konzeptionell und gestalterisch unter Mitwirkung von
            <span className="text-gold-400"> Digital-Intelligence-Systemen </span>
            entwickelt.  
          </p>

          <p>
            Der Einsatz von KI-gestützten Werkzeugen erfolgte kooperativ –  
            zur Unterstützung bei Strukturierung, Textgestaltung und visuellen Konzepten.  
            Alle finalen Inhalte wurden persönlich geprüft und autorisiert.
          </p>

          <p>
            Diese Website verwendet keine Tracking-Cookies und erhebt keine personenbezogenen Daten.  
            Bei Kontaktaufnahme per E-Mail werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
          </p>

          <p>
            <strong className="text-gold-300">Letzte Aktualisierung:</strong> Oktober 2025
          </p>
        </div>

        {/* Untere Linie */}
        <div className="border-t border-gold-500/30 w-24 mx-auto mt-12"></div>

        {/* Abschluss */}
        <p className="text-xs text-gray-500 mt-6">
          © 2025 Martin Hsu —{" "}
          <span className="text-gold-400">Digital Intelligence Collaboration</span>
        </p>
      </motion.div>
    </section>
  );
}
