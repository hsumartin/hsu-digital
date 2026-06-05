import Link from 'next/link';
import { ProjectIndex } from '@/data/projects';

interface ProjectIndexCardProps {
  project: ProjectIndex;
  num: number;
  compact?: boolean;
}

const tagVariants: Record<string, string> = {
  Requirements: 'border-blue-300/50 text-blue-700 bg-blue-700/[0.04]',
  GIS: 'border-blue-300/50 text-blue-700 bg-blue-700/[0.04]',
  Datenmodell: 'border-blue-300/50 text-blue-700 bg-blue-700/[0.04]',
  Referenzfall: 'border-gold-400/45 text-gold-600 bg-gold-500/[0.06]',
  Geodaten: 'border-gold-400/45 text-gold-600 bg-gold-500/[0.06]',
};

function tagClass(tag: string) {
  return (
    tagVariants[tag] ??
    'border-stone-200 text-stone-400 bg-[#F8F7F3]'
  );
}

export default function ProjectIndexCard({ project, num, compact = false }: ProjectIndexCardProps) {
  const numStr = String(num).padStart(2, '0');

  const title = project.hasDetail ? (
    <Link
      href={`/projekte/${project.slug}`}
      className="text-stone-900 no-underline hover:text-gold-600 transition-colors"
    >
      {project.title}
    </Link>
  ) : (
    <span>{project.title}</span>
  );

  return (
    <article
      className={[
        'border border-stone-200 bg-[#FBFAF7] grid',
        compact
          ? 'grid-cols-[12rem_1fr]'
          : 'grid-cols-[16rem_1fr] min-h-[14rem]',
        'max-sm:grid-cols-1',
      ].join(' ')}
    >
      {/* Marker */}
      <div className="border-r border-stone-100 bg-[#F8F7F3] p-[1.25rem_1.35rem] flex flex-col justify-between gap-4 max-sm:border-r-0 max-sm:border-b">
        <div>
          <div className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-gold-600 mb-1">
            {project.kicker}
          </div>
          <div
            className={[
              'font-serif leading-none text-stone-200',
              compact ? 'text-[2.2rem]' : 'text-[3.2rem]',
            ].join(' ')}
          >
            {numStr}
          </div>
        </div>
        <span className="inline-flex w-max border border-blue-700/[0.28] rounded-full px-[0.65rem] py-[0.26rem] font-mono text-[0.56rem] tracking-[0.12em] uppercase text-blue-700 bg-blue-700/[0.04]">
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div className="p-[1.45rem_1.65rem]">
        <div className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-stone-400 mb-[0.8rem]">
          {project.context}
        </div>
        <h3
          className={[
            'font-serif font-normal leading-[1.12] tracking-[-0.012em] mb-[0.7rem]',
            compact
              ? 'text-[clamp(1.35rem,2.4vw,1.85rem)]'
              : 'text-[clamp(1.75rem,3vw,2.45rem)]',
          ].join(' ')}
        >
          {title}
        </h3>
        <p
          className={[
            'leading-[1.72] text-stone-700 font-light mb-[1.1rem]',
            compact ? 'text-[0.9rem] max-w-[58ch]' : 'text-[0.96rem] max-w-[58ch]',
          ].join(' ')}
        >
          {project.description}
        </p>

        {/* Tags (featured cards only) */}
        {!compact && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-[0.9rem] mb-[1.1rem]">
            {project.tags.map((t) => (
              <span
                key={t}
                className={`inline-flex items-center border rounded-full px-[0.72rem] py-[0.3rem] font-mono text-[0.58rem] tracking-[0.12em] uppercase ${tagClass(t)}`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="grid grid-cols-[1fr_auto] gap-5 items-end border-t border-stone-100 pt-4 mt-4 max-sm:grid-cols-1">
          <div className="font-mono text-[0.62rem] tracking-[0.08em] leading-[1.6] text-stone-400">
            <b className="text-blue-700 font-medium">{compact ? 'Detail:' : 'Artefakte:'}</b>{' '}
            {project.artifacts}
          </div>
          {project.hasDetail && (
            <Link
              href={`/projekte/${project.slug}`}
              className="font-mono text-[0.64rem] tracking-[0.12em] uppercase text-gold-600 no-underline border-b border-gold-400/[0.28] pb-[2px] whitespace-nowrap hover:text-stone-900 transition-colors"
            >
              {compact ? 'Öffnen' : 'Dossier lesen'}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
