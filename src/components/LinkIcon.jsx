import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * Link mit Icon (z. B. Pfeil oder externes Symbol)
 * Varianten: inline | standalone
 */
export default function LinkIcon({
  href,
  label,
  icon: Icon = ArrowRight,
  variant = "inline",
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors duration-200";

  const iconBase =
    "w-4 h-4 transition-all duration-200 group-hover:translate-x-[2px]";

  return (
    <a
      href={href}
      className={`group ${base} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <Icon className={iconBase} />
    </a>
  );
}
