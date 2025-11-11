import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { getPlaceholder } from "../utils/placeholders";

/**
 * ProjectCard.jsx
 * - Harmonischer Übergang (Motion Bridge) zu ProjectDetail.jsx
 * - Apple-like UX mit sanften Transitions
 * - Verbesserte Lesbarkeit & Weißraumführung
 * - Dynamisches Bildverhalten, Gold-Fokus-Effekt
 */

export default function ProjectCard({
  title,
  description,
  href,
  image,
  type = "project",
  className = "",
  category,
  client,
  date,
}) {
  const location = useLocation();
  const placeholder = getPlaceholder(type);
  const imgSrc = image || placeholder.src;
  const altText = title || placeholder.alt;

  return (
    <motion.article
      layoutId={`project-${href}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.3, 1] }}
      className={`group relative rounded-2xl border border-gold-400/20 
                  bg-navy-900/50 hover:bg-navy-900/80 backdrop-blur-sm
                  shadow-[0_0_24px_-8px_rgba(255,215,0,0.05)]
                  hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.10)]
                  transition-all duration-500 overflow-hidden ${className}`}
    >
      <Link
        to={href}
        state={{ backgroundLocation: location }}
        className="block focus:outline-none focus:ring-2 focus:ring-gold-400/50 rounded-2xl"
      >
        {/* === Cover Image === */}
        <motion.div
          layoutId={`project-${href}-image`}
          className="relative h-56 overflow-hidden"
        >
          <motion.img
            src={imgSrc}
            alt={altText}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 
                       transition-all duration-700 ease-smooth group-hover:scale-[1.03]"
            initial={{ scale: 1.01, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-navy-950/70" />
        </motion.div>

        {/* === Text Section === */}
        <div className="relative p-6 md:p-8">
          <motion.h3
            layoutId={`project-${href}-title`}
            className="text-gold-400 text-xl font-semibold mb-3 group-hover:text-gold-300 transition-colors"
          >
            {title}
          </motion.h3>

          {category && (
            <p className="text-xs uppercase tracking-widest text-gold-500 mb-2">{category}</p>
          )}

          <p className="text-neutral-300 text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          {(client || date) && (
            <div className="flex justify-between items-center text-xs text-neutral-500 mb-4">
              {client && <span>{client}</span>}
              {date && <span>{new Date(date).toLocaleDateString("de-CH")}</span>}
            </div>
          )}

          {/* === CTA === */}
          <motion.span
            whileHover={{ scale: 1.03, x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block text-gold-400 text-sm font-medium tracking-wide border border-gold-500/30 
                       rounded-lg px-4 py-2 transition-all duration-300 cursor-pointer
                       hover:bg-gold-500 hover:text-navy-900 hover:shadow-[0_0_16px_rgba(255,215,0,0.25)]"
          >
            Details ansehen →
          </motion.span>
        </div>
      </Link>
    </motion.article>
  );
}
