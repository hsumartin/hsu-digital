import Chip from '@/components/ui/Chip';

const FELDER = [
  {
    num: '01',
    title: 'Digitale Prozessgestaltung',
    text: 'Analyse und Neustrukturierung digitaler Arbeitsprozesse auf Basis von Systemlogik und Datenströmen.',
  },
  {
    num: '02',
    title: 'Product Ownership',
    text: 'Verantwortung für Produktvision, Strategie und cross-funktionale Umsetzung in interdisziplinären Teams.',
  },
  {
    num: '03',
    title: 'KI-gestützte Workflow-Optimierung',
    text: 'Integration intelligenter Modelle in Arbeitsprozesse zur Steigerung von Effizienz und Präzision.',
  },
  {
    num: '04',
    title: 'Wissenssysteme & Ontologien',
    text: 'Aufbau semantischer Strukturen und Ontologien zur Wissensvernetzung und Entscheidungsunterstützung.',
  },
  {
    num: '05',
    title: 'BIM-Management',
    text: 'Strategische Steuerung von Building Information Modeling in Planung, Bau und Betrieb.',
  },
  {
    num: '06',
    title: 'Datengetriebene Architektur',
    text: 'Verknüpfung von Bauwerksinformationen, Simulation und Entscheidungsmodellen in Echtzeit.',
  },
] as const;

const CHIPS = [
  'Requirements Engineering',
  'GIS & Geodaten',
  'Öffentliche Verwaltung',
  'Lokale KI-Agenten',
  'Scrum / Agil',
  'Raumlogik',
  'Systemintegration',
  'Wissenstransfer',
  'UX & Dokumentation',
] as const;

export default function KompetenzGrid() {
  return (
    <div>
      <div className="grid grid-cols-2 max-[680px]:grid-cols-1 border border-stone-200">
        {FELDER.map((f, i) => (
          <div
            key={f.num}
            className={[
              'p-[1.75rem_2rem] bg-paper-soft transition-colors duration-200 hover:bg-stone-100',
              // Trennlinien zwischen Zellen
              i % 2 === 0 ? 'border-r border-stone-200 max-[680px]:border-r-0' : '',
              i < FELDER.length - 2 ? 'border-b border-stone-200' : '',
              i === FELDER.length - 2 ? 'max-[680px]:border-b border-stone-200' : '',
            ].join(' ')}
          >
            <p className="font-mono text-[0.62rem] tracking-[0.18em] text-blue-700 mb-[0.6rem]">
              {f.num}
            </p>
            <p className="text-[0.92rem] font-medium text-ink mb-[0.5rem]">{f.title}</p>
            <p className="text-[0.85rem] leading-[1.65] text-stone-600 font-light">{f.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {CHIPS.map((chip) => (
          <Chip key={chip} variant="neutral">
            {chip}
          </Chip>
        ))}
      </div>
    </div>
  );
}
