
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://martinhsu.digital';
const staticRoutes = ['/', '/projekte', '/beitraege', '/profil', '/kontakt'];

const articlesDir = './src/content/articles';
const articleRoutes = fs.readdirSync(articlesDir)
  .filter(file => file.endsWith('.mdx'))
  .map(file => `/beitraege/${file.replace(/\.mdx$/, '')}`);

const allRoutes = [...staticRoutes, ...articleRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync('./dist/sitemap.xml', sitemap);
console.log('✅ Sitemap erstellt unter ./dist/sitemap.xml');
