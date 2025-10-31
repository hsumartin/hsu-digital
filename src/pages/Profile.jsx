import React from "react";
import { motion } from "framer-motion";

// Reusable Fade-In-Variant
const fadeIn = (delay = 0, distance = 30) => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] },
  },
});

export default function Profil() {
  return (
    <main className="min-h-screen bg-navy-900 text-gray-200 px-6 md:px-20 py-24 overflow-x-hidden">
      {/* === HERO / HEADER === */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-24">
        {/* Profilbild */}
        <motion.div
          className="relative w-64 md:w-80 flex-shrink-0"
          variants={fadeIn(0.1, 40)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/martin-hsu-profile.png"
            alt="Martin Hsu Profil"
            className="rounded-lg border border-gold-400/30 shadow-[0_0_40px_rgba(209,169,84,0.08)] opacity-95"
          />
          <div className="absolute inset-0 rounded-lg border border-gold-400/30 opacity-40 blur-[2px]" />
        </motion.div>

        {/* Textbereich */}
        <motion.div
          className="max-w-xl text-left"
          variants={fadeIn(0.2, 20)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Martin Hsu
          </h1>
          <h2 className="text-2xl font-semibold text-gold-400 mb-6">
            Product Owner · BIM Manager · Digital Architect
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Ich gestalte digitale Systeme, in denen Struktur, Daten und
            Intelligenz harmonisch zusammenwirken.  
            Mein Schwerpunkt liegt auf der Schnittstelle zwischen Architektur,
            Prozessautomatisierung und KI-gestütztem Wissenstransfer.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Meine Arbeitsweise ist analytisch, kreativ und systemisch.  
            Ich kombiniere technisches Denken mit gestalterischer Klarheit –
            um Komplexität in Struktur, Prozesse in Bewegung und Daten in
            Bedeutung zu überführen.
          </p>
        </motion.div>
      </section>

      {/* === PHILOSOPHIE === */}
      <motion.section
        className="max-w-4xl mx-auto mb-24 text-center"
        variants={fadeIn(0.1, 20)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-3xl text-gold-400 font-semibold mb-6">
          Digital Intelligence Collaboration
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Ich verstehe Digitalisierung als kollaborativen Prozess zwischen
          Mensch, System und künstlicher Intelligenz.  
          Technologie ist für mich kein Werkzeug, sondern ein Partner in der
          Erkenntnis und Gestaltung.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Mein Ansatz integriert konzeptuelles Denken, KI-basierte Analyse und
          menschliche Intuition – mit dem Ziel, nachhaltige Strukturen und
          zukunftsfähige Prozesse zu entwickeln.
        </p>
      </motion.section>

      {/* === KOMPETENZEN === */}
      <motion.section
        className="max-w-5xl mx-auto mb-24"
        variants={fadeIn(0.1, 30)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-2xl text-gold-400 font-semibold mb-10 text-center">
          Kompetenzfelder
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Process Design",
              text: "Analyse und Neustrukturierung digitaler Arbeitsprozesse auf Basis von Systemlogik und Datenströmen."
            },
            {
              title: "BIM Management",
              text: "Strategische Steuerung von Building Information Modeling in Planung, Bau und Betrieb."
            },
            {
              title: "AI-assisted Workflow Optimization",
              text: "Integration intelligenter Modelle in Arbeitsprozesse zur Steigerung von Effizienz und Präzision."
            },
            {
              title: "Data-Driven Architecture",
              text: "Verknüpfung von Bauwerksinformationen, Simulation und Entscheidungsmodellen in Echtzeit."
            },
            {
              title: "Product Ownership",
              text: "Verantwortung für Produktvision, Strategie und cross-funktionale Umsetzung in interdisziplinären Teams."
            },
            {
              title: "Knowledge Systems",
              text: "Aufbau semantischer Strukturen und Ontologien zur Wissensvernetzung und Entscheidungsunterstützung."
            },
          ].map(({ title, text }, i) => (
            <motion.div
              key={title}
              variants={fadeIn(0.1 + i * 0.05, 25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-navy-800/60 border border-navy-700/60 rounded-lg p-6 hover:border-gold-400/40 hover:shadow-[0_0_25px_rgba(209,169,84,0.12)] transition-all duration-500"
            >
              <h4 className="text-gold-400 font-semibold mb-3">{title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === SCHLUSSSTATEMENT === */}
      <motion.section
        className="max-w-3xl mx-auto text-center"
        variants={fadeIn(0.1, 10)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-gray-400 italic leading-relaxed">
          „Die Zukunft ist kein Zufall, sondern das Ergebnis bewusster
          Verknüpfung von Intelligenz, Struktur und Gestaltung.“
        </p>
        <p className="mt-6 text-gold-400 font-medium">— Martin Hsu</p>
      </motion.section>
    </main>
  );
}
