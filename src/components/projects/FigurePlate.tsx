import Image from 'next/image';

interface FigurePlateProps {
  label: string;
  type: string;
  src: string;
  caption: string;
  darkInset?: boolean;
  width?: number;
  height?: number;
}

export default function FigurePlate({
  label,
  type,
  src,
  caption,
  darkInset = false,
  width = 680,
  height = 408,
}: FigurePlateProps) {
  return (
    <figure className="my-12 border border-stone-200 bg-[#FBFAF7]">
      <div className="flex items-center justify-between gap-4 px-4 py-[0.72rem] border-b border-stone-100 font-mono text-[0.6rem] tracking-[0.14em] uppercase text-stone-400">
        <b className="text-gold-600 font-medium">{label}</b>
        <span>{type}</span>
      </div>
      <div className={`p-4 ${darkInset ? 'bg-stone-950' : 'bg-[#F8F7F3]'}`}>
        <Image
          src={src}
          alt={label}
          width={width}
          height={height}
          className="block w-full h-auto"
          unoptimized
        />
      </div>
      <figcaption className="px-4 py-[0.8rem] border-t border-stone-100 font-mono text-[0.62rem] tracking-[0.08em] leading-[1.55] text-stone-400">
        {caption}
      </figcaption>
    </figure>
  );
}
