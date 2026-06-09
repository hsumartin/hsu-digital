# martinhsu.digital

Portfolio von Martin Hsu — Informationsarchitektur, Product Ownership, GIS, Verwaltungsdigitalisierung und verantwortungsvoller KI-Einsatz.

Website: [https://martinhsu.digital](https://martinhsu.digital)  
Kontakt: [kontakt@martinhsu.digital](mailto:kontakt@martinhsu.digital)
LinkedIn: [https://www.linkedin.com/in/martinhsu-digital](https://www.linkedin.com/in/martinhsu-digital)

---

## Technologie

- **Next.js 15** (App Router, Static Export)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- Deployment über [Vercel](https://vercel.com)

Die gesamte Website wird als statisches HTML exportiert (`output: 'export'`). Es gibt keinen laufenden Node-Server im Produktivbetrieb.

---

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:3000)
npm run dev

# Produktions-Build erstellen
npm run build
```

---

## Projektstruktur

```
src/
  app/                          # Next.js App Router — Seiten und Layout
    layout.tsx                  # Root Layout (Fonts, Nav, Footer)
    page.tsx                    # Startseite
    projekte/
      page.tsx                  # Projektübersicht
      [slug]/page.tsx           # Projektdetailseite
    schriften/
      page.tsx                  # Schriftenübersicht
      [slug]/page.tsx           # Schriftendetailseite
    verbindungen/page.tsx       # Interaktiver Knowledge Graph
    ueber-mich/page.tsx         # Profil und Vita
    impressum/page.tsx
    datenschutz/page.tsx
    en/whitepaper/
      architecture-of-thinking/ # Englischsprachiges Whitepaper
    robots.ts
    sitemap.ts

  components/
    nav/                        # Navigation (SiteNav, NavMark)
    layout/                     # PageShell, SiteFooter
    ui/                         # Basiskomponenten (SectionLabel, Chip)
    home/                       # Sektionen der Startseite
    projects/                   # Projekt-Index und Detailkomponenten
    writings/                   # Schriften-Index und Detailkomponenten
    graph/                      # Knowledge Graph (Canvas-basiert)
    ueber-mich/                 # Profilseite-Komponenten
    legal/                      # Impressum, Datenschutz
    common/                     # BackToTopButton

  data/
    projects.ts                 # Projektdaten
    writings.ts                 # Schriftendaten
    graph.ts                    # Graph-Knoten und Kanten

public/
  assets/
    projects/                   # Projektbilder und -grafiken
    writings/                   # Abbildungen zu Schriften
    icons/
  uploads/                      # Porträt und Bannerbild
```

---

## Routen

| Pfad | Inhalt |
|---|---|
| `/` | Startseite mit Überblick, Knowledge Graph, Projekten, Schriften, Kontakt |
| `/projekte` | Projektübersicht |
| `/projekte/[slug]` | Projektdetailseite |
| `/schriften` | Schriftenübersicht |
| `/schriften/[slug]` | Schriftendetailseite |
| `/verbindungen` | Interaktiver Knowledge Graph (Canvas) |
| `/ueber-mich` | Profil, Kompetenzen, Timeline |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutzerklärung |
| `/en/whitepaper/architecture-of-thinking` | Englischsprachiges Whitepaper |

---

## Designprinzipien

> „Form folgt Rhythmus – und Rhythmus ist sichtbares Denken.“

Das Designsystem verbindet typografische Ruhe, diagrammatische Struktur und reduzierte Interaktion zu einer klaren digitalen Wissens- und Portfolioarchitektur.

---

## Hinweis: Legacy-Stand

Der frühere Vite-/React-Stand der Website ist im Branch `legacy-vite-main` gesichert und wird nicht weiterentwickelt.

---

## Legal

### Copyright

Texte, Visuals, Diagramme und Systembeschreibungen dieser Website unterliegen dem Urheberrecht. Verwendung, Reproduktion oder Abwandlung nur mit Quellenangabe oder nach vorheriger Zustimmung.

### Marken und Begriffe

Das „USE+ Framework™“ sowie weitere eigene Frameworks, Begriffe und Systemmodelle, sofern auf dieser Website genannt, sind Bestandteil der fachlichen Arbeit von Martin Hsu. Eine Nutzung als eigene Marke oder Produktbezeichnung ist ohne Zustimmung nicht vorgesehen.

### Datenschutz

Diese Website ist als statische Portfolio-Website konzipiert. Sie verwendet keine bewusst eingebundenen Tracker, keine Analyse-Cookies und keine Kontaktformulare.

