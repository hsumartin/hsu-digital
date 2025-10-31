import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-gold-500/30 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-300">
        
        {/* === LINKSBEREICH: KONTAKT === */}
        <div className="space-y-2">
          <h3 className="text-gold-400 font-medium mb-2">Kontakt</h3>
          <a
            href="mailto:kontakt@martinhsu.digital"
            className="text-gold-300 hover:text-gold-200 transition-colors"
          >
            kontakt@martinhsu.digital
          </a>
        </div>

        {/* === MITTELBEREICH: NAVIGATION === */}
        <div className="space-y-2">
          <h3 className="text-gold-400 font-medium mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-gold-300 transition-colors">Startseite</Link></li>
            <li><Link to="/projekte" className="hover:text-gold-300 transition-colors">Projekte</Link></li>
            <li><Link to="/beitraege" className="hover:text-gold-300 transition-colors">Beiträge</Link></li>
            <li><Link to="/profil" className="hover:text-gold-300 transition-colors">Profil</Link></li>
            <li><Link to="/kontakt" className="hover:text-gold-300 transition-colors">Kontakt</Link></li>
            <li><Link to="/impressum" className="hover:text-gold-300 transition-colors">Impressum & Datenschutz</Link></li>
          </ul>
        </div>

        {/* === RECHTSBEREICH: ICONS & SIGNATUR === */}
        <div className="flex flex-col items-center md:items-end justify-between space-y-4">
          
          {/* Icons mit goldenem Glow */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/hsumartin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src="/icons/github-mark.svg"
                alt="GitHub"
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(209,169,84,0.8)]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/martinhsu-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src="/icons/LI-In-Bug.png"
                alt="LinkedIn"
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(209,169,84,0.8)]"
              />
            </a>
          </div>

          {/* Goldene Linie */}
          <div className="border-t border-gold-500/30 w-full my-4" />

          {/* Signatur */}
          <div className="text-center md:text-right">
            <p>
              <span className="text-white">© 2025 Martin Hsu — </span>
              <span className="text-gold-400 font-medium">
                Digital Intelligence Collaboration
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Entwickelt mit React · Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
