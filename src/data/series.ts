/** Recommended reading order of the three whitepapers on AI and human development. */
export interface SeriesItem {
  label: string;
  href: string;
}

export const kiSeries: Record<'de' | 'en', SeriesItem[]> = {
  de: [
    { label: 'Menschliche Entwicklungsmöglichkeiten', href: '/schriften/ki-menschliche-entwicklung' },
    { label: 'Methodengeführte KI-Systementwicklung', href: '/schriften/methodengefuehrte-ki-systementwicklung' },
    { label: 'KI als kultureller Beschleuniger', href: '/schriften/ki-kultureller-beschleuniger' },
  ],
  en: [
    { label: 'AI and the Expansion of Human Development Opportunities', href: '/en/whitepaper/ai-and-human-development' },
    { label: 'From Problem Framing towards Independent System Design', href: '/en/whitepaper/from-problem-framing-towards-independent-system-design' },
    { label: 'AI as a Cultural Accelerator', href: '/en/whitepaper/ai-as-a-cultural-accelerator' },
  ],
};
