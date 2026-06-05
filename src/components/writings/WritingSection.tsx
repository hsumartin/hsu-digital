import { ReactNode } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

interface WritingSectionProps {
  id: string;
  num: string;
  label: string;
  children: ReactNode;
}

export default function WritingSection({ id, num, label, children }: WritingSectionProps) {
  return (
    <section
      id={id}
      className="pb-16 mb-16 border-b border-stone-100 scroll-mt-24 last:mb-0 last:border-b-0"
    >
      <SectionLabel num={num}>{label}</SectionLabel>
      {children}
    </section>
  );
}
