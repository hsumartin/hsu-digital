interface WritingAbstractProps {
  paragraphs: string[];
}

export default function WritingAbstract({ paragraphs }: WritingAbstractProps) {
  return (
    <div className="bg-[#F8F7F3] border border-stone-200 px-[1.85rem] py-[1.65rem] mb-12 max-w-[66ch]">
      <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-gold-600 mb-[0.9rem]">
        Abstract
      </p>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[1rem] leading-[1.82] text-stone-700 font-light mb-4 last:mb-0"
        >
          {p}
        </p>
      ))}
    </div>
  );
}
