import React from "react";
import { useLocation } from "react-router-dom";
import AppLink from "./AppLink.jsx";
import { motion } from "framer-motion";
import { getPlaceholder } from "../utils/placeholders";

export default function ArticleCard({
  title,
  subtitle,    // ✅ neu
  excerpt,
  href,
  image,
  category,
  date,
  author,
  language,
  readingTime,
}) {
  const location = useLocation();
  const placeholder = getPlaceholder("article");
  const imgSrc = image || "/images/bg-articles.png";

  const formattedDate =
    date && !isNaN(Date.parse(date))
      ? new Date(date).toLocaleDateString("de-DE", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "";

  return (
    <AppLink
    to={href}
    className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/50"
  >
    <motion.article
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.35, ease: [0.25, 1, 0.3, 1] }}
 className="relative flex flex-col overflow-hidden rounded-2xl
                border border-neutral-800/40 bg-surface-overlay/80 backdrop-blur-md
                transition-all duration-500 ease-smooth
                hover:shadow-gold-soft
                hover:-translate-y-[2px]
                h-full min-h-[420px]"
    >
      {/* 🖼️ Hero-Zone */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 brightness-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-800/50 to-transparent duration-500 group-hover:opacity-90" />

        {/* Inhalt über Bild */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 py-6 sm:py-7 text-left">
          {/* Meta */}
          <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.06em]
                text-neutral-300/80 font-medium mb-[4px]">
  {language && <span>{String(language).toUpperCase()}</span>}
  {readingTime && <span> • {readingTime}</span>}
  {category && <span> • {category}</span>}
</div>

          {/* Titel */}
          <h3 className="text-[1.05rem] sm:text-[1.15rem] font-semibold text-gold-300 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] mb-[2px]">
            {title || placeholder.title}
          </h3>

          {/* Subtitel */}
          {subtitle && (
            <p className="text-[0.85rem] italic text-neutral-300/90 leading-relaxed mt-[4px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

{/* ✨ Goldene Trennlinie */}
<div className="relative z-[40] h-[1px] mt-[-1px]
             bg-gradient-to-r from-gold-400/0 via-gold-400/25 to-gold-400/0
             shadow-[0_0_6px_rgba(209,169,84,0.06)]" />

      {/* 📘 Body-Zone */}
      <div className="flex flex-col flex-grow justify-between px-6 py-7 bg-surface-overlay/95 min-h-[190px]">
        {/* Excerpt */}
        <div className="flex-1 flex items-start">
          <p className="text-[0.925rem] text-neutral-400/95 leading-[1.6] line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-5 flex justify-between items-center text-xs text-neutral-500 border-t border-neutral-800/60 pt-3">
          <span>{author || placeholder.author}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </motion.article>
  </AppLink>
  );
}
