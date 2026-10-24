import MarkdownDossier from '@/components/writings/MarkdownDossier';
import { readContent } from '@/lib/markdown';
import { kiSeries } from '@/data/series';

export default function ProblemFramingTowardsAutonomyDossier() {
  return (
    <MarkdownDossier
      locale="en"
      markdown={readContent('en', 'whitepaper', 'from-problem-framing-towards-independent-system-design')}
      eyebrow="Methodological whitepaper · Version 1.6.1"
      title={
        <>
          From Problem Framing towards{' '}
          <em className="italic text-gold-600">Independent System Design</em>
        </>
      }
      subtitle="A Case Study of a Method-Driven, AI-Assisted Approach to Developing a Local Agent System"
      lead="A methodological whitepaper with a historical research focus. It does not demonstrate the implementation, security or effectiveness of the proposed local AI agent system."
      tags={[
        { label: 'Case study', variant: 'gold' },
        { label: 'Local agent system', variant: 'blue' },
        { label: 'GPT stack' },
        { label: 'Requirements discovery' },
      ]}
      record={[
        { key: 'Category', value: 'Whitepaper' },
        { key: 'Version', value: '1.6.1' },
        { key: 'Date', value: '23 October 2026' },
        { key: 'Artefacts', value: 'Four illustrations · Appendices A–C' },
        { key: 'Languages', value: 'Deutsch · English' },
      ]}
      connections={[
        {
          title: 'Acts in',
          items: [
            { label: 'AI & Agents' },
            { label: 'Systems thinking' },
            { label: 'Knowledge structure' },
            { label: 'Governance & ethics' },
          ],
        },
        {
          title: 'Related writings',
          items: [
            { label: 'From Tool to Thinking Architecture', href: '/en/whitepaper/architecture-of-thinking' },
            { label: 'AI and the Expansion of Human Development Opportunities', href: '/en/whitepaper/ai-and-human-development' },
          ],
        },
        {
          title: 'Versions',
          items: [{ label: 'Deutsche Fassung', href: '/schriften/methodengefuehrte-ki-systementwicklung' }],
        },
      ]}
      series={{ items: kiSeries.en, current: 1 }}
      alternate={{ href: '/schriften/methodengefuehrte-ki-systementwicklung', label: 'Deutsche Fassung', lang: 'de' }}
      prev={{ label: 'AI and the Expansion of Human Development Opportunities', kicker: 'Whitepaper', href: '/en/whitepaper/ai-and-human-development' }}
      next={{ label: 'AI as a Cultural Accelerator', kicker: 'Whitepaper', href: '/en/whitepaper/ai-as-a-cultural-accelerator' }}
    />
  );
}
