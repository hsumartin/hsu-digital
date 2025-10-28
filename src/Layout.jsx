import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { path: "/", label: "Start" },
    { path: "/projekte", label: "Projekte" },
    { path: "/beitraege", label: "Beiträge" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col justify-between sticky top-24 h-[80vh] text-sm text-gray-600">
        <nav className="flex flex-col gap-3">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`group relative pl-2 border-l-2 transition-all duration-300 ${
                location.pathname.startsWith(path)
                  ? "text-primary font-semibold border-accent"
                  : "text-gray-600 hover:text-accent border-transparent"
              }`}
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-accent/40 transition-all duration-300 group-hover:w-full rounded-r-md -z-10"></span>
              <span className="relative z-10">{label}</span>
            </Link>
          ))}

          {/* Kontakt bleibt interner Anker */}
          <a
            href="#kontakt"
            className="group relative pl-2 border-l-2 border-transparent hover:text-accent transition-colors"
          >
            Kontakt
          </a>
        </nav>

        {/* Zurück nach oben */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="text-xs mt-6 text-gray-500 hover:text-accent transition-colors"
          >
            ↑ Zurück nach oben
          </button>
        )}
      </aside>

      {/* Hauptinhalt */}
      <main className="space-y-16">{children}</main>
    </div>
  );
}
