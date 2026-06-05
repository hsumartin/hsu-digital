import Image from 'next/image';

interface WritingFigureProps {
  label: string;
  type: string;
  src: string;
  caption: string;
  width?: number;
  height?: number;
}

export default function WritingFigure({
  label,
  type,
  src,
  caption,
  width = 1500,
  height = 900,
}: WritingFigureProps) {
  return (
    <figure className="my-10 border border-stone-200 bg-[#FBFAF7] overflow-auto">
      <div className="flex justify-between gap-4 items-baseline px-4 py-[0.75rem] border-b border-stone-100 font-mono text-[0.58rem] tracking-[0.14em] uppercase">
        <span className="text-gold-600">{label}</span>
        <span className="text-stone-400">{type}</span>
      </div>
      <div className="bg-[#F8F7F3] p-4 overflow-auto">
        <Image
          src={src}
          alt={label}
          width={width}
          height={height}
          className="block w-full h-auto"
          style={{ minWidth: 540 }}
          unoptimized
        />
      </div>
      <figcaption className="border-t border-stone-100 px-4 py-[0.72rem] font-mono text-[0.62rem] tracking-[0.05em] leading-[1.55] text-stone-400">
        {caption}
      </figcaption>
    </figure>
  );
}
