import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

interface Tag {
  label: string;
  variant?: 'gold' | 'blue' | 'default';
}

interface WritingHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  lead: string;
  tags?: Tag[];
}

export default function WritingHeader({ eyebrow, title, subtitle, lead, tags }: WritingHeaderProps) {
  return (
    <header className="relative pt-24 pb-[3.2rem] border-b border-stone-100 overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,104,149,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(43,104,149,0.10) 1px,transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(110% 75% at 22% 0%,#000 22%,transparent 66%)',
          WebkitMaskImage: 'radial-gradient(110% 75% at 22% 0%,#000 22%,transparent 66%)',
        }}
      />
      <div className="relative z-10 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-stone-400 mb-6">
          <b className="text-gold-600 font-medium">Schrift · Whitepaper</b> · {eyebrow}
        </div>

        <SectionLabel num="01">Schriftendetail</SectionLabel>

        <div className="grid grid-cols-[minmax(0,1.42fr)_minmax(18rem,0.8fr)] gap-12 items-end max-[880px]:grid-cols-1 max-[880px]:gap-6">
          <div>
            <h1 className="font-serif font-normal text-[clamp(3rem,6.2vw,5.4rem)] leading-[1.03] tracking-[-0.025em] max-w-[10ch] pb-[0.08em]">
              {title}
            </h1>
            <p className="mt-[1.05rem] font-serif text-[clamp(1.45rem,2.3vw,2rem)] italic leading-[1.25] text-stone-700 max-w-[22ch]">
              {subtitle}
            </p>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-[1.35rem]">
                {tags.map((t) => (
                  <span
                    key={t.label}
                    className={[
                      'inline-flex items-center border rounded-full px-[0.78rem] py-[0.34rem] font-mono text-[0.6rem] tracking-[0.13em] uppercase',
                      t.variant === 'gold'
                        ? 'border-gold-400/45 text-gold-600 bg-gold-500/[0.06]'
                        : t.variant === 'blue'
                        ? 'border-blue-300/50 text-blue-700 bg-blue-700/[0.04]'
                        : 'border-stone-200 text-stone-400 bg-[#F8F7F3]',
                    ].join(' ')}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-[1.04rem] leading-[1.72] text-stone-700 font-light max-w-[42ch]">
              {lead}
            </p>
            <Link
              href="/schriften"
              className="inline-flex mt-[1.4rem] font-mono text-[0.64rem] tracking-[0.12em] uppercase text-blue-700 no-underline border-b border-blue-700/25 pb-[2px]"
            >
              Zurück zu Schriften
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
