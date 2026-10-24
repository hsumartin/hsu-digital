import Link from 'next/link';

interface Handoff {
  text: string;
  href: string;
  label: string;
}

/** Curated reading transitions between writings, one short paragraph each. */
export default function WritingHandoffs({ items }: { items: Handoff[] }) {
  return (
    <div className="grid gap-4 max-w-[66ch]">
      {items.map((item) => (
        <div key={item.href} className="border border-stone-200 bg-[#FBFAF7] p-[1.25rem_1.35rem]">
          <p className="text-[0.95rem] leading-[1.75] text-stone-700 font-light mb-3">{item.text}</p>
          <Link
            href={item.href}
            className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-blue-800 no-underline border-b border-blue-700/25 pb-[2px] hover:text-stone-900 transition-colors"
          >
            {item.label} →
          </Link>
        </div>
      ))}
    </div>
  );
}
