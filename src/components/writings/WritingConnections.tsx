import Link from 'next/link';

interface ConnectionItem {
  label: string;
  href?: string;
}

interface ConnectionCol {
  title: string;
  items: ConnectionItem[];
}

interface WritingConnectionsProps {
  cols: ConnectionCol[];
}

export default function WritingConnections({ cols }: WritingConnectionsProps) {
  return (
    <div className="border border-stone-200 bg-[#F8F7F3] grid grid-cols-3 gap-px bg-[image:linear-gradient(var(--color-stone-100,#E5E1D8),var(--color-stone-100,#E5E1D8))] [background-size:1px_100%] mt-[1.8rem] max-[800px]:grid-cols-1">
      {cols.map((col) => (
        <div key={col.title} className="bg-[#FBFAF7] p-[1.25rem_1.35rem]">
          <h3 className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-gold-600 mb-[0.85rem]">
            {col.title}
          </h3>
          <div className="flex flex-col gap-[0.55rem]">
            {col.items.map((item) => (
              <span key={item.label} className="text-[0.9rem] leading-[1.5] text-stone-700 font-light">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-blue-700 no-underline border-b border-blue-700/[0.22] hover:text-stone-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
