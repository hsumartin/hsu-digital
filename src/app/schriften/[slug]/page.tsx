import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getWritingDetail } from '@/data/writings';
import GptStackDossier from '@/components/writings/dossiers/GptStackDossier';
import DecisionLayerDossier from '@/components/writings/dossiers/DecisionLayerDossier';
import KiGovernanceDossier from '@/components/writings/dossiers/KiGovernanceDossier';
import DenkarchitekturDossier from '@/components/writings/dossiers/DenkarchitekturDossier';

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'gpt-stack' },
    { slug: 'decision-layer' },
    { slug: 'ki-governance' },
    { slug: 'denkarchitektur' },
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
    alternates: { canonical: `/schriften/${slug}` },
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

  if (slug === 'gpt-stack') return <GptStackDossier writing={writing} />;
  if (slug === 'decision-layer') return <DecisionLayerDossier writing={writing} />;
  if (slug === 'ki-governance') return <KiGovernanceDossier writing={writing} />;
  if (slug === 'denkarchitektur') return <DenkarchitekturDossier writing={writing} />;

  notFound();
}
