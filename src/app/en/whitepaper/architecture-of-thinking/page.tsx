import { Metadata } from 'next';
import ScrollProgress from '@/components/ueber-mich/ScrollProgress';
import ArchitectureOfThinkingDossier from '@/components/writings/dossiers/en/ArchitectureOfThinkingDossier';

export const metadata: Metadata = {
  title: 'From Tool to Thinking Architecture — Martin Hsu',
  description:
    'The GPT Stack, the USE+ Framework™, and the PromptPilot make thinking visible, structured, and governable — the basis for reproducible insight.',
  alternates: {
    canonical: '/en/whitepaper/architecture-of-thinking',
  },
};

export default function ArchitectureOfThinkingPage() {
  return <><ScrollProgress /><ArchitectureOfThinkingDossier /></>;
}
