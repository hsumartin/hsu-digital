import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-gold-400/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-300">
        
        {/* === LINKSBEREICH: KONTAKT === */}
        <div className="space-y-2">
          <h3 className="text-gold-400 font-medium mb-2">Kontakt</h3>
          <a
            href="mailto:kontakt@martinhsu.digital"
            className="text-white gold-glow-hover"
          >
            kontakt@martinhsu.digital
          </a>
        </div>

        {/* === MITTELBEREICH: NAVIGATION === */}
        <div className="space-y-2">
          <h3 className="text-gold-400 font-medium mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="gold-glow-hover">Startseite</Link></li>
            <li><Link to="/projekte" className="gold-glow-hover">Projekte</Link></li>
            <li><Link to="/beitraege" className="gold-glow-hover">Beiträge</Link></li>
            <li><Link to="/profil" className="gold-glow-hover">Profil</Link></li>
            <li><Link to="/kontakt" className="gold-glow-hover">Kontakt</Link></li>
            <li><Link to="/impressum" className="gold-glow-hover">Impressum & Datenschutz</Link></li>
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
              className="transition-transform transform hover:scale-[1.06]"
            >
              <img
                src="/icons/github-mark.svg"
                alt="GitHub"
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-all duration-300 gold-glow-hover"
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
                className="w-5 h-5 opacity-70 hover:opacity-100 transition-all duration-300 gold-glow-hover"
              />
            </a>
          </div>

          {/* 🔸 Feine goldene Linie (optimiert) */}
          <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-gold-400/15 to-transparent opacity-70 my-3" />

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
