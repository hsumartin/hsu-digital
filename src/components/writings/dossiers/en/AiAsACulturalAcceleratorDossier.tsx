import MarkdownDossier from '@/components/writings/MarkdownDossier';
import { readContent } from '@/lib/markdown';
import { kiSeries } from '@/data/series';

export default function AiAsACulturalAcceleratorDossier() {
  return (
    <MarkdownDossier
      locale="en"
      markdown={readContent('en', 'whitepaper', 'ai-as-a-cultural-accelerator')}
      eyebrow="AI and Society · Version 1.5"
      title={
        <>
          AI as a <em className="italic text-gold-600">Cultural Accelerator</em>
        </>
      }
      subtitle="Societal Conditions for Expanding Human Knowledge, Collaboration, and Development"
      lead="The societal significance of AI is decided not by its performance alone, but by the conditions under which individual assistance can give rise to verifiable knowledge, collective understanding and societal benefit."
      tags={[
        { label: 'Epistemology', variant: 'gold' },
        { label: 'Digital sovereignty', variant: 'blue' },
        { label: 'Scientific assistance' },
        { label: 'Human–AI collaboration' },
      ]}
      record={[
        { key: 'Category', value: 'Whitepaper' },
        { key: 'Version', value: '1.5' },
        { key: 'Reading time', value: 'approx. 35–45 min.' },
        { key: 'Artefacts', value: 'Three figures' },
        { key: 'Languages', value: 'Deutsch · English' },
      ]}
      hero={{
        src: '/assets/writings/ai-as-a-cultural-accelerator/header-wissenslandschaft-transparent.webp',
        alt: 'Abstract knowledge landscape of waves, lines and nodes',
      }}
      connections={[
        {
          title: 'Acts in',
          items: [
            { label: 'Education and research' },
            { label: 'Digital sovereignty' },
            { label: 'AI governance' },
            { label: 'Public administration' },
          ],
        },
        {
          title: 'Related writings',
          items: [
            { label: 'AI and the Expansion of Human Development Opportunities', href: '/en/whitepaper/ai-and-human-development' },
            { label: 'From Problem Framing towards Technological Autonomy', href: '/en/whitepaper/from-problem-framing-towards-technological-autonomy' },
          ],
        },
        {
          title: 'Versions',
          items: [{ label: 'Deutsche Fassung', href: '/schriften/ki-kultureller-beschleuniger' }],
        },
      ]}
      series={{ items: kiSeries.en, current: 2 }}
      alternate={{ href: '/schriften/ki-kultureller-beschleuniger', label: 'Deutsche Fassung', lang: 'de' }}
      prev={{ label: 'From Problem Framing towards Technological Autonomy', kicker: 'Whitepaper', href: '/en/whitepaper/from-problem-framing-towards-technological-autonomy' }}
    />
  );
}
