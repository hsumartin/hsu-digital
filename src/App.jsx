// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// 🧩 Layout-Komponenten
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// 🧭 Seiten
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Articles from "./pages/Articles.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import Profile from "./pages/Profile.jsx";
import Graph from "./pages/Graph.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Impressum from "./pages/Impressum";

/* ---------------------------------------------------------------------------
  🔹 Smooth Scroll Component
     → sorgt dafür, dass beim Routenwechsel automatisch nach oben gescrollt wird
--------------------------------------------------------------------------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

      {/* 🔵 Hauptinhalt mit Routing */}
      <main className="min-h-screen bg-navy-900 text-neutral-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekte" element={<Projects />} />
          <Route path="/beitraege" element={<Articles />} />
          <Route path="/beitraege/:slug" element={<ArticleDetail />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/graph" element={<Graph />} />
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
