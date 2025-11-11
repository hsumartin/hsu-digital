// src/hooks/useScrollLock.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrollLock – intelligente, cross-browser-stabile Scrollsteuerung
 * - Erkennt modale Pfade (z. B. "/beitraege/")
 * - Sperrt Scroll im Hintergrund während Modal aktiv
 * - Stellt Scrollposition exakt wieder her
 * - Kompatibel mit iOS/macOS Touch und Desktop
 */
export function useScrollLock(forceLock = false) {
  const location = useLocation();

  useEffect(() => {
    const isModal = location.pathname.startsWith("/beitraege/");
    const shouldLock = forceLock || isModal;

    if (shouldLock) {
      const scrollY = window.scrollY;
      const prev = document.body.style.cssText;

      // Stabiler Lock (verhindert Scroll-Shifting bei iOS)
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.cssText = prev;
        window.scrollTo(0, scrollY);
      };
    }
  }, [location.pathname, forceLock]);
}
