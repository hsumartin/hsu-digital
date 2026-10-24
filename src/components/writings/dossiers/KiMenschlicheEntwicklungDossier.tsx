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
          items: [
            { label: 'KI als kultureller Beschleuniger', href: '/schriften/ki-kultureller-beschleuniger' },
            { label: 'Denkarchitektur', href: '/schriften/denkarchitektur' },
          ],
        },
        {
          title: 'Fassungen',
          items: [
            { label: 'English version', href: '/en/whitepaper/ai-and-human-development' },
          ],
        },
      ]}
      handoffs={[
        {
          text: 'Die Erweiterung individueller Handlungsmöglichkeiten ist nicht gleichbedeutend mit gesellschaftlichem Erkenntnisgewinn. «Künstliche Intelligenz als kultureller Beschleuniger» untersucht, welche wissenschaftlichen, institutionellen und technischen Voraussetzungen hinzukommen müssen, damit neu erschlossene Möglichkeiten zu überprüfbarem und gemeinsam nutzbarem Wissen beitragen können.',
          href: '/schriften/ki-kultureller-beschleuniger',
          label: 'KI als kultureller Beschleuniger',
        },
      ]}
      alternate={{ href: '/en/whitepaper/ai-and-human-development', label: 'English version', lang: 'en' }}
      prev={{ label: 'Denkarchitektur', kicker: 'Framework', href: '/schriften/denkarchitektur' }}
    />
  );
}
