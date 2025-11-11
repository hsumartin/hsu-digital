import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { projects } from "../data/projects";
import { articles } from "../api/articles";
import { motion } from "framer-motion";
import GraphBackground from "../components/GraphBackground";
import GraphCard from "../components/GraphCard.jsx";
import LinkArrow from "../components/LinkArrow";
import { nodes as graphItems } from "../data/graph";


export default function Home() {
  const latestProjects = Array.isArray(projects) ? projects.slice(0, 3) : [];
  const latestArticles = Array.isArray(articles) ? articles.slice(0, 3) : [];

  return (
    <main className="bg-navy-900 text-neutral-50 min-h-screen overflow-x-hidden">
      {/* === HERO === */}
      <section className="relative flex flex-col md:flex-row items-center justify-center 
                    px-6 md:px-20 py-16 md:py-20 gap-8 md:gap-10 overflow-hidden">
  {/* Profilbereich */}
  <div className="relative flex flex-col items-center w-48 sm:w-56 md:w-60 flex-shrink-0 
                  z-10 translate-y-2 sm:translate-y-3 md:translate-y-5 mb-10 md:mb-0">

    {/* Lichtfläche hinter dem Bild */}
    <div className="absolute top-[8%] left-0 right-0 h-[72%] rounded-lg bg-navy-700/40 blur-lg z-0" />

    {/* Harmonischer Container mit Goldlinie und Tiefenwirkung */}
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative rounded-lg border border-gold-400/40 overflow-hidden shadow-[0_0_25px_2px_rgba(209,169,84,0.25)] z-10"
          >
            <img
              src="/images/martin-hsu-profile.png"
              alt="Martin Hsu"
              loading="eager"
              decoding="sync"
              className="rounded-lg object-cover opacity-95"
      />
    </motion.div>
  </div>

  {/* Textbereich */}
  <div className="max-w-2xl text-left z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-[2.9rem] md:text-[3.4rem] font-extrabold text-[#F7F1E1]/85 
               leading-[1.15] tracking-tight mb-3"
          >
            Martin Hsu
          </motion.h1>

  {/* Untertitel */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-[1.35rem] md:text-[1.55rem] font-semibold text-gold-400/90 
               tracking-[0.01em] leading-[1.35] mb-6"
          >
            Architect of Digital Systems and Thinking
          </motion.h2>

  {/* Beschreibung */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-[1.05rem] text-neutralLight/80 leading-[1.75] 
               font-light mb-8 max-w-prose"
          >
            Ich entwerfe Strukturen, in denen Technologie, Organisation und Ethik
            zu lernenden Systemen werden – mit Fokus auf Architektur, KI und
            Verwaltungskultur.
          </motion.p>

  {/* Zitat */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="text-gold-400/95 italic text-[1.2rem] md:text-[1.35rem] 
               font-medium tracking-wide mt-6 mb-6"
          >
            „Design ist die sichtbar gewordene Intelligenz.“
          </motion.p>

    {/* 👉 Pfeil-Link (leicht verzögert nach dem Zitat) */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
      className="mt-4"
    >
      <LinkArrow to="/profil" label="Mehr über mich" />
    </motion.div>
  </div>
      </section>

      {/* === EIN GEDANKE VORWEG === */}
      <section className="relative py-16 md:py-20 text-center overflow-hidden">
  {/* obere Linie – Trennung zum Hero */}
  <div className="absolute top-0 left-1/3 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />

  {/* inhaltlicher Container */}
  <div className="max-w-3xl mx-auto text-center px-6 space-y-6">
    <h2 className="text-gold-400 text-sm tracking-widest font-semibold uppercase">
            Ein Gedanke vorweg
          </h2>
          <p className="text-text-primary leading-relaxed text-base md:text-lg">
            Technologie verändert nicht nur, was wir tun – sie verändert, wie wir denken.
          </p>
          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            Jede neue digitale Schicht erweitert unseren Handlungsspielraum, aber sie fordert uns auf,
            unsere Haltung zu prüfen:
            <span className="font-semibold text-neutral-100">
              {" "}Wie gestalten wir Systeme, die Menschen stärken, statt sie zu ersetzen?
            </span>
          </p>
          <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
            Ich arbeite an Strukturen, in denen Daten, Intelligenz und Verantwortung
            zusammenwirken – als Grundlage für eine digitale Kultur, die reflektiert,
            lernfähig und menschlich bleibt.
          </p>
        </div>
{/* untere Linie – Übergang zu Beiträgen */}
  <div className="absolute bottom-0 left-1/3 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />
</section>
{/* === ZITATBLOCK – ÜBERGANG GEDANKE → BEITRÄGE === */}
<section className="relative max-w-3xl mx-auto py-14 md:py-16 text-center border-t border-neutral-800/40">
  <blockquote className="text-lg md:text-2xl italic font-sans font-light text-neutral-300 leading-relaxed tracking-tight">
  „Ich arbeite an Systemen, in denen Denken, Struktur und Technologie sich gegenseitig verstärken – 
  das nenne ich <span className='text-gold-400 font-medium not-italic'>Digital Intelligence Collaboration</span>.“
</blockquote>
</section>

      {/* === BEITRÄGE === */}
      <section className="relative py-16 md:py-20 px-6 md:px-10">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-semibold text-gold-300 mb-4">
      Neueste Beiträge
    </h2>
    <p className="text-neutralLight/70">
      Gedanken, Analysen und Perspektiven über digitale Systeme.
    </p>
  </div>

  <div className="container-section">
    <div className="absolute top-0 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {latestArticles.map((article) => (
      <Card
  key={article.slug}
  type="article"
  title={article.title}
  subtitle={article.subtitle}
  excerpt={article.excerpt?.slice(0, 200) + (article.excerpt?.length > 200 ? " …" : "")}
  slug={article.slug}
  image={article.image || "/images/bg-articles.png"}
  accentColor="#FBE7B0"
  lang={article.lang}
  readingTime={article.readingTime}
  author={article.author}          // 🆕 hinzugefügt
  category={article.category}      // 🆕 hinzugefügt
  date={article.date}              // 🆕 hinzugefügt
/>
    ))}
  </div>
    </div>
    {/* 👉 LinkArrow am Ende */}
    <div className="mt-12 text-center">
      <LinkArrow to="/beitraege" label="Mehr Beiträge lesen" />
  </div>
</section>

{/* === VISUELLE TRENNLINIE === */}
<div className="relative my-12 md:my-16 flex justify-center">
  <div className="w-[55%] h-[1px] bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
</div>

{/* === KNOWLEDGE GRAPH === */}
<section className="relative py-20 px-6 md:px-10">
  {/* Parallax-Hintergrundnetz – nur hier overflow-hidden */}
  <div className="absolute inset-x-0 top-[-8%] bottom-[15%] opacity-[0.1] mix-blend-screen pointer-events-none overflow-hidden">
    <GraphBackground />
  </div>

  {/* Vordergrund-Inhalt */}
  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Titel + Untertitel */}
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gold-400 mb-4">
        Knowledge Graph
      </h2>
      <p className="text-neutralLight/70">
        Verknüpfte Denkstrukturen zwischen Konzepten, Technologien und Erkenntnissen.
      </p>
    </div>

    {/* Karten-Container */}
    <div className="container-section p-14 transition-all duration-500 hover:border-gold-400/15">
      {/* Goldene Linien-Trennung */}
      <div className="absolute top-0 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      {/* Grid mit Graph-Karten */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {graphItems.map((graph) => (
          <GraphCard key={graph.slug} node={graph} />
        ))}
      </div>
    </div>

    {/* Weiterführender Link */}
    <div className="mt-12 text-center">
      <LinkArrow to="/graph" label="Zum Knowledge Graph" />
    </div>
  </div>
</section>

{/* === VISUELLE TRENNLINIE === */}
<div className="relative my-20 md:my-24 flex justify-center">
  <div className="w-[55%] h-[1px] bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
</div>

{/* === PROJEKTE === */}
<section className="relative py-24 md:py-28 px-6 md:px-10">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-semibold text-gold-300 mb-4">
      Projekte
    </h2>
    <p className="text-neutralLight/70">
      Systeme und Prototypen, in denen Ideen Form annehmen.
    </p>
  </div>

  <div className="container-section">
    <div className="absolute top-0 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {latestProjects.map((project) => (
      <Card
  key={project.slug}
  type="project"
  title={project.title}
  subtitle={project.subtitle}
  slug={project.slug}
  image={project.image || "/images/bg-projects.png"}
  accentColor="#F7F1E1"
  fixedHeight="compact"
  tags={project.tags}
/>
    ))}
  </div>
    </div>
    <div className="mt-12 text-center">
      <LinkArrow to="/projekte" label="Alle Projekte ansehen" />
  </div>
</section>
    </main>
  );
}
