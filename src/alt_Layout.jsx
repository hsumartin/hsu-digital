import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children, breadcrumb }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Start" },
    { path: "/projekte", label: "Projekte" },
    { path: "/beitraege", label: "Beiträge" },
    { path: "/profil", label: "Über mich" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface-base text-text-primary font-sans overflow-hidden relative">
  {/* 🌌 Globales Lichtsystem */}
  <div className="absolute inset-0 bg-gradient-space" />
  <div className="absolute inset-0 bg-gradient-gold opacity-60 mix-blend-soft-light" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_15%,rgba(255,255,255,0.04),transparent_80%)] mix-blend-soft-light">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-primary/95 shadow-lg backdrop-blur-sm"
            : "bg-gradient-to-b from-primary/90 to-primary/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
          <Link
            to="/"
            className="font-heading text-lg tracking-tight hover:text-future transition-colors"
          >
            Martin Hsu
          </Link>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                aria-current={location.pathname === path ? "page" : undefined}
                className={`relative transition-all duration-500 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-future after:to-accent after:w-0 hover:after:w-full after:transition-all after:duration-500 ${
                  location.pathname === path
                    ? "text-future after:w-full font-semibold"
                    : "text-gray-200 hover:text-future"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Platzhalter für Header-Höhe */}
      <div className="h-20"></div>

      {/* Breadcrumb */}
      {breadcrumb && (
        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-200 py-3 px-6 text-sm text-gray-600">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            {breadcrumb}
          </div>
        </div>
      )}

      {/* Hauptinhalt */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-transparent text-text-secondary py-10 text-sm text-center overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold-500/20 via-gold-400/40 to-gold-500/20 blur-[1px]" />
  <p className="mb-2 font-sans text-text-primary">© {new Date().getFullYear()} Martin Hsu</p>
  <p className="text-text-muted tracking-wide">
    Digitalisierung · Architektur · KI · Verwaltung
  </p>
      </footer>
    </div>
  );
}
