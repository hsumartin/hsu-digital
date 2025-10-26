
# Portfolio & Bewerbungsseite – Martin Hsu

**Rolle:** Supporter Digitalisierung BBV – Stadt Zürich (UGZ)  
**Profil:** Product Owner & Systemgestalter für digitale Verwaltungsprozesse, KI-Integration und datenbasierte Innovation.

Live-Demo (nach Deployment): `https://martinhsu.vercel.app` oder eigene Domain (z. B. `martinhsu.dev`).

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
public/
  downloads/                        # PDFs: Lebenslauf, Zeugnisse, Zertifikate
tailwind.config.js                  # Farb- & Designsystem
vercel.json                         # Deployment-Konfiguration (Vercel)
```

---

## 🎨 Designsystem

**Farben**
- `primary` `#0a192f` – Digital Blue (ruhig, professionell)
- `accent`  `#d4b066` – Matte Gold (wertig, warm)
- `future`  `#06b6d4` – Türkis (für KI-/Atlas-Seiten)
- `background` `#f9fafb`
- `text` `#111827`

**Glow-Effekte**
- Gold-Glow: Standard auf CTAs, unterschwellige Energie
- Türkis-Glow: Optional für KI-/Atlas-Seiten (visuelle Differenzierung)

Dark Mode ist vorbereitet via `prefers-color-scheme`, kann später ausgebaut werden.

---

## 📥 Downloads (Austauschbar)

Lege deine PDFs in `public/downloads/` ab und überschreibe die Platzhalter:
- `CV_MartinHsu.pdf`
- `Zeugnisse_MartinHsu.pdf`
- `Zertifikate_MartinHsu.pdf`

Die Links sind auf der Seite bereits eingebunden.

---

## 🌐 Deployment mit Vercel

1. **GitHub-Repository anlegen** (öffentlich), z. B. `portfolio-martin-hsu`  
2. Projekt-Dateien hochladen / pushen
3. **Vercel** (Personal Account) → „Add New Project“ → GitHub-Repo wählen
4. Build läuft automatisch → Live-URL z. B. `https://martinhsu.vercel.app`

**Eigene Domain (optional):**
- Domain z. B. `martinhsu.dev` registrieren
- In Vercel: „Add Domain“ → DNS automatisch setzen lassen
- Fertig – die Seite ist unter der eigenen Domain erreichbar

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
