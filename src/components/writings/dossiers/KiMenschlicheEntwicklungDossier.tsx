import MarkdownDossier from '@/components/writings/MarkdownDossier';
import { readContent } from '@/lib/markdown';
import { WritingDetail } from '@/data/writings';

export default function KiMenschlicheEntwicklungDossier({ writing }: { writing: WritingDetail }) {
  return (
    <MarkdownDossier
      locale="de"
      markdown={readContent('de', 'schriften', writing.slug)}
      eyebrow="Künstliche Intelligenz und Gesellschaft · Version 1.4"
      title={
        <>
          KI und die Erweiterung menschlicher{' '}
          <em className="italic text-gold-600">Entwicklungsmöglichkeiten</em>
        </>
      }
      subtitle={writing.subtitle}
      lead={writing.lead}
      tags={[
        { label: 'Menschliche Entwicklung', variant: 'gold' },
        { label: 'Mensch-KI-Zusammenarbeit', variant: 'blue' },
        { label: 'Entwicklungsoffenheit' },
        { label: 'Instrumentelle Befähigung' },
      ]}
      record={writing.record}
      connections={[
        {
          title: 'Wirkt in',
          items: [{ label: 'KI & Agenten' }, { label: 'Wissensstruktur' }, { label: 'Systemdenken' }],
        },
        {
          title: 'Verwandte Schriften',
          items: [{ label: 'Denkarchitektur', href: '/schriften/denkarchitektur' }],
        },
        {
          title: 'Fassungen',
          items: [
            { label: 'English version', href: '/en/whitepaper/ai-and-human-development' },
          ],
        },
      ]}
      alternate={{ href: '/en/whitepaper/ai-and-human-development', label: 'English version', lang: 'en' }}
      prev={{ label: 'Denkarchitektur', kicker: 'Framework', href: '/schriften/denkarchitektur' }}
    />
  );
}
