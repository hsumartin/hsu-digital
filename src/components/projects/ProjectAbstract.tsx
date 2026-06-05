interface ProjectAbstractProps {
  text: string;
}

export default function ProjectAbstract({ text }: ProjectAbstractProps) {
  return (
    <div className="border border-stone-200 bg-[#F8F7F3] grid grid-cols-[12rem_1fr] mb-12 max-[680px]:grid-cols-1">
      <div className="p-[1.35rem_1.4rem] border-r border-stone-100 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-gold-600 max-[680px]:border-r-0 max-[680px]:border-b">
        Abstract
      </div>
      <div className="p-[1.35rem_1.6rem]">
        <p className="text-[1rem] leading-[1.78] text-stone-700 font-light max-w-[62ch]">{text}</p>
      </div>
    </div>
  );
}
