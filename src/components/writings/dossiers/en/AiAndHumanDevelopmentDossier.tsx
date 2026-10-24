import MarkdownDossier from '@/components/writings/MarkdownDossier';
import { readContent } from '@/lib/markdown';
import { kiSeries } from '@/data/series';

const LEAD =
  'How new tools might not only extend what we can do today, but also influence the interests, experiences, and ways of thinking we develop in the future.';

export default function AiAndHumanDevelopmentDossier() {
  return (
    <MarkdownDossier
      locale="en"
      markdown={readContent('en', 'whitepaper', 'ai-and-human-development')}
      eyebrow="Artificial Intelligence and Society · Version 1.4"
      title={
        <>
          AI and the Expansion of Human{' '}
          <em className="italic text-gold-600">Development Opportunities</em>
        </>
      }
      subtitle="Between ability, enablement and new interests"
      lead={LEAD}
      tags={[
        { label: 'Human development', variant: 'gold' },
        { label: 'Human–AI collaboration', variant: 'blue' },
        { label: 'Developmental openness' },
        { label: 'Instrumental empowerment' },
      ]}
      record={[
        { key: 'Category', value: 'Whitepaper' },
        { key: 'Version', value: '1.4' },
        { key: 'Topic', value: 'AI and society' },
        { key: 'Artefacts', value: 'Three dimensions · Feedback loop' },
        { key: 'Languages', value: 'Deutsch · English' },
      ]}
      connections={[
        {
          title: 'Acts in',
          items: [{ label: 'AI & Agents' }, { label: 'Knowledge structure' }, { label: 'Systems thinking' }],
        },
        {
          title: 'Related writings',
          items: [
            { label: 'From Problem Framing towards Technological Autonomy', href: '/en/whitepaper/from-problem-framing-towards-technological-autonomy' },
            { label: 'AI as a Cultural Accelerator', href: '/en/whitepaper/ai-as-a-cultural-accelerator' },
            { label: 'From Tool to Thinking Architecture', href: '/en/whitepaper/architecture-of-thinking' },
          ],
        },
        {
          title: 'Versions',
          items: [{ label: 'Deutsche Fassung', href: '/schriften/ki-menschliche-entwicklung' }],
        },
      ]}
      series={{ items: kiSeries.en, current: 0 }}
      alternate={{ href: '/schriften/ki-menschliche-entwicklung', label: 'Deutsche Fassung', lang: 'de' }}
      next={{ label: 'From Problem Framing towards Technological Autonomy', kicker: 'Whitepaper', href: '/en/whitepaper/from-problem-framing-towards-technological-autonomy' }}
      prev={{ label: 'From Tool to Thinking Architecture', kicker: 'Framework', href: '/en/whitepaper/architecture-of-thinking' }}
    />
  );
}
