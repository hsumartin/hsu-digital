import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

const TOKEN =
  /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|https?:\/\/[^\s)]+[^\s).,;])/g;

const linkClass =
  'text-blue-800 no-underline border-b border-blue-700/[0.22] hover:text-stone-900 transition-colors break-words';

function renderLink(label: ReactNode, href: string, key: number): ReactNode {
  if (href.startsWith('/')) {
    return <Link key={key} href={href} className={linkClass}>{label}</Link>;
  }
  if (/^(https?:|mailto:)/.test(href)) {
    return (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {label}
      </a>
    );
  }
  return <Fragment key={key}>{label}</Fragment>;
}

/** Renders inline markdown (bold, italic, code, links, bare URLs) as React nodes. */
export default function Inline({ text }: { text: string }): ReactNode {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={i} className="font-medium text-stone-900"><Inline text={part.slice(2, -2)} /></strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}><Inline text={part.slice(1, -1)} /></em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="font-mono text-[0.88em] text-stone-800">{part.slice(1, -1)}</code>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) return renderLink(<Inline text={link[1]} />, link[2], i);
    if (/^https?:\/\//.test(part)) return renderLink(part, part, i);
    return <Fragment key={i}>{part}</Fragment>;
  });
}
