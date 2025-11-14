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
import Header from "../components/Header";

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
        <main className="bg-navy-900 text-neutral-50 min-h-screen overflow-x-hidden">

{/* Artikel-Inhalt */}
<div className="flex justify-center items-start px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10">
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
{/* <CloseButton onClick={closeTarget} /> */}
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
