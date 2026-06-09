'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
  const [open, setOpen] = useState(false);

  function close() { setOpen(false); }

  return (
    <>
      <nav
        aria-label="Hauptnavigation"
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-6
                   px-[clamp(1.5rem,4vw,4rem)] py-[1.05rem]
                   border-b border-stone-200 bg-paper/88 backdrop-blur-[12px]"
      >
        <Link href="/" aria-label="Startseite" onClick={close}>
          <NavMark />
        </Link>

        {/* Desktop links */}
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

        {/* Status badge — desktop only */}
        <div
          aria-hidden="true"
          className="hidden md:flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em]
                     uppercase text-gold-600 border border-stone-200 rounded-full px-[0.85rem] py-[0.4rem]
                     whitespace-nowrap"
        >
          <span className="nav-pulse-dot" />
          Verfügbar für Projekte
        </div>

        {/* Hamburger — mobile only */}
        <button
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] -mr-2 shrink-0"
        >
          <span
            className={[
              'block w-5 h-px bg-ink transition-transform duration-200 origin-center',
              open ? 'translate-y-[6px] rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-5 h-px bg-ink transition-opacity duration-200',
              open ? 'opacity-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-5 h-px bg-ink transition-transform duration-200 origin-center',
              open ? '-translate-y-[6px] -rotate-45' : '',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-paper pt-[3.7rem] flex flex-col"
          aria-label="Mobile Navigation"
        >
          <ul
            role="list"
            className="flex flex-col px-[clamp(1.5rem,4vw,4rem)] pt-6 border-t border-stone-200 list-none"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href} className="border-b border-stone-200">
                  <Link
                    href={href}
                    onClick={close}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'flex items-center py-5 font-mono text-[0.82rem] tracking-[0.12em] uppercase no-underline transition-colors duration-200',
                      isActive ? 'text-ink' : 'text-text-muted',
                    ].join(' ')}
                  >
                    {isActive && (
                      <span className="w-[5px] h-[5px] rounded-full bg-gold-500 mr-3 shrink-0" />
                    )}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold-600 px-[clamp(1.5rem,4vw,4rem)] mt-8">
            <span className="nav-pulse-dot" />
            Verfügbar für Projekte
          </div>
        </div>
      )}
    </>
  );
}
