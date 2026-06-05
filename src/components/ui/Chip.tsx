interface ChipProps {
  variant?: 'neutral' | 'gold' | 'blue';
  children: React.ReactNode;
}

const variants = {
  neutral: 'border-stone-200 text-text-muted bg-paper-soft',
  gold: 'border-gold-500/45 text-gold-600 bg-gold-500/6',
  blue: 'border-blue-800/32 text-blue-800 bg-blue-800/4',
} as const;

export default function Chip({ variant = 'neutral', children }: ChipProps) {
  return (
    <span
      className={[
        'inline-flex items-center border rounded-full px-[0.72rem] py-[0.3rem]',
        'font-mono text-[0.58rem] tracking-[0.12em] uppercase',
        variants[variant],
      ].join(' ')}
    >
      {children}
    </span>
  );
}
