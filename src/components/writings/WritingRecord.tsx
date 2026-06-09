interface WritingRecordProps {
  items: Array<{ key: string; value: string }>;
}

// Full class-name strings must be written out so Tailwind v4's scanner detects them.
const COLS_CLASS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
};

export default function WritingRecord({ items }: WritingRecordProps) {
  const colsClass = COLS_CLASS[Math.min(items.length, 5)] ?? 'grid-cols-4';

  return (
    <section
      className={[
        'border border-stone-200 bg-[#F8F7F3] grid mt-8',
        colsClass,
        'max-[900px]:grid-cols-2 max-[520px]:grid-cols-1',
      ].join(' ')}
      aria-label="Schrift-Metadaten"
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="p-[0.95rem_1.1rem] border-r border-b border-stone-100 min-h-[5.2rem]
                     last:border-r-0
                     max-[900px]:[&:nth-child(2n)]:border-r-0
                     max-[520px]:border-r-0"
        >
          <span className="block font-mono text-[0.56rem] tracking-[0.13em] uppercase text-stone-400 mb-[0.42rem] break-words">
            {item.key}
          </span>
          <span className="block font-mono text-[0.76rem] leading-[1.45] text-blue-700 break-words">
            {item.value}
          </span>
        </div>
      ))}
    </section>
  );
}
