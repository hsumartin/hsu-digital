'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavMark from './NavMark';

const NAV_LINKS = [
  { href: '/', label: 'Start' },
  { href: '/projekte', label: 'Projekte' },
  { href: '/schriften', label: 'Schriften' },
  { href: '/verbindungen', label: 'Verbindungen' },
  { href: '/ueber-mich', label: 'Über' },
] as const;

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Hauptnavigation"
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-6
                 px-[clamp(1.5rem,4vw,4rem)] py-[1.05rem]
                 border-b border-stone-200 bg-paper/88 backdrop-blur-[12px]"
    >
      <Link href="/" aria-label="Startseite">
        <NavMark />
      </Link>

      <ul className="hidden md:flex gap-8 list-none" role="list">
        {NAV_LINKS.map(({ href, label }) => {
          const isActive =
            href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'font-mono text-[0.74rem] tracking-[0.12em] uppercase no-underline transition-colors duration-200',
                  isActive ? 'text-ink' : 'text-text-muted hover:text-ink',
                ].join(' ')}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Status badge — purely decorative, no state */}
      <div
        aria-hidden="true"
        className="hidden md:flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em]
                   uppercase text-gold-600 border border-stone-200 rounded-full px-[0.85rem] py-[0.4rem]
                   whitespace-nowrap"
      >
        <span className="nav-pulse-dot" />
        Verfügbar für Projekte
      </div>
    </nav>
  );
}
