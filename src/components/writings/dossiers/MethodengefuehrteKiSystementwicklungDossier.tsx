import MarkdownDossier from '@/components/writings/MarkdownDossier';
import { readContent } from '@/lib/markdown';
import { kiSeries } from '@/data/series';
import { WritingDetail } from '@/data/writings';

export default function MethodengefuehrteKiSystementwicklungDossier({ writing }: { writing: WritingDetail }) {
  return (
    <MarkdownDossier
      locale="de"
      markdown={readContent('de', 'schriften', writing.slug)}
      eyebrow="Methodisches Whitepaper · Version 1.6.1"
      title={
        <>
          Von der Problemstellung zur{' '}
          <em className="italic text-gold-600">eigenständigen Systemkonzeption</em>
        </>
      }
      subtitle={writing.subtitle}
      lead={writing.lead}
      tags={[
        { label: 'Fallstudie', variant: 'gold' },
        { label: 'Lokales Agentensystem', variant: 'blue' },
        { label: 'GPT-Stack' },
        { label: 'Requirements Discovery' },
      ]}
      record={writing.record}
      connections={[
        {
          title: 'Wirkt in',
          items: [
            { label: 'KI & Agenten' },
            { label: 'Systemdenken' },
            { label: 'Wissensstruktur' },
            { label: 'Governance & Ethik' },
          ],
        },
        {
          title: 'Verwandte Schriften',
          items: [
            { label: 'GPT-Stack', href: '/schriften/gpt-stack' },
            { label: 'Denkarchitektur', href: '/schriften/denkarchitektur' },
            { label: 'KI-Governance', href: '/schriften/ki-governance' },
            { label: 'Menschliche Entwicklungsmöglichkeiten', href: '/schriften/ki-menschliche-entwicklung' },
          ],
        },
        {
          title: 'Fassungen',
          items: [{ label: 'English version', href: '/en/whitepaper/from-problem-framing-towards-independent-system-design' }],
        },
      ]}
      handoffs={[
        {
          text: 'Die Fallstudie rekonstruiert unter anderem den Weg von spezialisierten Custom GPTs zu einer übergreifenden Systemkonzeption. Der Text «GPT-Stack» erläutert den konzeptionellen Ansatz modular organisierter KI-Rollen und Arbeitsprozesse. Er ist als verwandtes Denkmodell zu lesen, nicht als Nachweis einer bereits realisierten lokalen Agentenarchitektur.',
          href: '/schriften/gpt-stack',
          label: 'GPT-Stack',
        },
        {
          text: 'Die im Entwicklungsprozess sichtbar gewordenen Fragen nach Rollen, Wissensorganisation und Übergaben stehen in Verbindung mit der «Denkarchitektur». Dort wird vertieft, weshalb die Strukturierung von Arbeits- und Prüfprozessen für den Einsatz von KI entscheidend sein kann.',
          href: '/schriften/denkarchitektur',
          label: 'Vom Tool zur Denkarchitektur',
        },
      ]}
      series={{ items: kiSeries.de, current: 1 }}
      alternate={{
        href: '/en/whitepaper/from-problem-framing-towards-independent-system-design',
        label: 'English version',
        lang: 'en',
      }}
      prev={{ label: 'Menschliche Entwicklungsmöglichkeiten', kicker: 'Whitepaper', href: '/schriften/ki-menschliche-entwicklung' }}
      next={{ label: 'KI als kultureller Beschleuniger', kicker: 'Whitepaper', href: '/schriften/ki-kultureller-beschleuniger' }}
    />
  );
}
