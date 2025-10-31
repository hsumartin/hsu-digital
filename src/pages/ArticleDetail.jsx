// src/pages/ArticleDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";

import KnowledgeNode from "../components/KnowledgeNode";

// MDX-kompatible Komponenten registrieren
const components = {
  KnowledgeNode,
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [frontmatter, setFrontmatter] = useState(null);

  useEffect(() => {
    // Dynamisches Importieren des MDX-Inhalts
    import(`../content/articles/${slug}.mdx?raw`)
      .then((res) => {
        const file = matter(res.default);
        setContent(file.content);
        setFrontmatter(file.data);
      })
      .catch(() => {
        setContent(null);
      });
  }, [slug]);

  // Falls kein Artikel gefunden wurde
  if (!content && !frontmatter) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-navy-900 text-neutral-50 text-center px-8">
        <h1 className="text-3xl font-semibold text-gold-500 mb-4">
          Beitrag nicht gefunden
        </h1>
        <p className="text-neutral-200 mb-8">
          Der gewünschte Artikel konnte nicht geladen werden.
        </p>
        <Link
          to="/beitraege"
          className="border border-gold-500 text-neutral-50 px-6 py-3 rounded-md transition-all duration-300 hover:bg-gold-500 hover:text-navy-900"
        >
          Zurück zu den Beiträgen
        </Link>
      </div>
    );
  }

  // Wenn Artikel gefunden wurde
  return (
    <article className="bg-navy-900 text-neutral-50 min-h-screen px-8 md:px-20 py-24">
      {/* Hero Image */}
      {frontmatter?.image && (
        <div className="max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-gold/20">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-72 object-cover opacity-90"
          />
        </div>
      )}

      {/* Header */}
      <header className="max-w-3xl mx-auto mb-12">
        {frontmatter?.category && (
          <span className="inline-block mb-3 text-xs uppercase tracking-wide text-gold-300 bg-navy-800 px-2 py-1 rounded-md">
            {frontmatter.category}
          </span>
        )}
        <h1 className="text-4xl font-semibold text-gold-500 mb-4">
          {frontmatter?.title}
        </h1>
        {frontmatter?.author && (
          <p className="text-xs text-neutral-400 mb-2">
            {frontmatter.author}
            {frontmatter.date && (
              <>
                {" "}
                ·{" "}
                {new Date(frontmatter.date).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </>
            )}
          </p>
        )}
        {frontmatter?.excerpt && (
          <p className="text-neutral-200">{frontmatter.excerpt}</p>
        )}
      </header>

      {/* MDX Content */}
      <section className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <MDXProvider components={components}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </MDXProvider>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-16">
        <Link
          to="/beitraege"
          className="border border-gold-500 text-neutral-50 px-6 py-3 rounded-md transition-all duration-300 hover:bg-gold-500 hover:text-navy-900"
        >
          Zurück zu den Beiträgen
        </Link>
      </footer>
    </article>
  );
}
