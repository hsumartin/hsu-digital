interface TimelineEntry {
  year: string;
  title: string;
  place: string;
  text: string;
  accent?: 'gold' | 'blue';
}

const ENTRIES: TimelineEntry[] = [
  {
    year: '2012–2019',
    title: 'Architektur als Denkgrundlage',
    place: 'TU Braunschweig · Institute of Media and Design',
    text: 'Architektur hat das Denken in Raum, Massstab, Struktur und Sequenz geprägt. Aus Studium, Bachelorthesis und experimentellen Projekten entstand eine Grundhaltung: Komplexität ordnen, Zusammenhänge sehen, Systemen Form geben.',
    accent: 'gold',
  },
  {
    year: '2023–2025',
    title: 'Verwaltung als Realitätsprüfung',
    place: 'Stadt Zürich · Digitalisierung & Fachapplikationen',
    text: 'Die Arbeit in der öffentlichen Verwaltung zeigte, wie digitale Systeme unter realen organisatorischen, rechtlichen und fachlichen Bedingungen funktionieren müssen. Anforderungen, GIS-Datenmodellierung, Schnittstellenlogik, Zuständigkeiten und Product-Owner-nahe Verantwortung machten Gestaltung überprüfbar.',
    accent: 'gold',
  },
  {
    year: 'Heute',
    title: 'KI als Denk- und Arbeitsarchitektur',
    place: 'martinhsu.digital',
    text: 'Architekturdenken, Verwaltungsdigitalisierung, Product Ownership, GIS und KI verbinden sich zu einer systemischen Arbeitsweise. Fokus: verantwortbare digitale Strukturen, KI-gestützte Wissensorganisation und kontrollierbare Systeme mit Human-in-the-loop.',
    accent: 'blue',
  },
];

export default function Timeline() {
  return (
    <ol className="relative pl-8 list-none" aria-label="Entwicklungslinie">
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
