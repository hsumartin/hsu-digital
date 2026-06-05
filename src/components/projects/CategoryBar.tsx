interface CategoryBarProps {
  items: Array<{ num: string; label: string; anchor: string }>;
  meta?: string;
}

export default function CategoryBar({ items, meta }: CategoryBarProps) {
  return (
    <div
      className="flex items-center border border-stone-200 bg-[#F8F7F3] mb-[1.6rem] flex-wrap"
      role="navigation"
      aria-label="Projektindex-Navigation"
    >
      {items.map((item, i) => (
        <a
          key={item.anchor}
          href={item.anchor}
          className={[
            'flex items-baseline gap-[0.5rem] px-[1.15rem] py-[0.8rem]',
            i < items.length - 1 ? 'border-r border-stone-200' : '',
            'font-mono text-[0.66rem] tracking-[0.12em] uppercase',
            'text-stone-400 hover:text-stone-700 no-underline transition-colors',
          ].join(' ')}
        >
          <b className="text-[0.58rem] font-medium text-stone-400">{item.num}</b>
          {item.label}
        </a>
      ))}
      {meta && (
        <span className="ml-auto px-[1.15rem] py-[0.8rem] border-l border-stone-200 font-mono text-[0.66rem] tracking-[0.12em] uppercase text-stone-400">
          {meta}
        </span>
      )}
    </div>
  );
}
