import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getNodeBySlug, relatedNodes } from "../data/graph";

const GraphDetail = () => {
  const { slug } = useParams();
  const node = getNodeBySlug(slug);
  const related = relatedNodes(slug);

  if (!node) {
    return (
      <div className="text-center text-neutralLight/60 py-24">
        <p>Knoten nicht gefunden.</p>
      </div>
    );
  }

  return (
    <section className="relative max-w-5xl mx-auto px-6 md:px-12 py-24">
      {/* Hintergrundlinie */}
      <div className="absolute top-0 left-[10%] w-[80%] h-[1px] 
                      bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      {/* Titelbereich */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gold-300 mb-2">
          {node.title}
        </h1>
        <p className="text-neutralLight/70 text-lg italic mb-4">
          {node.subtitle}
        </p>
        <div className="text-sm text-neutralLight/60">
          {node.category} · {node.date}
        </div>
      </motion.div>

      {/* Bild oder Visualisierung */}
      <div className="relative mb-12 rounded-xl overflow-hidden border border-gold-400/10 shadow-[0_0_25px_-8px_rgba(209,169,84,0.15)]">
        <img
          src={node.image || "/images/bg-graph-default.webp"}
          alt={node.title}
          className="w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1118]/90 via-transparent to-transparent" />
      </div>

      {/* Hauptinhalt */}
      <div className="text-neutralLight/80 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
        <p className="mb-6">{node.teaser}</p>
        <p className="text-neutralLight/60 text-sm">
          Dieser Knoten verbindet sich mit {related.length} weiteren Konzepten im System.
        </p>
      </div>

      {/* Verknüpfte Knoten */}
      {related.length > 0 && (
        <div className="mt-12">
          <h3 className="text-gold-400 text-xl font-semibold text-center mb-6">
            Verknüpfte Konzepte
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/graph/${r.slug}`}
                className="group block border border-gold-400/10 rounded-lg p-5 
                           bg-[#141722]/50 hover:bg-[#1a1d29]/70 
                           transition-all duration-300 hover:border-gold-400/20"
              >
                <h4 className="text-[#F7F1E1]/90 font-medium group-hover:text-gold-300 mb-1">
                  {r.title}
                </h4>
                <p className="text-neutralLight/60 text-sm line-clamp-2">
                  {r.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back-Link */}
      <div className="text-center mt-16">
        <Link
          to="/graph"
          className="inline-block text-gold-400/90 hover:text-gold-300 transition-all"
        >
          ← Zur Übersicht
        </Link>
      </div>
    </section>
  );
};

export default GraphDetail;
