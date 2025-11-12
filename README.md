
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

### Typografische Skala
- **H1:** 2.25 rem / 1.2 · 600  
- **H2:** 1.5 rem / 1.3 · 500  
- **Body:** 1 rem / 1.6 · 400  
- **Meta:** 0.75 rem italic / 1.4  

### Farbpalette
Gold `#D1A954` / Navy `#10131F` – Neutral `#EDEBE7`  
Ruhige Kontraste, edle Tiefenwirkung.

### Signature-Details
Goldlinie `via-gold-400/20` · rounded-lg · hover-lift · shadow-pulse  
→ architektonische Ruhe und subtile Spannung.

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
