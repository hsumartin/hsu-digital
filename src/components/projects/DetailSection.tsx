import { ReactNode } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

interface DetailSectionProps {
  id: string;
  num: string;
  label: string;
  children: ReactNode;
}

export default function DetailSection({ id, num, label, children }: DetailSectionProps) {
  return (
    <section
      id={id}
      className="pb-[4.3rem] mb-[4.3rem] border-b border-stone-100 scroll-mt-24 last:mb-0"
    >
      <SectionLabel num={num}>{label}</SectionLabel>
      {children}
    </section>
  );
}
