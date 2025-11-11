import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  animate = true,
  highlight = false,
}) {
  // dynamische Klassen für Textausrichtung
  const alignClass =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  const Wrapper = animate ? motion.section : "section";

  return (
    <Wrapper
      initial={animate ? { opacity: 0, y: 12 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={animate ? { duration: 0.5, ease: "easeOut" } : undefined}
      className={`py-24 px-8 md:px-20 flex flex-col ${alignClass}`}
    >
      <h1
        className={`text-4xl md:text-5xl font-semibold ${
          highlight ? "text-gold-400" : "text-text-primary"
        } mb-4 tracking-tight`}
      >
        {title}
      </h1>

      {subtitle && (
        <p className="max-w-2xl text-text-secondary text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
}
