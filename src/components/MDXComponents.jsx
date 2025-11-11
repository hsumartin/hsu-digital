// src/components/MDXComponents.js

import React from "react";
import remarkGfm from "remark-gfm";

import Caption from "./Caption";
import Figure from "./Figure";
import KnowledgeNode from "./KnowledgeNode";

// --- MDX Optionen (Markdown Erweiterungen wie Tabellen, Checkboxes, usw.) ---
export const mdxOptions = {
  remarkPlugins: [remarkGfm],
};

// --- Definierte MDX-Komponenten für den MDXProvider ---
const MDXComponents = {
  // 🔹 Eigene Komponenten
  Caption,
  Figure,
  KnowledgeNode,

  // 🔹 Überschriften
  h1: (props) => (
    <h1
      {...props}
      className="text-gold-400 text-4xl md:text-5xl font-semibold mt-12 mb-6 tracking-tight leading-tight"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="text-gold-300 text-3xl md:text-4xl font-medium mt-10 mb-4 tracking-tight leading-snug"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="text-gold-200 text-2xl md:text-3xl font-medium mt-8 mb-3 tracking-tight"
    />
  ),

  // 🔹 Text & Absätze
  p: (props) => (
    <p
      {...props}
      className="text-text-primary leading-relaxed mb-6 text-[1.1rem] font-sans"
    />
  ),

  // 🔹 Links
  a: (props) => (
    <a
      {...props}
      className="text-gold-400 hover:text-gold-300 underline decoration-gold-400/30 transition-colors duration-300"
    />
  ),

  // 🔹 Zitate
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-gold-400/50 pl-6 italic text-text-secondary my-8 leading-relaxed"
    />
  ),

  // 🔹 Listen
  ul: (props) => (
    <ul
      {...props}
      className="list-disc list-outside ml-6 text-neutral-200 mb-6 marker:text-gold-400"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="list-decimal list-outside ml-6 text-neutral-200 mb-6 marker:text-gold-400"
    />
  ),
  li: (props) => (
    <li {...props} className="mb-2 leading-relaxed" />
  ),

  // 🔹 Codeblöcke
  code: (props) => (
    <code
      {...props}
      className="bg-neutral-800 text-gold-300 rounded-md px-1.5 py-0.5 text-sm font-mono"
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="bg-neutral-900 text-gold-200 p-4 rounded-xl overflow-x-auto shadow-inner border border-neutral-700/40 my-6"
    />
  ),

  // 🔹 Tabellen
  table: (props) => (
    <table
      {...props}
      className="w-full border-collapse my-6 text-neutral-200 text-sm md:text-base"
    />
  ),
  th: (props) => (
    <th
      {...props}
      className="border-b border-gold-400/40 py-2 text-gold-300 font-medium text-left"
    />
  ),
  td: (props) => (
    <td
      {...props}
      className="border-b border-neutral-700/40 py-2 align-top"
    />
  ),

  // 🔹 Bilder & Figuren
  img: (props) => (
    <img
      {...props}
      className="rounded-xl mx-auto my-8 shadow-[0_0_40px_-10px_rgba(255,215,0,0.08)] transition-transform duration-500 hover:scale-[1.01]"
      loading="lazy"
    />
  ),

  // 🔹 Horizontale Linien
  hr: (props) => (
    <hr
      {...props}
      className="border-t border-neutral-700/50 my-10"
    />
  ),
};

export default MDXComponents;
