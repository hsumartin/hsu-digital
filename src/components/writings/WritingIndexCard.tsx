import Link from 'next/link';
import { WritingIndex } from '@/data/writings';

interface WritingIndexCardProps {
  writing: WritingIndex;
  featured?: boolean;
}

const tagVariants: Record<string, string> = {
  Methode: 'border-blue-300/50 text-blue-700 bg-blue-700/[0.04]',
  Governance: 'border-gold-400/45 text-gold-600 bg-gold-500/[0.06]',
  'KI-Haltung': 'border-gold-400/45 text-gold-600 bg-gold-500/[0.06]',
  Kontrolle: 'border-gold-400/45 text-gold-600 bg-gold-500/[0.06]',
  Denkmodell: 'border-gold-400/45 text-gold-600 bg-gold-500/[0.06]',
};

function tagClass(tag: string) {
  return tagVariants[tag] ?? 'border-stone-200 text-stone-400 bg-[#F8F7F3]';
}

export default function WritingIndexCard({ writing, featured = false }: WritingIndexCardProps) {
  const title = writing.hasDetail ? (
    <Link
      href={`/schriften/${writing.slug}`}
      className="text-stone-900 no-underline hover:text-gold-600 transition-colors
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
    >
      {writing.title}
    </Link>
  ) : (
    <span>{writing.title}</span>
  );

  return (
    <article
      className={[
        'group border border-stone-200 bg-[#FBFAF7] grid grid-cols-[13rem_1fr_20rem]',
        'hover:border-gold-500/40 focus-within:border-gold-500/40 active:border-gold-500/40',
        'transition-colors duration-200',
        featured ? 'min-h-[16rem]' : 'min-h-[13rem]',
        'max-[1040px]:grid-cols-[11rem_1fr]',
        'max-[720px]:grid-cols-1',
      ].join(' ')}
    >
      {/* Meta column */}
      <div className="border-r border-stone-100 p-[1.35rem_1.45rem] flex flex-col gap-3 max-[720px]:border-r-0 max-[720px]:border-b">
        <div className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-stone-400">
          {writing.id}
        </div>
        <div
          className={`font-mono text-[0.62rem] tracking-[0.12em] uppercase ${
            writing.type === 'Denkmodell'
              ? 'text-gold-600'
              : writing.type === 'Framework'
              ? 'text-blue-700'
              : 'text-stone-400'
          }`}
        >
          {writing.type}
        </div>
        <div className="font-mono text-[0.58rem] tracking-[0.1em] text-stone-300 mt-auto">
          {writing.year}
        </div>
      </div>

      {/* Main column */}
      <div className="p-[1.45rem_1.65rem]">
        <h2
          className={[
            'font-serif font-normal leading-[1.18] tracking-[-0.012em] mb-[0.7rem]',
            featured
              ? 'text-[clamp(1.75rem,3vw,2.45rem)]'
              : 'text-[clamp(1.35rem,2.2vw,1.75rem)]',
          ].join(' ')}
        >
          {title}
        </h2>
        <div className="font-serif italic text-[0.95rem] text-stone-500 mb-[0.85rem]">
          {writing.principle}
        </div>
        <p className="text-[0.92rem] leading-[1.72] text-stone-700 font-light max-w-[58ch]">
          {writing.description}
        </p>
      </div>

      {/* Side column */}
      <div className="border-l border-stone-100 p-[1.35rem_1.45rem] flex flex-col justify-between max-[1040px]:col-span-full max-[1040px]:border-l-0 max-[1040px]:border-t max-[720px]:border-t">
        <div>
          <div className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-stone-400 mb-[0.7rem]">
            Wirkt in
          </div>
          <div className="flex flex-wrap gap-2">
            {writing.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center border rounded-full px-[0.65rem] py-[0.26rem] font-mono text-[0.58rem] tracking-[0.12em] uppercase ${tagClass(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {writing.hasDetail && (
          <Link
            href={`/schriften/${writing.slug}`}
            className="inline-flex mt-4 font-mono text-[0.64rem] tracking-[0.12em] uppercase text-gold-600 no-underline border-b border-gold-400/[0.28] pb-[2px] w-max hover:text-stone-900 transition-colors"
          >
            Lesen →
          </Link>
        )}
      </div>
    </article>
  );
}
