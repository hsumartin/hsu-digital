import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ title, excerpt, href, className = "" }) {
  return (
    <div
      className={`relative group bg-navy-800/60 border border-navy-700/60 hover:border-gold-400/40 
                  hover:shadow-[0_0_20px_rgba(209,169,84,0.08)] rounded-lg 
                  transition-all duration-500 ease-out overflow-hidden ${className}`}
    >
      {/* Hover-Schimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/10 to-navy-900/30 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

      {/* Inhalt */}
      <div className="relative p-6 md:p-8">
        <h3 className="text-gold-400 text-lg font-semibold mb-3 group-hover:text-gold-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-5">{excerpt}</p>

        {href && (
          <Link
            to={href}
            className="inline-block text-gold-400 text-sm font-medium tracking-wide border border-gold-500/30 
                       rounded-lg px-4 py-2 transition-all duration-300 
                       hover:bg-gold-500 hover:text-navy-900 hover:shadow-[0_0_12px_rgba(209,169,84,0.25)]"
          >
            Weiterlesen
          </Link>
        )}
      </div>
    </div>
  );
}
