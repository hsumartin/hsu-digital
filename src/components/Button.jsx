import React from "react";
import clsx from "clsx";

/**
 * Button-Komponente
 * Typen: primary | outline | ghost
 * Animationen: optional animate-pulseGlow
 */
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none";

  const variants = {
    primary:
    "bg-gold-500 text-navy-900 border border-gold-500 shadow-md hover:bg-gold-400 hover:border-gold-400 hover:shadow-gold active:scale-[0.98]",
  outline:
    "bg-transparent text-gold-500 border border-gold-500 hover:text-gold-400 hover:border-gold-400 hover:bg-gold-500/10 active:scale-[0.98]",
  ghost:
    "bg-transparent text-gold-500 hover:text-gold-400 hover:bg-gold-500/5 active:scale-[0.97]",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
