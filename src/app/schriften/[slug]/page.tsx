import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getWritingDetail } from '@/data/writings';
import GptStackDossier from '@/components/writings/dossiers/GptStackDossier';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: 'gpt-stack' }];
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

  return <GptStackDossier writing={writing} />;
}
