import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";

const projekte = [
  {
    titel: "KI-Atlas Stadt Zürich",
    beschreibung:
      "Konzeption eines Lernsystems für den sicheren, pragmatischen KI-Einsatz in der Verwaltung. Fokus: Prompterstellung, Governance, Pilotierung für ZüriA.",
  },
  {
    titel: "Geodaten-Suchmaske (QGIS)",
    beschreibung:
      "Aufbau einer geoverknüpften Suchmaske zur Ansprechpartner-Suche nach Gebietszuständigkeit. Umsetzung mit QGIS, SQL und Excel-Integration.",
  },
];

export default function DigitaleProfilseite() {
  const [activeSection, setActiveSection] = useState("");
  const [showTop, setShowTop] = useState(false);

  // Scrollspy Logik
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background text-text">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-[#0e223c] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col sm:flex-row sm:items-center sm:space-x-8">
          {/* Profilfoto */}
          <img
            src="/profile.jpg"
            alt="Profilfoto von Martin Hsu"
            className="w-36 h-36 rounded-full object-cover photo-gold-animate mb-6 sm:mb-0"
          />

          {/* Textbereich */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-heading font-semibold tracking-tight text-appear">
              Martin Hsu
            </h1>
            <div className="mt-2 h-1 w-24 bg-accent/90 rounded-full glow-gold"></div>
            <p className="mt-6 text-lg max-w-3xl opacity-95 font-sans text-appear-delayed">
              Product Owner & Systemgestalter für digitale Verwaltungsprozesse,
              KI-Integration und datenbasierte Innovation.
            </p>
            <p className="mt-2 max-w-3xl text-white/80">
              Ich verbinde Fachlichkeit, Technologie und Strategie.<br />
              Mein Fokus: Klarheit, Effizienz und verantwortungsbewusste
              Digitalisierung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-accent text-primary hover:shadow-glow-gold">
                Kontakt aufnehmen
              </Button>
              <a
                href="#projekte"
                className="px-4 py-2 rounded-md border border-white/20 hover:border-accent/70 transition"
              >
                Projekte ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Layout mit Sidebar und Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col justify-between sticky top-24 h-[80vh] text-sm text-gray-600">
          <nav className="flex flex-col gap-3">
            {[
              { id: "ueber-mich", label: "Über mich" },
              { id: "projekte", label: "Projekte" },
              { id: "laufende-entwicklungen", label: "Laufende Entwicklungen" },
              { id: "unterlagen", label: "Unterlagen" },
              { id: "kontakt", label: "Kontakt" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors ${
                  activeSection === link.id
                    ? "text-primary font-semibold border-l-2 border-accent pl-2"
                    : "text-gray-600 hover:text-accent pl-2 border-l-2 border-transparent"
                }`}
              >
                {link.label}
              </a>
            ))}
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
        <main className="space-y-16">
          {/* Über mich */}
          <section id="ueber-mich" className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Über mich</h2>
            <Card>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  In meiner Arbeit entwickle und begleite ich digitale Lösungen
                  für die öffentliche Verwaltung mit dem Ziel, Datenqualität,
                  Benutzerfreundlichkeit und nachhaltige Wirkung zu verbinden.
                  Dabei bringe ich meine Erfahrung in der Analyse, Optimierung
                  und Dokumentation von Verwaltungsprozessen ein, mit Fokus auf
                  Struktur, Verständlichkeit und fachliche Zusammenarbeit.
                </p>

                <p>
                  Aktuell wirke ich bei der Stadt Zürich (UGZ) im Bereich
                  Digitalisierung BBV, wo ich Projekte zur
                  Prozessoptimierung und Standardisierung unterstütze. Dort
                  gestalte ich Schnittstellen zwischen Fachbereichen, IT und
                  GIS-Koordination, um digitale Abläufe effizienter und
                  transparenter zu machen.
                </p>

                <p>
                  Mich motiviert die Frage, wie Digitalisierung im öffentlichen
                  Raum gelingen kann, konkret, verantwortungsvoll und im Dialog
                  mit den Menschen, die sie nutzen.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Projekte */}
          <section id="projekte" className="space-y-6">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold text-primary">Projekte</h2>
              <span className="text-sm text-gray-500">Auswahl</span>
            </div>
            {projekte.map((p) => (
              <Card key={p.titel}>
                <CardContent>
                  <h3 className="text-xl font-semibold text-primary">
                    {p.titel}
                  </h3>
                  <p className="mt-2 text-gray-700">{p.beschreibung}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Laufende Entwicklungen */}
          <section id="laufende-entwicklungen" className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              Laufende Entwicklungen
            </h2>
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold text-primary">
                  G Mass Stack (GPT-Systemarchitektur)
                </h3>
                <p className="mt-2 text-gray-700">
                  Aufbau eines modularen Frameworks für die strukturierte Nutzung
                  von KI-Systemen in Verwaltung und Forschung. Fokus auf
                  Methodik, Transparenz und Verantwortung.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Unterlagen */}
          <section id="unterlagen" className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Unterlagen</h2>
            <Card>
              <CardContent className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Aus Gründen des Datenschutzes und geistigen Eigentums werden
                  meine vollständigen Bewerbungsunterlagen (Lebenslauf, Zeugnisse,
                  Zertifikate) vertraulich behandelt und nur auf Anfrage
                  bereitgestellt.
                </p>
                <p className="text-gray-700">
                  Gerne sende ich Ihnen die Unterlagen persönlich zu – am besten
                  über den{" "}
                  <a
                    href="#kontakt"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Kontaktbereich
                  </a>{" "}
                  am Ende der Seite.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Kontakt */}
          <section id="kontakt" className="space-y-6 pb-16">
            <h2 className="text-2xl font-semibold text-primary">Kontakt</h2>
            <Card>
              <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
                <div className="flex-1">
                  <p className="text-gray-700 mt-2 leading-relaxed max-w-md">
                    Offen für Positionen in Digitalisierung, Product Ownership,
                    Data/AI Consulting und Prozessmanagement.
                  </p>

                  <div className="flex items-center gap-6 mt-5">
                    <a
                      href="https://www.linkedin.com/in/martinhsu-digital"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profil von Martin Hsu"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <img
                        src="/icons/LI-In-Bug.png"
                        alt="LinkedIn Icon"
                        className="w-5 h-5"
                      />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://github.com/hsumartin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profil von Martin Hsu"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <img
                        src="/icons/github-mark.svg"
                        alt="GitHub Icon"
                        className="w-5 h-5"
                      />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    asChild
                    className="bg-accent text-primary hover:shadow-glow-gold"
                  >
                    <a
                      href="mailto:kontakt@martinhsu.digital"
                      className="inline-flex items-center gap-2"
                      aria-label="E-Mail an Martin Hsu senden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7 8-5H4l8 5zm0 2-8-5v10h16V8l-8 5z" />
                      </svg>
                      <span>E-Mail senden</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <p className="text-xs text-gray-500 mt-4 text-center">
              © {new Date().getFullYear()} Martin Hsu
            </p>
          </section>
        </main>
      </div>
    </main>
  );
}