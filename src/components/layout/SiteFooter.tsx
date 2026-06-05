import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/', label: '00 Start' },
  { href: '/projekte', label: '01 Projekte' },
  { href: '/schriften', label: '02 Schriften' },
  { href: '/verbindungen', label: '03 Verbindungen' },
  { href: '/ueber-mich', label: '04 Über' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
] as const;

export default function SiteFooter() {
  return (
    <footer
      aria-label="Seitenfooter"
      className="border-t border-stone-200 px-[clamp(1.5rem,4vw,4rem)] py-8"
    >
      <div className="max-w-[var(--width-page)] mx-auto flex flex-wrap justify-between items-center gap-4">
        <span className="font-mono text-[0.64rem] tracking-[0.16em] uppercase text-text-muted">
          <b className="text-gold-600 font-medium">Editorial Architecture</b>
          {' '}×{' '}
          <b className="text-gold-600 font-medium">Civic Digital</b>
          {' '}×{' '}
          <b className="text-gold-600 font-medium">AI Clarity</b>
        </span>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 list-none" role="list">
          {FOOTER_LINKS.map(({ href, label }, i) => (
            <li key={href} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-stone-200 font-mono text-[0.6rem]">·</span>
              )}
              <Link
                href={href}
                className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-stone-700
                           no-underline transition-colors duration-200 hover:text-gold-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-text-muted">
          © 2026 martinhsu.digital
        </span>
      </div>
    </footer>
  );
}
