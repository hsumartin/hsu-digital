'use client';

import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'instant' : 'smooth' });
  }

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Zum Seitenanfang"
      className="fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center
                 bg-paper border border-stone-200 text-text-muted
                 font-mono text-[0.9rem] leading-none
                 transition-colors duration-200
                 hover:border-gold-500 hover:text-gold-600
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
    >
      ↑
    </button>
  );
}
