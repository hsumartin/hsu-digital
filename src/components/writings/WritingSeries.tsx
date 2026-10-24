import Link from 'next/link';
import { SeriesItem } from '@/data/series';

interface WritingSeriesProps {
  items: SeriesItem[];
  /** Zero-based position of the page the reader is on. */
  current: number;
  labels: { heading: string; part: string; of: string };
}

/** Compact reading path for a group of related writings; the current one is marked. */
export default function WritingSeries({ items, current, labels }: WritingSeriesProps) {
  return (
    <nav
      aria-label={labels.heading}
      className="border border-stone-200 bg-[#F8F7F3] mt-6 p-[1rem_1.15rem]"
    >
      <div className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-gold-700 mb-[0.8rem]">
        {labels.heading} · {labels.part} {current + 1} {labels.of} {items.length}
      </div>
      <ol className="list-none grid grid-cols-3 gap-px bg-stone-200 border border-stone-200 max-[760px]:grid-cols-1">
        {items.map((item, i) => (
          <li key={item.href} className={i === current ? 'bg-[#FBFAF7]' : 'bg-[#F8F7F3]'}>
            {i === current ? (
              <span
                aria-current="page"
                className="flex gap-[0.65rem] items-baseline p-[0.8rem_1rem] font-mono text-[0.68rem] leading-[1.45] tracking-[0.04em] text-stone-900"
              >
                <span className="text-gold-700 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="flex gap-[0.65rem] items-baseline p-[0.8rem_1rem] no-underline font-mono text-[0.68rem] leading-[1.45] tracking-[0.04em] text-blue-800 hover:text-stone-900 transition-colors"
              >
                <span className="text-blue-800 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
