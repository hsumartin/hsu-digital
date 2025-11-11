import React, { useEffect, useState } from "react";

export default function GraphBackground() {
  const [offsetY, setOffsetY] = useState(0);

  // sanftes Scroll-Tracking
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.08);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      className="w-full h-full transition-transform duration-300 ease-out"
      style={{
        transform: `translateY(${offsetY}px)`, // Parallax-Effekt
      }}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBE7B0">
            <animate attributeName="stop-opacity" values="0.35;0.55;0.35" dur="12s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#D1A954">
            <animate attributeName="stop-opacity" values="0.15;0.25;0.15" dur="10s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        <style>{`
          @keyframes pulse {
            0%, 100% { r: 2.2; opacity: 0.8; }
            50% { r: 3.4; opacity: 1; }
          }
          @keyframes drift {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(1px, -1px); }
          }
        `}</style>
      </defs>

      {/* Liniennetz mit Drift */}
      <g stroke="url(#goldGradient)" strokeWidth="0.5" style={{ animation: "drift 18s ease-in-out infinite" }}>
        <line x1="100" y1="150" x2="400" y2="100" />
        <line x1="400" y1="100" x2="650" y2="300" />
        <line x1="100" y1="150" x2="250" y2="400" />
        <line x1="250" y1="400" x2="650" y2="300" />
        <line x1="400" y1="100" x2="250" y2="400" />
      </g>

      {/* Knotenpunkte */}
      <circle cx="100" cy="150" r="2.5" fill="#d1a954" style={{ animation: "pulse 5s ease-in-out infinite" }} />
      <circle cx="400" cy="100" r="2.5" fill="#d1a954" style={{ animation: "pulse 6s ease-in-out infinite 1s" }} />
      <circle cx="650" cy="300" r="2.5" fill="#d1a954" style={{ animation: "pulse 7s ease-in-out infinite 0.5s" }} />
      <circle cx="250" cy="400" r="2.5" fill="#d1a954" style={{ animation: "pulse 5.5s ease-in-out infinite 0.8s" }} />
    </svg>
  );
}
