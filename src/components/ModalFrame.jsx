import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLock } from "../hooks/useScrollLock";

/**
 * ModalFrame.jsx
 * – Steuert das Verhalten des Overlays (Fade, Click-outside, Scroll-Lock)
 * – Präsentationsschicht für modale Inhalte (z. B. Artikel, Projekte, GraphNodes)
 */

export default function ModalFrame({ children, onClose }) {
  // 🔒 Globales Scrollen verhindern (während Modal aktiv)
  useScrollLock(true);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center 
             bg-surface-base/85 backdrop-blur-md transition-colors duration-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => {
          // Klick außerhalb des Modals → schließen
          if (e.target === e.currentTarget) onClose?.();
        }}
      >
        <motion.div
          className="relative w-full max-w-5xl mx-auto rounded-2xl 
               bg-surface-overlay text-text-primary
               border border-gold-400/20 shadow-[0_0_40px_-10px_rgba(209,169,84,0.15)]
               overflow-hidden transition-colors duration-700"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()} // verhindert Schließen beim Klick im Fenster
        >
  {/* ⬇️ Hier einfügen */}
  <div className="absolute top-4 right-4">
    <CloseButton onClick={onClose} />
  </div>

          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
