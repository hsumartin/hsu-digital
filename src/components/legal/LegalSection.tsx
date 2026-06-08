import { ReactNode } from 'react';

interface LegalSectionProps {
  num: string;
  title: string;
  id?: string;
  children: ReactNode;
}

export default function LegalSection({ num, title, id, children }: LegalSectionProps) {
  return (
    <section
      id={id}
      className="pt-10 mt-10 border-t border-stone-100 scroll-mt-24 first:border-t-0 first:mt-0 first:pt-0"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <p className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-blue-700 mb-2">
        {num}
      </p>
      <h2
        id={id ? `${id}-heading` : undefined}
        className="font-serif font-normal text-[1.5rem] leading-[1.2] tracking-[-0.015em] text-ink mb-6"
      >
        {title}
      </h2>
      <div className="text-[0.95rem] leading-[1.85] text-stone-700 font-light space-y-4 max-w-[60ch]">
        {children}
      </div>
    </section>
  );
}
