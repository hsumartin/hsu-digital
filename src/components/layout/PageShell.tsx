import { ReactNode } from 'react';

export default function PageShell({ children }: { children: ReactNode }) {
  return <div className="pt-[4.25rem]">{children}</div>;
}
