import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GraphCard = ({ node }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative rounded-xl overflow-hidden border border-gold-400/15 
           bg-[#141722]/55 backdrop-blur-sm 
           shadow-gold-soft hover:shadow-gold-xl
           hover:border-gold-400/25
           p-6 flex flex-col justify-between transition-all duration-500"
    >
      {/* === Hintergrund-Pattern (sichtbar gemacht) === */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FBE7B0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D1A954" stopOpacity="0.15" />
            </linearGradient>
            <style>{`
              @keyframes nodePulse {
                0%, 100% { r: 2.5; opacity: 0.8; }
                50% { r: 3.5; opacity: 1; }
              }
            `}</style>
          </defs>

          <path
            d="M30 80 L100 20 L170 80 L100 140 Z"
            stroke="url(#goldGradient)"
            strokeWidth="0.8"
            fill="none"
          />
          <circle
            cx="100"
            cy="80"
            r="2.5"
            fill="#d1a954"
            style={{ animation: "nodePulse 6s ease-in-out infinite" }}
          />
        </svg>
      </div>

      {/* === Inhalt === */}
      <div className="relative z-10 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-[#F7F1E1]/90 mb-2">
          {node.title}
        </h3>
        <p className="text-neutralLight/70 text-sm mb-4 line-clamp-3">
          {node.subtitle || "Verknüpfung zwischen Konzepten und Systemen."}
        </p>
        <div className="text-xs uppercase tracking-wider text-gold-400/70">
          {node.category || "Knoten"}
        </div>
      </div>

      {/* === Link-Bereich === */}
      <div className="relative z-10 mt-6 text-center">
        <Link
          to={`/graph/${node.slug}`}
          className="inline-block text-gold-400/90 font-medium text-sm hover:text-gold-300 transition-all"
        >
          Verbindung ansehen →
        </Link>
      </div>
    </motion.div>
  );
};

export default GraphCard;
