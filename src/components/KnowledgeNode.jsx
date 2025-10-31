import React from "react";
import { Link } from "react-router-dom";

/**
 * KnowledgeNode
 * @param {string} term - der angezeigte Begriff
 * @param {string} link - optionale URL für die semantische Verknüpfung
 * @param {string} variant - Stil: "inline" oder "block"
 */
export default function KnowledgeNode({ term, link, variant = "inline" }) {
  const base =
    "relative cursor-pointer transition-all duration-300 text-gold-400 hover:text-gold-300";

  const underline =
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gold-400 after:opacity-30 after:transition-opacity after:duration-300 hover:after:opacity-70";

  const pulse =
    "hover:shadow-[0_0_12px_rgba(209,169,84,0.4)] hover:scale-[1.02]";

  const classes = `${base} ${underline} ${pulse}`;

  if (link) {
    return (
      <Link to={link} className={classes} title={`Zum Begriff ${term}`}>
        {term}
      </Link>
    );
  }

  return (
    <span className={classes} title={`Begriff: ${term}`}>
      {term}
    </span>
  );
}
