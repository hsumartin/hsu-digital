import Link from 'next/link';

interface ConnectionCol {
  title: string;
  items: Array<{ label: string; href?: string }>;
}

interface ProjectConnectionsProps {
  cols: ConnectionCol[];
}

export default function ProjectConnections({ cols }: ProjectConnectionsProps) {
  return (
    <div className="border border-stone-200 bg-[#F8F7F3] grid grid-cols-3 gap-px mt-[1.8rem] max-[760px]:grid-cols-1">
      {cols.map((col) => (
        <div key={col.title} className="bg-[#FBFAF7] p-[1.25rem_1.35rem]">
          <h3 className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-gold-600 mb-[0.85rem]">
            {col.title}
          </h3>
          <ul className="list-none grid gap-[0.55rem]">
            {col.items.map((item) => (
              <li key={item.label} className="text-[0.9rem] leading-[1.5] text-stone-700 font-light">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-blue-700 no-underline border-b border-blue-700/[0.22]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
