import { exec } from 'child_process';
import { writeFileSync, mkdirSync, readdirSync } from 'fs';
import { resolve } from 'path';
import axios from 'axios';

const baseUrl = 'http://localhost:4173';

// Hauptseiten definieren
const staticRoutes = ['/', '/projekte', '/beitraege', '/profil', '/kontakt'];

// Dynamische Artikel auslesen
const articlesPath = resolve('src/content/articles');
const articleFiles = readdirSync(articlesPath).filter(f => f.endsWith('.mdx'));
const articleRoutes = articleFiles.map(f => '/beitraege/' + f.replace(/\.mdx$/, ''));

// Gesamtrouten zusammenführen
const routes = [...staticRoutes, ...articleRoutes];

const prerender = async () => {
  console.log('🔄 Starte Vite Preview...');
  const server = exec('npx vite preview');

  await new Promise(resolve => setTimeout(resolve, 3000));

  for (const route of routes) {
    const url = `${baseUrl}${route}`;
    console.log(`📄 Render: ${url}`);
    try {
      const res = await axios.get(url);
      const filePath = `dist${route === '/' ? '/index' : route}/index.html`;
      mkdirSync(filePath.replace(/\\/g, '/').replace(/\/index.html$/, ''), { recursive: true });
      writeFileSync(filePath, res.data);
    } catch (err) {
      console.error(`❌ Fehler bei ${url}:`, err.message);
    }
  }

  server.kill();
  console.log('✅ Prerender abgeschlossen.');
};

prerender();
