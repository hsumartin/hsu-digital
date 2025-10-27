import React, { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [activeSection, setActiveSection] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) current = section.id;
      });
      setActiveSection(current);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col justify-between sticky top-24 h-[80vh] text-sm text-gray-600">
        <nav className="flex flex-col gap-3">
          <a href="/" className="hover:text-accent pl-2">Startseite</a>
          <a href="/projekte" className="hover:text-accent pl-2">Projekte</a>
          <a href="/beitraege" className="hover:text-accent pl-2">Beiträge</a>
          <a href="#kontakt" className="hover:text-accent pl-2">Kontakt</a>
        </nav>

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