import React, { useRef, useEffect, useState } from "react";

export default function ProgressIndicator() {
  const ref = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-context");
    if (!container || !ref.current) return;

    const handleScroll = () => {
      const max = container.scrollHeight - container.clientHeight;
      const progress = container.scrollTop / max;
      const clamped = Math.min(Math.max(progress, 0), 1);

      // Füllung aktualisieren
      ref.current.style.transform = `scaleX(${clamped >= 0.985 ? 1 : clamped})`;

      // “Endzustand” erkennen
      setIsComplete(clamped >= 0.985);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[60]">
      {/* Ruhige Basislinie */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold-900/20 via-gold-700/25 to-gold-900/20" />

      {/* Aktiver Fortschrittsbalken */}
      <div
        ref={ref}
        className={`h-full bg-gradient-to-r from-gold-400 to-gold-200 origin-left 
                    transition-transform duration-200 ease-out
                    shadow-[0_0_6px_rgba(255,215,0,0.25)]
                    ${isComplete ? "animate-[goldPulse_3s_ease-in-out_infinite]" : ""}`}
        style={{ transform: "scaleX(0)" }}
      />

      {/* Inline-Keyframes (Tailwind-kompatibel) */}
      <style>{`
        @keyframes goldPulse {
          0%, 100% {
            box-shadow: 0 0 8px rgba(255, 215, 0, 0.3),
                        0 0 16px rgba(255, 215, 0, 0.15);
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 16px rgba(255, 215, 0, 0.45),
                        0 0 24px rgba(255, 215, 0, 0.25);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}
