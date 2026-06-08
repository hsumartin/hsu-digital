'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;

    function update() {
      const scrolled = document.documentElement.scrollTop;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      bar!.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      id="scroll-progress-bar"
      aria-hidden="true"
      className="fixed top-0 left-0 z-50 h-[2px] w-0 pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, #C9A94B, rgba(201,169,75,0.4))',
        transition: 'width 0.1s linear',
      }}
    />
  );
}
