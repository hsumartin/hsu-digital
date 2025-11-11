import React from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";
import remarkGfm from "remark-gfm";
import Figure from "../components/Figure.jsx";
import Caption from "../components/Caption.jsx";
import KnowledgeNode from "../components/KnowledgeNode.jsx";

// Alle MDX-Projekte eager laden (Vite)
const projectModules = import.meta.glob("../content/projects/*.mdx", { eager: true });

// MDX-Komponenten-Mapping (Designsystem)
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

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isStandalone = !location.state?.backgroundLocation;

  // Projekt anhand slug finden
  const found = React.useMemo(() => {
    for (const [path, mod] of Object.entries(projectModules)) {
      const fm = mod.frontmatter ?? {};
      const derived = fm.slug ?? path.split("/").pop().replace(/\.mdx$/, "");
      if (derived === slug) {
        return { Component: mod.default, frontmatter: { ...fm, slug: derived } };
      }
    }
    return null;
  }, [slug]);

  // Fallback: zurück zur Übersicht
  React.useEffect(() => {
    if (!found) navigate("/projects", { replace: true });
  }, [found, navigate]);

  if (!found) return null;

  const { Component, frontmatter } = found;

  // ESC schließt
  const closeTarget = React.useCallback(() => navigate("/projects"), [navigate]);
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeTarget();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeTarget]);

  // Scroll-Progress
  const progressRef = React.useRef(null);
  const scrollContainerId = "project-scroll";
  React.useEffect(() => {
    const el = isStandalone ? window : document.getElementById(scrollContainerId);
    if (!el) return;

    const handler = () => {
      if (!progressRef.current) return;
      let progress = 0;
      if (isStandalone) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress = max > 0 ? window.scrollY / max : 0;
      } else {
        const max = el.scrollHeight - el.clientHeight;
        progress = max > 0 ? el.scrollTop / max : 0;
      }
      progressRef.current.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    };

    handler();
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [isStandalone]);

  // Fokusmanagement (Modal)
  React.useEffect(() => {
    if (isStandalone) return;
    const prev = document.activeElement;
    const btn = document.querySelector("#close-btn");
    btn?.focus();
    return () => prev?.focus();
  }, [isStandalone]);

  const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

  // Content
  const content = (
    <motion.article
      layout
      className="bg-navy-900 text-neutral-50 rounded-2xl border border-gold-400/20
                 shadow-[0_0_40px_-10px_rgba(255,215,0,0.08)]
                 max-w-[780px] w-full px-8 sm:px-10 lg:px-12 py-12 relative"
      initial={{ scale: 0.98, opacity: 0, y: 16 }}
      animate={{ scale: 1, opacity: 1, y: 0, transition }}
      exit={{ scale: 0.985, opacity: 0, y: 12, transition }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Schließen (Modal) */}
      {!isStandalone && (
        <motion.button
          id="close-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeTarget}
          className="absolute top-5 right-5 text-gold-400 hover:text-gold-200 text-xl transition-transform"
          aria-label="Schließen"
        >
          ✕
        </motion.button>
      )}

      {/* Header */}
      <header className="text-center mb-10">
        {frontmatter.image && (
          <motion.img
            layoutId={`project-${frontmatter.slug}-image`}
            src={frontmatter.image}
            alt={frontmatter.title}
            className={`rounded-xl mb-8 shadow-xl transition-all duration-700 ease-smooth
                        ${isStandalone
                          ? "w-full max-h-[480px] object-cover"
                          : "w-full max-h-[380px] object-contain sm:object-cover"}`}
            style={{ objectPosition: "center", filter: "brightness(0.98)" }}
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.3, 1] }}
          />
        )}
        <motion.h1
          layoutId={`project-${frontmatter.slug}-title`}
          className="text-3xl md:text-4xl font-semibold text-gold-400 mb-3 tracking-tight"
        >
          {frontmatter.title}
        </motion.h1>
        <p className="text-neutral-400 text-sm">
          {frontmatter.date && new Date(frontmatter.date).toLocaleDateString("de-CH")}
          {frontmatter.client && ` · ${frontmatter.client}`}
          {frontmatter.category && ` · ${frontmatter.category}`}
        </p>
      </header>

      {/* Inhalt */}
      <section
        id={scrollContainerId}
        className={`prose prose-invert prose-gold leading-relaxed tracking-wide text-[1.05rem]
                    max-w-none ${isStandalone ? "" : "max-h-[70vh] overflow-y-auto"}
                    scrollbar-thin scrollbar-thumb-gold-500/50 hover:scrollbar-thumb-gold-400/70 scrollbar-track-transparent`}
      >
        <MDXProvider components={components}>
          <Component remarkPlugins={[remarkGfm]} />
        </MDXProvider>
      </section>

      {/* Zusatzinfos */}
      {frontmatter.tech && (
        <div className="mt-10 border-t border-gold-500/20 pt-6 text-sm text-neutral-400">
          <h3 className="text-gold-400 text-base font-semibold mb-2">Technologien</h3>
          <ul className="flex flex-wrap gap-2">
            {frontmatter.tech.map((item, i) => (
              <li key={i} className="badge-gold">{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Standalone: Zurück-Link */}
      {isStandalone && (
        <div className="mt-10 text-center">
          <motion.button
            onClick={closeTarget}
            whileHover={{ x: -4 }}
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm"
          >
            ← Zurück zu allen Projekten
          </motion.button>
        </div>
      )}
    </motion.article>
  );

  // Standalone-Seite
  if (isStandalone) {
    return (
      <main className="min-h-screen bg-navy-900">
        {/* Fortschritts-Leiste */}
        <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-50 origin-left">
          <div
            ref={progressRef}
            className="h-full bg-gold-500"
            style={{ transform: "scaleX(0)", transformOrigin: "0 50%" }}
          />
        </div>
        <div className="flex justify-center items-start px-6 sm:px-8 md:px-12 lg:px-16 py-10">
          {content}
        </div>
      </main>
    );
  }

  // Modal-Overlay
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        onClick={closeTarget}
      >
        {/* Fortschritts-Leiste */}
        <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-50 origin-left">
          <div
            ref={progressRef}
            className="h-full bg-gold-500"
            style={{ transform: "scaleX(0)", transformOrigin: "0 50%" }}
          />
        </div>
        {content}
      </motion.div>
    </AnimatePresence>
  );
}
