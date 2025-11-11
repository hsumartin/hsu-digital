import React from "react";
import { motion } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";
import Figure from "../components/Figure.jsx";
import Caption from "../components/Caption.jsx";
import KnowledgeNode from "../components/KnowledgeNode.jsx";

/**
 * ArticleLayout.jsx
 * – Dynamische Darstellung für Whitepapers / Beiträge
 * – Mit psychologischer UX-Optimierung & zwei Erlebnis-Modi:
 *     mode="default" (Reflexion) | mode="cognitive" (Aktivierung)
 */

 export default function ArticleLayout({
   Component,
   frontmatter,
   mode = "default",
   hideHeader = false,     // ← NEU: Prop mit Default
 }) {
  const isCognitive = mode === "cognitive";

  // Lokale Zusatzkomponenten als "psychologische Hooks"
  const InsightBox = ({ title, children }) => (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.6 }}
      className="my-10 p-6 rounded-xl bg-navy-800/60 border border-gold-400/20 shadow-[0_0_20px_-10px_rgba(255,215,0,0.15)]"
    >
      <h4 className="text-gold-400 font-semibold mb-3">{title}</h4>
      <div className="text-neutral-300 leading-[1.8] text-[1.1rem]">{children}</div>
    </motion.div>
  );

  const TakeawayBox = ({ children }) => (
    <motion.blockquote
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.7 }}
      className="border-l-4 border-gold-400/40 pl-5 italic text-neutral-300 leading-relaxed my-8"
    >
      {children}
    </motion.blockquote>
  );

  const components = {
    figure: (props) => (
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <Figure {...props} />
      </motion.div>
    ),
    figcaption: (props) => <Caption text={props.children} />,
    KnowledgeNode,
    InsightBox,
    TakeawayBox,
  };

  return (
    <article
      className={`
    article-content prose prose-invert
    ${isCognitive ? "leading-[1.75] text-[1.08rem]" : "leading-relaxed text-[1.05rem]"}
    tracking-wide
    prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
    prose-headings:font-semibold prose-headings:text-gold-400 prose-headings:mb-4
    prose-p:text-text-primary prose-strong:text-gold-300
    prose-blockquote:border-l-gold-400/40 prose-blockquote:text-text-secondary
    prose-li:marker:text-gold-400
    max-w-[70ch] md:max-w-[75ch] lg:max-w-[80ch]
    mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24
    selection:bg-gold-500/20 selection:text-gold-300
    bg-transparent
    transition-theme duration-slow ease-soft
  `}
    >
 {/* === Header mit Meta-Leiste === */}
{!hideHeader && (
  <>
    {/* 🧾 Meta-Leiste über Header */}
    <div className="flex justify-center text-center text-xs sm:text-sm text-neutral-400 tracking-wide uppercase mt-2 mb-6">
      <div className="flex flex-wrap items-center gap-x-3 border-t border-b border-neutral-800/40 py-2 px-4">
        {frontmatter.lang && <span>{frontmatter.lang.toUpperCase()}</span>}
        {frontmatter.readingTime && <span>• {frontmatter.readingTime}</span>}
        {frontmatter.category && (
          <span>• {frontmatter.category.replace(/^\w/, (c) => c.toUpperCase())}</span>
        )}
      </div>
    </div>

    {/* 🧭 Header-Inhalt */}
    <header className="text-center mb-12">
      {frontmatter.image && (
        <motion.img
          src={frontmatter.image}
          alt={frontmatter.imageAlt || frontmatter.title}
          className="rounded-xl shadow-[0_0_40px_-10px_rgba(255,215,0,0.08)]
                     w-[80%] md:w-[85%] lg:w-[90%] max-h-[380px] object-cover mx-auto mb-10"
          initial={{ opacity: 0.5, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.3, 1] }}
        />
      )}

      <h1 className="text-3xl md:text-4xl font-semibold text-gold-400 mb-2 tracking-tight">
        {frontmatter.title}
      </h1>

      {frontmatter.subtitle && (
        <p className="text-lg text-neutral-400 italic leading-relaxed">
          {frontmatter.subtitle}
        </p>
      )}

      <p className="text-neutral-500 text-xs mt-3">
        {frontmatter.date &&
          new Date(frontmatter.date).toLocaleDateString("de-CH")}
        {frontmatter.author && ` · ${frontmatter.author}`}
      </p>
    </header>
  </>
)}

      {/* === Inhalt === */}
      <MDXProvider components={components}>
        <Component />
      </MDXProvider>

      {/* === Footer / Abschlussgedanke === */}
      {frontmatter.caption && (
        <motion.footer
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-16 text-center text-sm text-neutral-500 italic"
        >
          {frontmatter.caption}
        </motion.footer>
      )}
    </article>
  );
}
