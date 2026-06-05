interface SectionLabelProps {
  num?: string;
  children: React.ReactNode;
}

export default function SectionLabel({ num, children }: SectionLabelProps) {
  return (
    <div
      className="flex items-center gap-[0.9rem] font-mono text-[0.7rem] tracking-[0.22em]
                 uppercase text-gold-600 mb-[1.7rem]
                 after:content-[''] after:flex-1 after:h-px after:bg-stone-200"
    >
      {num && <span className="text-blue-800">{num}</span>}
      <span>{children}</span>
    </div>
  );
}
