import React from "react";
import clsx from "clsx";

/**
 * Button-Komponente
 * Typen: primary | outline | ghost
 * Funktioniert in MDX & UI-Komponenten
 */
export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  size = "md",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none active:scale-[0.98]";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary:
      "btn-gold",
    outline:
      "btn-outline",
    ghost:
      "btn-ghost",
  };

  const buttonClasses = clsx(base, sizes[size], variants[variant], className, "gold-glow-hover");

  // 🧠 MDX-Kompatibilität: wenn href vorhanden ist, rendere <a> statt <button>
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...props}
        aria-label={props["aria-label"] || children}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
