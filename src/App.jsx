// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// 🧩 Layout-Komponenten
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// 🧭 Seiten
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Articles from "./pages/Articles.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import Profile from "./pages/Profile.jsx";
import Graph from "./pages/Graph.jsx";
import GraphDetail from "./pages/GraphDetail.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Impressum from "./pages/Impressum";
import ScrollToTopButtonGlobal from "./components/ScrollToTopButtonGlobal";

/* ---------------------------------------------------------------------------
  🔹 Smooth Scroll Component
     → sorgt dafür, dass beim Routenwechsel automatisch nach oben gescrollt wird
--------------------------------------------------------------------------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
   if (sessionStorage.getItem("skipScrollTop") === "1") {
     sessionStorage.removeItem("skipScrollTop"); // einmalig verwenden & löschen
     return;                                     // ← kein ScrollToTop bei Modal-Close
   }
   window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/* ---------------------------------------------------------------------------
  🔸 App-Komponente
--------------------------------------------------------------------------- */
export default function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* 🟡 Header (Navigation) */}
      <Header />
<ScrollToTopButtonGlobal />
      {/* 🔵 Hauptinhalt mit Routing */}
      <main className="min-h-screen bg-surface-base text-text-primary pt-16 md:pt-20 transition-theme duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekte" element={<Projects />} />
          <Route path="/projekte/:slug" element={<ProjectDetail />} />
          <Route path="/beitraege" element={<Articles />} />
          <Route path="/beitraege/:slug" element={<ArticleDetail />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/graph/:slug" element={<GraphDetail />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>

      {/* ⚪ Footer (immer unten sichtbar) */}
      <Footer />
    </Router>
  );
}
