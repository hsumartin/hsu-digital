import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";
import Figure from "../components/Figure.jsx";
import Caption from "../components/Caption.jsx";
import KnowledgeNode from "../components/KnowledgeNode.jsx";
import ArticleLayout from "../layouts/ArticleLayout.jsx";
import MetaTags from "../components/MetaTags.jsx";
import ModalFrame from "../components/ModalFrame.jsx";
import ScrollContainer from "../components/ScrollContainer.jsx";
import ProgressIndicator from "../components/ProgressIndicator.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import CloseButton from "../components/CloseButton.jsx";

// 🧠 MDX-Komponenten-Mapping
const components = {
  figure: (props) => <Figure {...props} />,
  figcaption: (props) => <Caption text={props.children} />,
  img: (props) => (
    <img
      {...props}
      className="rounded-xl shadow-xl mx-auto my-6 transition-all duration-700 ease-smooth
                 hover:scale-[1.02] hover:brightness-105"
      loading="lazy"
    />
  ),
  KnowledgeNode,
};

// 🔍 Alle MDX-Artikel laden
const articleModules = import.meta.glob("../content/articles/*.mdx", { eager: true });

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isStandalone = !location.state?.backgroundLocation;

  // 🔎 Artikel finden
  const found = React.useMemo(() => {
    for (const [path, mod] of Object.entries(articleModules)) {
      const fm = mod.frontmatter ?? {};
      const derived = fm.slug || path.split("/").pop().replace(/\.mdx$/, "");
      if (derived === slug) return { Component: mod.default, frontmatter: { ...fm, slug: derived } };
    }
    return null;
  }, [slug]);

  React.useEffect(() => {
    if (!found) navigate("/beitraege", { replace: true });
  }, [found, navigate]);

  if (!found) return null;
  const { Component, frontmatter } = found;

  // 🔙 ESC = Schließen + Scroll-Restore + Modal-Scrollsperre
const closeTarget = React.useCallback(() => {
  if (location.state?.backgroundLocation) {
   const y = sessionStorage.getItem("scrollY");
   sessionStorage.setItem("skipScrollTop", "1");   // ← ScrollToTop überspringen
   navigate(-1);

    // Wiederherstellen erst nach sicherem DOM-Render
    const restoreScroll = () => {
      if (y) window.scrollTo({ top: parseFloat(y), behavior: "instant" });
    };

    // Zwei garantierte Frames Verzögerung
    requestAnimationFrame(() => {
      setTimeout(restoreScroll, 25);
    });
  } else {
    navigate("/beitraege");
  }
}, [navigate, location]);

React.useEffect(() => {
  // ESC zum Schließen
  const onKey = (e) => e.key === "Escape" && closeTarget();
  window.addEventListener("keydown", onKey);

  return () => {
    window.removeEventListener("keydown", onKey);
  };
}, [closeTarget]);

  // ✨ Inhalt
  const content = (
    <motion.article
  layout
  className="relative bg-transparent text-text-primary
                 w-full max-w-[1020px] lg:max-w-[1080px]
                 px-8 sm:px-10 lg:px-12 py-14 mx-auto
                 leading-relaxed font-sans transition-all duration-700 ease-smooth"
      initial={{ scale: 0.98, opacity: 0, y: 16 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.985, opacity: 0, y: 12 }}
>

      <MDXProvider components={components}>
  <ArticleLayout
    Component={Component}
    frontmatter={frontmatter}
    hideHeader={false}  // Sicherstellen, dass der Header im Modal angezeigt wird
  />
      </MDXProvider>
    </motion.article>
  );

  // 🌍 Standalone-Seite
  if (isStandalone) {
    return (
      <>
        <MetaTags frontmatter={frontmatter} type="article" />
        <main className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900/95 to-surface-overlay
                 text-text-primary transition-theme duration-700">
{/* 🖼️ Hero-Image nur in Standalone */}
{(frontmatter.image || frontmatter.ogImage) && (
  <div className="w-full flex justify-center bg-navy-950/40 border-b border-gold-400/10">
    <img
      src={frontmatter.image || frontmatter.ogImage}
      alt={frontmatter.imageAlt || frontmatter.title}
      width="1200"
      height="675"
      loading="lazy"
      className="w-full max-w-6xl object-cover rounded-none md:rounded-md"
    />
  </div>
)}
{/* 🧭 Ruhiger Fokus-Header */}
<header className="bg-gradient-to-b from-navy-950 via-navy-900 to-transparent text-center pt-20 pb-14 px-6 border-b border-gold-400/10">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gold-400 mb-3 tracking-tight">
    {frontmatter.title}
  </h1>
  {frontmatter.subtitle && (
    <p className="text-lg text-neutral-400 italic max-w-2xl mx-auto leading-relaxed">
      {frontmatter.subtitle}
    </p>
  )}
  <div className="flex flex-wrap justify-center items-center gap-x-3 text-xs sm:text-sm text-neutral-500 mt-5 uppercase tracking-wide">
    {frontmatter.author && <span>{frontmatter.author}</span>}
    {frontmatter.date && (
      <span>{new Date(frontmatter.date).toLocaleDateString("de-DE", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}</span>
    )}
    {frontmatter.category && <span>• {frontmatter.category}</span>}
    {frontmatter.readingTime && <span>• {frontmatter.readingTime}</span>}
  </div>

  {/* Dezente Trennlinie */}
  <div className="mx-auto mt-6 w-[70%] h-[1px] bg-gradient-to-r from-gold-400/0 via-gold-400/20 to-gold-400/0" />
</header>

{/* 🧾 Meta unter dem Header */}
<section className="mt-10 sm:mt-12 text-center text-sm text-neutral-500 space-x-3">
  {frontmatter.author && <span>{frontmatter.author}</span>}
  {frontmatter.date && (
    <span>
      {new Date(frontmatter.date).toLocaleDateString("de-DE", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </span>
  )}
  {frontmatter.category && <span>• {frontmatter.category}</span>}
  {frontmatter.readingTime && <span>• {frontmatter.readingTime}</span>}
</section>

{/* Artikel-Inhalt */}
<div className="flex justify-center items-start px-6 sm:px-8 md:px-12 lg:px-16 py-10">
  {content}
</div>
        </main>
      </>
    );
  }

  // 🪟 Modal-Ansicht (modern)
  return (
  <AnimatePresence mode="wait" initial={false}>
    <ModalFrame onClose={closeTarget}>
  <CloseButton onClose={closeTarget} />   {/* ← NEU */}
      <ProgressIndicator />
      <ScrollContainer>
        <MDXProvider components={components}>
          <ArticleLayout
            Component={Component}
            frontmatter={frontmatter}
            hideHeader={false}
          />
        </MDXProvider>
      </ScrollContainer>

      {/* 🔝 Scroll-To-Top Button */}
      <ScrollToTopButton />
    </ModalFrame>
  </AnimatePresence>
);
}
