// components/Caption.jsx
// ------------------------------------------------------
// Typografisch verfeinerte Caption-Komponente
// Nutzt elegante Serif-Optik mit Gold-Akzentierung
// ------------------------------------------------------

import React from "react";

export default function Caption({ text, align = "center", className = "" }) {
  if (!text) return null;

  const alignment =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <figcaption
      className={`mt-3 text-sm md:text-base text-text-muted dark:text-neutral-400/90 font-light italic tracking-wide ${alignment} ${className}`}
    >
      {text}
    </figcaption>
  );
}
