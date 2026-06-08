interface TimelineEntry {
  year: string;
  title: string;
  place: string;
  text: string;
  accent?: 'gold' | 'blue';
}

const ENTRIES: TimelineEntry[] = [
  {
    year: '2012 — 2018',
    title: 'Architekturstudium',
    place: 'TU Braunschweig · Institute of Media and Design',
    text: 'Systemisches Denken, Raumlogik und parametrisches Entwerfen. Abschluss mit einer Bachelorthesis über Erinnerungsarchitektur als räumliche Dramaturgie. Experimentelle Projekte an der Schnittstelle von Algorithmus, Material und Raum.',
    accent: 'gold',
  },
  {
    year: 'Ab 2018',
    title: 'Umwelt- & Gesundheitsschutz Zürich',
    place: 'Stadt Zürich · Digitalisierung & Fachapplikationen',
    text: 'Digitale Prozesse in der öffentlichen Verwaltung. Anforderungsmanagement, GIS-Datenmodellierung, Product-Owner-nahe Funktion bei der Entwicklung und Einführung digitaler Fachsysteme. Schnittstelle zwischen Fachbereich, IT und Politik.',
    accent: 'gold',
  },
  {
    year: 'Heute',
    title: 'KI · Systemarchitektur · Digitale Transformation',
    place: 'martinhsu.digital',
    text: 'Fokus auf KI-Systeme, die in der Praxis funktionieren — transparent, kontrollierbar, datenschutzkonform. Lokale Agentenarchitekturen, Human-in-the-loop-Systeme und strukturierte Wissensorganisation für regulierte Umgebungen.',
    accent: 'blue',
  },
];

export default function Timeline() {
  return (
    <ol className="relative pl-8 list-none" aria-label="Werdegang">
      {/* Vertikale Linie */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-[0.5rem] bottom-0 w-px bg-stone-200"
      />

      {ENTRIES.map((entry, i) => (
        <li key={i} className="relative mb-12 last:mb-0">
          {/* Dot */}
          <span
            aria-hidden="true"
            className={[
              'absolute -left-[2.4rem] top-[0.38rem] w-2 h-2 rounded-full ring-2 ring-paper',
              entry.accent === 'blue'
                ? 'bg-blue-700 ring-offset-1 ring-offset-blue-700/20'
                : 'bg-gold-500 ring-offset-1 ring-offset-gold-500/20',
            ].join(' ')}
          />

          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-gold-600 mb-[0.4rem]">
            {entry.year}
          </p>
          <h3 className="font-serif font-normal text-[1.2rem] leading-[1.2] text-ink mb-[0.5rem]">
            {entry.title}
          </h3>
          <p className="font-mono text-[0.65rem] tracking-[0.12em] text-blue-700 mb-[0.6rem]">
            {entry.place}
          </p>
          <p className="text-[0.88rem] leading-[1.7] text-stone-600 font-light">
            {entry.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
