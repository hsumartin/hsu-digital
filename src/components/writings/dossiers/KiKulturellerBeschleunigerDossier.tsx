import MarkdownDossier from '@/components/writings/MarkdownDossier';
import { readContent } from '@/lib/markdown';
import { kiSeries } from '@/data/series';
import { WritingDetail } from '@/data/writings';

export default function KiKulturellerBeschleunigerDossier({ writing }: { writing: WritingDetail }) {
  return (
    <MarkdownDossier
      locale="de"
      markdown={readContent('de', 'schriften', writing.slug)}
      eyebrow="KI und Gesellschaft · Version 1.5"
      title={
        <>
          KI als <em className="italic text-gold-600">kultureller Beschleuniger</em>
        </>
      }
      subtitle={writing.subtitle}
      lead={writing.lead}
      tags={[
        { label: 'Erkenntnistheorie', variant: 'gold' },
        { label: 'Digitale Souveränität', variant: 'blue' },
        { label: 'Wissenschaftliche Assistenz' },
        { label: 'Mensch-KI-Zusammenarbeit' },
      ]}
      record={writing.record}
      hero={{
        src: '/assets/writings/ki-kultureller-beschleuniger/header-wissenslandschaft-transparent.webp',
        alt: 'Abstrakte Wissenslandschaft aus Wellen, Linien und Knotenpunkten',
      }}
      connections={[
        {
          title: 'Wirkt in',
          items: [
            { label: 'Bildung und Forschung' },
            { label: 'Digitale Souveränität' },
            { label: 'KI-Governance' },
            { label: 'Öffentliche Verwaltung' },
          ],
        },
        {
          title: 'Verwandte Schriften',
          items: [
            { label: 'Menschliche Entwicklungsmöglichkeiten', href: '/schriften/ki-menschliche-entwicklung' },
            { label: 'Von der Problemstellung zur eigenständigen Systemkonzeption', href: '/schriften/methodengefuehrte-ki-systementwicklung' },
            { label: 'KI-Governance', href: '/schriften/ki-governance' },
            { label: 'Decision Layer', href: '/schriften/decision-layer' },
          ],
        },
        {
          title: 'Fassungen',
          items: [{ label: 'English version', href: '/en/whitepaper/ai-as-a-cultural-accelerator' }],
        },
      ]}
      handoffs={[
        {
          text: 'Ob KI gesellschaftlich wertvolle Erkenntnisprozesse unterstützt, hängt auch von nachvollziehbaren Verantwortlichkeiten und handlungsfähigen Organisationen ab. «KI-Governance in regulierten Umgebungen» vertieft die organisatorische Perspektive auf Kontrolle, Entscheidungsfähigkeit und verantwortlichen Betrieb.',
          href: '/schriften/ki-governance',
          label: 'KI-Governance in regulierten Umgebungen',
        },
        {
          text: 'Gesellschaftliche Selbstbestimmung beginnt nicht erst nach der Einführung eines KI-Systems. Der «Decision Layer» behandelt die vorgelagerte Frage, unter welchen funktionalen, wirtschaftlichen und risikobezogenen Voraussetzungen KI überhaupt das geeignete Mittel ist.',
          href: '/schriften/decision-layer',
          label: 'Decision Layer',
        },
      ]}
      series={{ items: kiSeries.de, current: 2 }}
      alternate={{ href: '/en/whitepaper/ai-as-a-cultural-accelerator', label: 'English version', lang: 'en' }}
      prev={{ label: 'Von der Problemstellung zur eigenständigen Systemkonzeption', kicker: 'Whitepaper', href: '/schriften/methodengefuehrte-ki-systementwicklung' }}
    />
  );
}
