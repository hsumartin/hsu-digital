import Image from 'next/image';

interface WritingFigureProps {
  label: string;
  type: string;
  alt?: string;
  /** When set, the figure links to the full-size file in a new tab. */
  zoomLabel?: string;
  src: string;
  caption: React.ReactNode;
  width?: number;
  height?: number;
  /** Optional CSS max-height in px; image will be constrained with object-contain */
  maxHeight?: number;
}

export default function WritingFigure({
  label,
  type,
  alt,
  zoomLabel,
  src,
  caption,
  width = 1500,
  height = 900,
  maxHeight,
}: WritingFigureProps) {
  return (
    <figure className="my-10 border border-stone-200 bg-[#FBFAF7]">
      <div className="flex justify-between gap-4 items-baseline px-4 py-[0.75rem] border-b border-stone-100 font-mono text-[0.68rem] tracking-[0.14em] uppercase">
        <span className="text-gold-700">{label}</span>
        <span className="text-stone-500">
          {zoomLabel ? (
            <a href={src} target="_blank" rel="noopener noreferrer" className="text-blue-800 no-underline hover:text-stone-900 transition-colors">
              {zoomLabel}
            </a>
          ) : (
            type
          )}
        </span>
      </div>
      {/* overflow-x-auto keeps horizontal scroll contained to this box only */}
      <div className="bg-[#F8F7F3] p-4 overflow-x-auto">
        <Image
          src={src}
          alt={alt ?? label}
          width={width}
          height={height}
          className="block w-full max-w-full"
          style={
            maxHeight
              ? { maxHeight, objectFit: 'contain', height: 'auto' }
              : { height: 'auto' }
          }
          unoptimized
        />
      </div>
      <figcaption className="border-t border-stone-100 px-4 py-[0.72rem] font-mono text-[0.7rem] tracking-[0.04em] leading-[1.6] text-stone-600">
        {caption}
      </figcaption>
    </figure>
  );
}
