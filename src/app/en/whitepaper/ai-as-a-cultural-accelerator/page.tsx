import { Metadata } from 'next';
import ScrollProgress from '@/components/ueber-mich/ScrollProgress';
import AiAsACulturalAcceleratorDossier from '@/components/writings/dossiers/en/AiAsACulturalAcceleratorDossier';

export const metadata: Metadata = {
  title: 'Artificial Intelligence as a Cultural Accelerator — Martin Hsu',
  description:
    'Societal conditions for expanding human knowledge, collaboration, and development: when does AI assistance lead to verifiable knowledge and collective benefit?',
  alternates: {
    canonical: '/en/whitepaper/ai-as-a-cultural-accelerator',
    languages: { de: '/schriften/ki-kultureller-beschleuniger' },
  },
};

export default function AiAsACulturalAcceleratorPage() {
  return <><ScrollProgress /><AiAsACulturalAcceleratorDossier /></>;
}
