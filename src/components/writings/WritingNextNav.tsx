import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  kicker?: string;
}

interface WritingNextNavProps {
  prev?: NavItem;
  next?: NavItem;
  indexHref?: string;
  labels?: { all: string; aria: string };
}

export default function WritingNextNav({
  prev,
  next,
  indexHref = '/schriften',
  labels = { all: 'Alle Schriften', aria: 'Schriften-Navigation' },
}: WritingNextNavProps) {
  return (
    <nav
      className="border-t border-stone-100 pt-8 mt-8 flex justify-between items-center gap-4 flex-wrap"
      aria-label={labels.aria}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-stone-500 no-underline hover:text-stone-900 transition-colors"
        >
          ← {prev.kicker && <span className="text-blue-800">{prev.kicker} · </span>}
          {prev.label}
        </Link>
      ) : (
        <span />
      )}

      <Link
        href={indexHref}
        className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-stone-500 no-underline hover:text-stone-900 transition-colors"
      >
        {labels.all}
      </Link>

      {next ? (
        <Link
          href={next.href}
          className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-stone-500 no-underline hover:text-stone-900 transition-colors"
        >
          {next.kicker && <span className="text-blue-800">{next.kicker} · </span>}
          {next.label} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
