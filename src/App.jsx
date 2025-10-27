import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Seiten
import DigitaleProfilseite from "./pages/DigitaleProfilseite.jsx";
import Projekte from "./pages/Projekte.jsx";
import Beitraege from "./pages/Beitraege.jsx";
import BeitragDetail from "./pages/BeitragDetail.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Startseite */}
        <Route path="/" element={<DigitaleProfilseite />} />

        {/* Unterseiten */}
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/beitraege" element={<Beitraege />} />
        <Route path="/beitraege/:slug" element={<BeitragDetail />} />
      </Routes>
    </Router>
  );
}
