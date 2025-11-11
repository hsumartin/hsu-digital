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
        {/* === TITEL === */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gold-400 mb-6">
          Impressum & Datenschutz
        </h1>

        <div className="border-t border-gold-500/30 w-24 mx-auto mb-10"></div>

        {/* === IMPRESSUM === */}
        <div className="text-left space-y-4 leading-relaxed text-gray-300">
          <h2 className="text-2xl font-semibold text-gold-300 mb-2">Impressum</h2>
          <p>
            <strong className="text-gold-300">Verantwortlich für den Inhalt:</strong><br />
            Martin Hsu<br />
            Dörflistrasse 111<br />
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
        </div>

        <div className="border-t border-gold-500/20 my-10 w-32 mx-auto"></div>

        {/* === DATENSCHUTZ === */}
        <div className="text-left space-y-4 leading-relaxed text-gray-300">
          <h2 className="text-2xl font-semibold text-gold-300 mb-2">Datenschutzerklärung</h2>

          <p>
            Diese Website verwendet keine Tracking-Cookies und erhebt keine personenbezogenen Daten.  
            Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.  
            Eine Weitergabe an Dritte erfolgt nicht.
          </p>

          <p>
            Ich nutze keine Analyse- oder Marketingdienste von Drittanbietern.  
            Eingebettete Medien (z. B. Videos oder Bilder) werden nur datenschutzfreundlich eingebunden.
          </p>

          <p>
            <strong className="text-gold-300">Letzte Aktualisierung:</strong> Oktober 2025
          </p>
        </div>

        <div className="border-t border-gold-500/20 my-10 w-32 mx-auto"></div>

        {/* === TRADEMARKS & URHEBERRECHT === */}
        <div className="text-left space-y-6 leading-relaxed text-gray-300">
          {/* Trademarks */}
          <div>
            <h2 className="text-2xl font-semibold text-gold-300 mb-2">Trademarks</h2>
            <p>
              „<strong className="text-gold-400">USE+ Framework™</strong>“ ist eine Marke von Martin Hsu.  
              Die Nutzung des Namens und/oder Logos ist ohne vorherige schriftliche Zustimmung nicht gestattet.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="text-2xl font-semibold text-gold-300 mb-2">Urheberrecht</h2>
            <p>
              Texte, Diagramme und Visuals dieser Website und begleitender Whitepapers sind urheberrechtlich geschützt  
              (<strong className="text-gold-400">© 2025 Martin Hsu</strong>).  
              Zitate sind mit Quellenangabe zulässig; Reproduktionen oder Abwandlungen benötigen eine gültige Lizenz.
            </p>
          </div>
        </div>

        <div className="border-t border-gold-500/30 w-24 mx-auto mt-12"></div>

        {/* === ABSCHLUSS === */}
        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          © 2025 Martin Hsu —{" "}
          <span className="text-gold-400">Digital Intelligence Collaboration</span><br />
          <span className="text-gray-500">
            USE+ Framework™ ist eine Marke von Martin Hsu.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
