import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, description, href, className = "" }) {
  return (
    <div
      className={`relative group bg-navy-900/60 border border-navy-700/60 hover:border-gold-400/50 
                  hover:shadow-[0_0_25px_rgba(209,169,84,0.12)] rounded-lg 
                  transition-all duration-500 ease-out overflow-hidden ${className}`}
    >
      {/* Hintergrundlicht / Hover-Schimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/20 to-navy-900/60 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

      {/* Inhalt */}
      <div className="relative p-6 md:p-8 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-gold-400 text-lg font-semibold mb-3 group-hover:text-gold-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Optionaler Button-Link */}
        {href && (
          <Link
            to={href}
            className="mt-6 inline-block text-gold-400 text-sm font-medium tracking-wide border border-gold-500/30 
                       rounded-lg px-4 py-2 transition-all duration-300 
                       hover:bg-gold-500 hover:text-navy-900 hover:shadow-[0_0_12px_rgba(209,169,84,0.25)]"
          >
            Mehr erfahren
          </Link>
        )}
      </div>
    </div>
  );
}
