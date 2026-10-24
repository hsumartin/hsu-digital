import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getWritingDetail } from '@/data/writings';
import ScrollProgress from '@/components/ueber-mich/ScrollProgress';
import GptStackDossier from '@/components/writings/dossiers/GptStackDossier';
import DecisionLayerDossier from '@/components/writings/dossiers/DecisionLayerDossier';
import KiGovernanceDossier from '@/components/writings/dossiers/KiGovernanceDossier';
import DenkarchitekturDossier from '@/components/writings/dossiers/DenkarchitekturDossier';
import MethodengefuehrteKiSystementwicklungDossier from '@/components/writings/dossiers/MethodengefuehrteKiSystementwicklungDossier';
import KiKulturellerBeschleunigerDossier from '@/components/writings/dossiers/KiKulturellerBeschleunigerDossier';
import KiMenschlicheEntwicklungDossier from '@/components/writings/dossiers/KiMenschlicheEntwicklungDossier';

export const dynamicParams = false;

const EN_VERSIONS: Record<string, string> = {
  'ki-menschliche-entwicklung': '/en/whitepaper/ai-and-human-development',
  'ki-kultureller-beschleuniger': '/en/whitepaper/ai-as-a-cultural-accelerator',
  'methodengefuehrte-ki-systementwicklung': '/en/whitepaper/from-problem-framing-towards-technological-autonomy',
};

export function generateStaticParams() {
  return [
    { slug: 'gpt-stack' },
    { slug: 'decision-layer' },
    { slug: 'ki-governance' },
    { slug: 'denkarchitektur' },
    { slug: 'ki-menschliche-entwicklung' },
    { slug: 'methodengefuehrte-ki-systementwicklung' },
    { slug: 'ki-kultureller-beschleuniger' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const writing = getWritingDetail(slug);
  if (!writing) return {};
  return {
    title: `${writing.title} · Schrift · Martin Hsu`,
    description: writing.abstractText[0],
    alternates: {
      canonical: `/schriften/${slug}`,
      ...(slug in EN_VERSIONS && { languages: { en: EN_VERSIONS[slug] } }),
    },
  };
}

export default async function SchriftenDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWritingDetail(slug);
  if (!writing) notFound();

  if (slug === 'gpt-stack') return <><ScrollProgress /><GptStackDossier writing={writing} /></>;
  if (slug === 'decision-layer') return <><ScrollProgress /><DecisionLayerDossier writing={writing} /></>;
  if (slug === 'ki-governance') return <><ScrollProgress /><KiGovernanceDossier writing={writing} /></>;
  if (slug === 'denkarchitektur') return <><ScrollProgress /><DenkarchitekturDossier writing={writing} /></>;
  if (slug === 'ki-menschliche-entwicklung') return <><ScrollProgress /><KiMenschlicheEntwicklungDossier writing={writing} /></>;
  if (slug === 'ki-kultureller-beschleuniger') return <><ScrollProgress /><KiKulturellerBeschleunigerDossier writing={writing} /></>;
  if (slug === 'methodengefuehrte-ki-systementwicklung') return <><ScrollProgress /><MethodengefuehrteKiSystementwicklungDossier writing={writing} /></>;

  notFound();
}
