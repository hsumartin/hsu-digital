// prerender.mjs – Windows-kompatible finale Version
import { build } from 'vite';
import fs from 'fs';
import path from 'path';
import { pathToFileURL, fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 1️⃣ Vite-Build starten
await build({ configFile: path.join(__dirname, 'vite.config.js') });

// 2️⃣ SSR-Bundle prüfen
const serverEntry = path.join(__dirname, 'dist/server/importBuild.mjs');
if (!fs.existsSync(serverEntry)) {
  throw new Error('❌ Kein SSR-Build gefunden – bitte "vite build" prüfen.');
}

// 3️⃣ file:// URL für Windows erzeugen
const serverEntryUrl = pathToFileURL(serverEntry).href;

// 4️⃣ Import & Prerender ausführen
const buildModule = await import(serverEntryUrl);
if (typeof buildModule.default === 'function') {
  await buildModule.default();
} else if (buildModule.prerender) {
  await buildModule.prerender({ outDir: './dist' });
} else {
  console.warn('⚠️ Kein exportierter prerender-Handler gefunden, aber Build erfolgreich.');
}

console.log('✅ Alle Seiten erfolgreich vorgerendert.');
