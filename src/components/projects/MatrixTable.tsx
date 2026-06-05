const roles = ['Systemadmin', 'Superuser', 'Projektleitung', 'Nutzende', 'Sekretariat', 'Leserecht'];

type AccessLevel = 'full' | 'limited' | 'none';

const rows: Array<{ label: string; access: AccessLevel[]; sub?: (string | null)[] }> = [
  {
    label: 'Fälle sehen',
    access: ['full', 'full', 'full', 'limited', 'full', 'full'],
    sub: [null, null, 'alle Fälle', 'eigene', null, 'nur lesen'],
  },
  {
    label: 'Fälle bearbeiten',
    access: ['full', 'full', 'full', 'limited', 'full', 'none'],
    sub: [null, null, null, 'eigene', null, null],
  },
  {
    label: 'Pendenzen verwalten',
    access: ['full', 'full', 'limited', 'limited', 'limited', 'none'],
  },
  {
    label: 'Prüfthemen zuweisen',
    access: ['full', 'full', 'none', 'none', 'none', 'none'],
  },
  {
    label: 'Dokumente und Vorlagen',
    access: ['full', 'full', 'limited', 'limited', 'full', 'none'],
  },
  {
    label: 'Systemeinstellungen',
    access: ['full', 'none', 'none', 'none', 'none', 'none'],
  },
  {
    label: 'Reporting',
    access: ['full', 'full', 'full', 'none', 'none', 'none'],
  },
];

function AccessCell({ level, sub }: { level: AccessLevel; sub?: string | null }) {
  const symbol = level === 'full' ? '●' : level === 'limited' ? '◐' : '–';
  const color =
    level === 'full'
      ? 'text-blue-700'
      : level === 'limited'
      ? 'text-gold-600'
      : 'text-stone-400';
  return (
    <td className="px-[0.55rem] py-[0.75rem] text-center border-b border-stone-100 text-[0.82rem] text-stone-700 last:border-b-0">
      <span className={`block font-mono text-base leading-none ${color}`}>{symbol}</span>
      {sub && (
        <span className="block font-mono text-[0.56rem] tracking-[0.04em] text-stone-400 mt-[0.12rem]">
          {sub}
        </span>
      )}
    </td>
  );
}

export default function MatrixTable() {
  return (
    <div
      className="border border-stone-200 bg-[#F8F7F3] overflow-auto mt-[1.8rem]"
      role="region"
      aria-label="Rollenmatrix"
      tabIndex={0}
    >
      <table className="w-full border-collapse" style={{ minWidth: 720 }}>
        <thead>
          <tr>
            <th className="bg-[#F8F7F3] font-mono text-[0.58rem] tracking-[0.09em] uppercase font-medium text-stone-400 px-4 py-[0.78rem] text-left border-b border-stone-200 w-[25%]">
              Berechtigung
            </th>
            {roles.map((r) => (
              <th
                key={r}
                className="bg-[#F8F7F3] font-mono text-[0.58rem] tracking-[0.09em] uppercase font-medium text-stone-400 px-[0.55rem] py-[0.78rem] text-center border-b border-stone-200"
              >
                {r}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="px-4 py-[0.75rem] border-b border-stone-100 text-[0.82rem] font-medium text-stone-900">
                {row.label}
              </td>
              {row.access.map((level, i) => (
                <AccessCell
                  key={i}
                  level={level}
                  sub={row.sub?.[i]}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-5 flex-wrap px-4 py-[0.8rem] border-t border-stone-100 font-mono text-[0.62rem] tracking-[0.08em] text-stone-400">
        <span className="inline-flex items-center gap-[0.4rem]">
          <span className="text-blue-700">●</span> Vollzugriff
        </span>
        <span className="inline-flex items-center gap-[0.4rem]">
          <span className="text-gold-600">◐</span> Eingeschränkt
        </span>
        <span className="inline-flex items-center gap-[0.4rem]">
          <span className="text-stone-400">–</span> Kein Zugriff
        </span>
      </div>
    </div>
  );
}
