import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-context");
    if (!container) return;

    const handleScroll = () => {
      const progress = container.scrollTop / (container.scrollHeight - container.clientHeight);
      setVisible(progress > 0.25);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById("scroll-context");
    if (container) container.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
  onClick={scrollToTop}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  whileHover={{ y: -2 }} // 🪶 sanfter Lift-Effekt
  transition={{ duration: 0.25, ease: "easeOut" }}
  className="fixed bottom-6 right-6 z-40
             text-gold-400 hover:text-gold-200
             transition-all duration-300"
  aria-label="Zurück zum Anfang"
>
  <ArrowUpIcon className="w-5 h-5 drop-shadow-[0_0_6px_rgba(255,215,0,0.25)] hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
</motion.button>
      )}
    </AnimatePresence>
  );
}
