import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  kicker?: string;
}

interface ProjectNextNavProps {
  prev?: NavItem;
  next?: NavItem;
  indexHref?: string;
}

export default function ProjectNextNav({ prev, next, indexHref = '/projekte' }: ProjectNextNavProps) {
  return (
    <nav
      className="border-t border-stone-100 pt-8 mt-8 flex justify-between items-center gap-4 flex-wrap"
      aria-label="Projektenavigation"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="font-mono text-[0.64rem] tracking-[0.12em] uppercase text-stone-400 no-underline hover:text-stone-900 transition-colors"
        >
          ← {prev.kicker && <span className="text-blue-700">{prev.kicker} · </span>}
          {prev.label}
        </Link>
      ) : (
        <span />
      )}

      <Link
        href={indexHref}
        className="font-mono text-[0.64rem] tracking-[0.12em] uppercase text-stone-400 no-underline hover:text-stone-900 transition-colors"
      >
        Alle Projekte
      </Link>

      {next ? (
        <Link
          href={next.href}
          className="font-mono text-[0.64rem] tracking-[0.12em] uppercase text-stone-400 no-underline hover:text-stone-900 transition-colors"
        >
          {next.kicker && <span className="text-blue-700">{next.kicker} · </span>}
          {next.label} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
