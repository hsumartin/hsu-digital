import fs from "fs";
import path from "path";

const routes = ["/", "/beitraege", "/en/whitepaper"];
const articlesDir = path.resolve("src/content/articles");

// 🧩 Alle MDX-Dateien einlesen
if (fs.existsSync(articlesDir)) {
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith(".mdx"));

  for (const file of files) {
    const filePath = path.join(articlesDir, file);
    const content = fs.readFileSync(filePath, "utf8");

    // Sprache, Slug & Fallbacks auslesen
    const langMatch = content.match(/lang:\s*["']([^"']+)["']/);
    const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);

    const lang = langMatch ? langMatch[1] : "de";
    const slug = slugMatch ? slugMatch[1] : file.replace(/\.mdx$/, "");

    // URL-Präfix je nach Sprache
    const prefix = lang === "en" ? "/en/whitepaper" : "/beitraege";
    routes.push(`${prefix}/${slug}`);
  }
}

// 🔧 ReactSnap-Konfiguration in package.json schreiben
const pkgPath = path.resolve("package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

pkg.reactSnap = {
  source: "dist",
  crawl: false,
  inlineCss: true,
  include: routes,
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log("✅ ReactSnap include-Routen automatisch aktualisiert:", routes);

// 🗺️ Sitemap generieren
const sitemapPath = path.resolve("dist/sitemap.xml");
const baseUrl = "https://martinhsu.digital";

const urls = routes.map(r => {
  const loc = r.endsWith("/") ? r.slice(0, -1) : r;
  return `<url>
    <loc>${baseUrl}${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

fs.writeFileSync(sitemapPath, sitemap);
console.log("✅ Sitemap erstellt:", sitemapPath);
