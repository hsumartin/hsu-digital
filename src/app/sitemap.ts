import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://martinhsu.digital';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ueber-mich`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/schriften`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/schriften/denkarchitektur`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/schriften/gpt-stack`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/schriften/decision-layer`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/schriften/ki-governance`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/en/whitepaper/architecture-of-thinking`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/projekte`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projekte/civitasflow`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/projekte/gis-suchfunktion`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/projekte/sound-to-form`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/projekte/algorithmische-waerme`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/projekte/ohnesorg`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/projekte/mittenmang`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/verbindungen`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
