
# Portfolio & Digital Presence – Martin Hsu

**Rolle / Profil:** Systemgestalter & Strategischer UX Designer  
**Schwerpunkt:** Digitale Architekturen, KI-Integration, kognitive Interfaces  
**Ort:** Zürich · Schweiz  

Website: [https://martinhsu.digital](https://martinhsu.digital)  
Kontakt: [kontakt@martinhsu.digital](mailto:kontakt@martinhsu.digital)

---

## 🚀 Schnellstart

```bash
# Abhängigkeiten installieren
npm install

# Lokale Vorschau (http://localhost:5173)
npm run dev

# Produktion bauen
npm run build
```

Die Startseite befindet sich in `src/pages/DigitaleProfilseite.jsx`.

---

## 🧱 Projektstruktur

```
src/
  pages/DigitaleProfilseite.jsx     # Inhaltliche Startseite
  components/ui/                    # UI-Bausteine (Card, Button)
  styles/glow.css                   # Glow- & Theme-Effekte (Gold, Türkis)
  data/projects.json                # Optionale Projektdaten
tailwind.config.js                  # Farb- & Designsystem
vercel.json                         # Deployment-Konfiguration (Vercel)
```

---

## 🎨 Designsystem – Martin-Hsu-Ratio v1.0
*(Proportion · Typografie · Farbe · Rhythmus)*

### Vertikale Harmonie
Header 170 px · Body 190 px → Gesamthöhe 360 px (≈ 1 : 1.12)

// tailwind.config.js
extend: {
  height: {
    "card-header": "170px",
    "card-body": "190px",
  },
  minHeight: {
    "card-body": "180px",
  },
  spacing: {
    "card-gap": "24px",
    "section-gap": "96px",
  },
}

### Typografische Skala
- **H1:** 2.25 rem / 1.2 · 600  
- **H2:** 1.5 rem / 1.3 · 500  
- **Body:** 1 rem / 1.6 · 400  
- **Meta:** 0.75 rem italic / 1.4  

fontSize: {
  base: ["1rem", "1.6"],
  h1: ["2.25rem", "1.2"],
  h2: ["1.5rem", "1.3"],
  meta: ["0.75rem", "1.4"],
}

### Farbpalette
Gold `#D1A954` / Navy `#10131F` – Neutral `#EDEBE7`  
Ruhige Kontraste, edle Tiefenwirkung.

colors: {
  navy: {
    950: "#0B0E17",
    900: "#10131F",
    800: "#171C2A",
    700: "#1F2537",
  },
  gold: {
    400: "#D1A954",
    300: "#E7C97A",
  },
  neutral: {
    100: "#EDEBE7",
    400: "#A6A9B0",
  },
}

Primär: gold-400 (Highlights, Linien, Titel)
Sekundär: navy-900/950 (Flächen, Hintergründe)
Neutral: neutral-100/400 (Lesetext, Icons)

Vertikaler Rhythmus (Spacing Takt)
Basis-Schritte:
8 px · 12 px · 20 px · 32 px · 52 px · 84 px

<section class="py-20 md:py-32">
  <div class="grid gap-card-gap md:gap-12">…</div>
</section>

### Signature-Details
Goldlinie `via-gold-400/20` · rounded-lg · hover-lift · shadow-pulse  
→ architektonische Ruhe und subtile Spannung.

| Element          | Regel                                                              | Zweck                  |
| ---------------- | ------------------------------------------------------------------ | ---------------------- |
| **Goldlinie**    | `bg-gradient-to-r from-transparent via-gold-400/20 to-transparent` | Trennung Header / Body |
| **Card-Corner**  | `rounded-lg`                                                       | sanfte Ruhe im Raster  |
| **Hover-Lift**   | `hover:-translate-y-[2px] transition-all duration-500 ease-smooth` | feine Spannung         |
| **Shadow-Pulse** | `hover:shadow-[0_0_32px_-10px_rgba(209,169,84,0.25)]`              | Lichttiefe im Goldton  |

<div className="flex flex-col rounded-lg border border-navy-700/60 overflow-hidden">
  <header className="relative h-card-header">
    <img src="..." className="absolute inset-0 w-full h-full object-cover opacity-90" />
    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-800/40 to-transparent" />
  </header>

  <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

  <main className="p-card-padding min-h-card-body bg-navy-950/60 backdrop-blur-sm">
    <p className="text-base text-neutral-100 leading-snug mb-3">…</p>
    <footer className="mt-2 pt-2 border-t border-navy-700/50 text-meta text-right text-neutral-400/80">
      <span className="italic">Martin Hsu</span>
      <span className="ml-2 text-neutral-500/70">· 5. Nov. 2025</span>
    </footer>
  </main>
</div>

---

## 🌐 Deployment

Dieses Projekt wird über [Vercel](https://vercel.com) bereitgestellt.  
Live-Domain: **[https://martinhsu.digital](https://martinhsu.digital)**

Deployment läuft automatisch bei jedem Push auf den `main`-Branch.

---

## 💡 Lernen: Was passiert hier technisch?

- **Vite** stellt eine schnelle Dev-Umgebung bereit (Hot Module Reloading).  
- **React** rendert Komponenten (z. B. `Card`, `Button`) und deine Seite (`DigitaleProfilseite`).  
- **Tailwind CSS** liefert ein Utility-Designsystem; Farben & Effekte sind in `tailwind.config.js` definiert.  
- **Vercel** übernimmt CI/CD: Jeder Push auf `main` triggert einen neuen Build + Deploy.

---

## 🔧 Erweiterungen (später)

- Unterseiten: `/atlas` (Türkis-Glow), `/gmass`, `/consulting`  
- Projects aus `data/projects.json` dynamisch einlesen  
- Dark Mode Umschalter (statt nur `prefers-color-scheme`)  
- Analytics (Vercel Analytics oder Fathom, cookiefrei)

---

## 👤 Kontakt

- E-Mail: `martin.hsu@gmx.net`
- LinkedIn: später ergänzen
- Standort: Zürich

© 2025 Martin Hsu

---

## Legal Notice

### Trademarks
„USE+ Framework™“ ist eine Marke von Martin Hsu.  
Die Nutzung des Namens und/oder Logos ist ohne vorherige schriftliche Zustimmung nicht gestattet.

### Copyright
Texte, Visuals und Systembeschreibungen unterliegen dem Urheberrecht (Art. 2 URhG).  
Verwendung, Reproduktion oder Abwandlung nur mit Quellenangabe oder Lizenzierung.

### Datenschutz
Diese Website erfasst keine personenbezogenen Daten, keine Cookies und nutzt keine Tracker.

---

### 🧭 Designphilosophie
> *„Form folgt Rhythmus – und Rhythmus ist sichtbares Denken.“*  
> Das Martin-Hsu-Designsystem vereint Struktur, Tiefe und psychologische Lesbarkeit  
> zu einer klaren digitalen Identität.
