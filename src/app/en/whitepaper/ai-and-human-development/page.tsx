import { Metadata } from 'next';
import ScrollProgress from '@/components/ueber-mich/ScrollProgress';
import AiAndHumanDevelopmentDossier from '@/components/writings/dossiers/en/AiAndHumanDevelopmentDossier';

export const metadata: Metadata = {
  title: 'Artificial Intelligence and the Expansion of Human Development Opportunities — Martin Hsu',
  description:
    'How new tools might not only extend what we can do today, but also influence the interests, experiences, and ways of thinking we develop in the future.',
  alternates: {
    canonical: '/en/whitepaper/ai-and-human-development',
    languages: { de: '/schriften/ki-menschliche-entwicklung' },
  },
};

export default function AiAndHumanDevelopmentPage() {
  return <><ScrollProgress /><AiAndHumanDevelopmentDossier /></>;
}
