'use client';

export type GraphFilter = 'all' | 'projekt' | 'artikel';

interface GraphFilterBarProps {
  value: GraphFilter;
  onChange: (f: GraphFilter) => void;
}

const FILTERS: { value: GraphFilter; num: string; label: string }[] = [
  { value: 'all', num: '01', label: 'Alle' },
  { value: 'projekt', num: '02', label: 'Projekte' },
  { value: 'artikel', num: '03', label: 'Schriften' },
];

export default function GraphFilterBar({ value, onChange }: GraphFilterBarProps) {
  return (
    <div
      className="flex items-center border border-stone-200 bg-[#F8F7F3] mb-[1.6rem] flex-wrap"
      role="toolbar"
      aria-label="Graphfilter"
    >
      {FILTERS.map((f, i) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={[
            'flex items-baseline gap-[0.5rem] px-[1.15rem] py-[0.8rem]',
            i < FILTERS.length - 1 ? 'border-r border-stone-200' : '',
            'font-mono text-[0.66rem] tracking-[0.12em] uppercase transition-colors',
            value === f.value ? 'text-ink' : 'text-stone-400 hover:text-stone-700',
          ].join(' ')}
          aria-pressed={value === f.value}
        >
          <b
            className={[
              'text-[0.58rem] font-medium',
              value === f.value ? 'text-gold-600' : 'text-stone-400',
            ].join(' ')}
          >
            {f.num}
          </b>
          {f.label}
        </button>
      ))}
      <span className="ml-auto px-[1.15rem] py-[0.8rem] border-l border-stone-200 font-mono text-[0.66rem] tracking-[0.12em] uppercase text-stone-400 hidden md:block">
        Knoten wählen · ziehen · zoomen
      </span>
    </div>
  );
}
