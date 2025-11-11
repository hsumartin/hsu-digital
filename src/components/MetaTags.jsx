import React from "react";
import { Helmet } from "react-helmet-async";

export default function MetaTags({ frontmatter = {}, type = "article" }) {
  const base = "https://martinhsu.digital";
  const {
    title,
    excerpt,
    teaser,
    subtitle,
    canonicalUrl,
    ogImage,
    image,
    author,
    date,
    seo,
    lang,
  } = frontmatter;

  const description = excerpt || teaser || subtitle || "";
  const url = canonicalUrl || `${base}/beitraege/${frontmatter.slug || ""}`;
  const img = ogImage || image || `${base}/images/og/default-1200x630.webp`;
  const locale = seo?.locale || (lang === "en" ? "en_US" : "de_DE");
  const pageType = seo?.type || type || "Article";
  const siteName = "Martin Hsu Digital";

  // JSON-LD strukturierte Daten
  const structuredData = {
    "@context": "https://schema.org",
    "@type": pageType,
    headline: title,
    description,
    author: { "@type": "Person", name: author || "Martin Hsu" },
    datePublished: date,
    image: img,
    inLanguage: locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${base}/icons/favicon-512x512.png`,
      },
    },
  };

  // 🌍 hreflang-Verknüpfungen (DE ↔ EN)
  const hreflangLinks = [];

  if (lang === "de") {
    // deutsche Seite → englisches Gegenstück
    const altUrl = canonicalUrl
      .replace("/beitraege/", "/en/whitepaper/")
      .replace("-denkarchitektur", "-of-thinking");
    hreflangLinks.push(
      { lang: "en", href: altUrl },
      { lang: "de", href: canonicalUrl },
      { lang: "x-default", href: canonicalUrl }
    );
  } else if (lang === "en") {
    // englische Seite → deutsches Gegenstück
    const altUrl = canonicalUrl
      .replace("/en/whitepaper/", "/beitraege/")
      .replace("-of-thinking", "-denkarchitektur");
    hreflangLinks.push(
      { lang: "de", href: altUrl },
      { lang: "en", href: canonicalUrl },
      { lang: "x-default", href: canonicalUrl }
    );
  }

  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* hreflang alternates */}
      {hreflangLinks.map(link => (
        <link
          key={link.lang}
          rel="alternate"
          hrefLang={link.lang}
          href={link.href}
        />
      ))}

      {/* OpenGraph */}
      <meta property="og:type" content={pageType.toLowerCase()} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
