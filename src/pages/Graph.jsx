import React from "react";
import { motion } from "framer-motion";
import { nodes } from "../data/graph";
import GraphCard from "../components/GraphCard";
import { Link } from "react-router-dom";

const Graph = () => {
  return (
    <section className="relative py-28 md:py-32 px-6 md:px-10">
      {/* Hintergrund-Linie */}
      <div className="absolute top-0 left-[15%] w-[70%] h-[1px] 
                      bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gold-300 mb-4">
          Knowledge Graph
        </h1>
        <p className="text-neutralLight/70 text-lg max-w-2xl mx-auto">
  Eine semantische Karte meiner Themenfelder, Konzepte und Querverbindungen.  
  Jeder Knoten steht für eine Idee – verbunden durch Logik, Erfahrung und digitale Intelligenz.
</p>
      </motion.div>

      {/* Container */}
      <div className="relative max-w-6xl mx-auto rounded-xl bg-[#141722]/60 
                      border border-gold-400/10 backdrop-blur-sm p-10
                      shadow-[0_0_25px_-8px_rgba(209,169,84,0.15)] 
                      transition-all duration-500 
                      hover:border-gold-400/20 hover:shadow-[0_0_30px_-10px_rgba(209,169,84,0.18)]">

        {/* Linien-Akzent */}
        <div className="absolute top-0 left-[20%] w-[60%] h-[1px] 
                        bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />

        {/* Grid mit allen Knoten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nodes.map((node) => (
            <GraphCard key={node.slug} node={node} />
          ))}
        </div>

        {/* Rück-Link */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block text-gold-400/90 hover:text-gold-300 transition-all"
          >
            ← Zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Graph;
