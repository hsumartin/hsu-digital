import { Metadata } from 'next';
import ScrollProgress from '@/components/ueber-mich/ScrollProgress';
import ProblemFramingTowardsAutonomyDossier from '@/components/writings/dossiers/en/ProblemFramingTowardsAutonomyDossier';

export const metadata: Metadata = {
  title: 'From Problem Framing towards Independent System Design — Martin Hsu',
  description:
    'A source-grounded case study of a method-driven, AI-assisted approach to developing a local agent system.',
  alternates: {
    canonical: '/en/whitepaper/from-problem-framing-towards-independent-system-design',
    languages: { de: '/schriften/methodengefuehrte-ki-systementwicklung' },
  },
};

export default function ProblemFramingTowardsAutonomyPage() {
  return <><ScrollProgress /><ProblemFramingTowardsAutonomyDossier /></>;
}
