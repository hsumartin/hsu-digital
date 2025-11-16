import React from "react";
import AppLink from "./AppLink.jsx"; // Kann später ebenfalls zu .tsx migriert werden

// 🎯 Typdefinitionen für Props
export interface CardProps {
  title: string;
  subtitle?: string;
  slug: string;
  excerpt?: string;
  tags?: string[];
  lang?: string;
  readingTime?: string;
  author?: string;
  category?: string;
  date?: string;
  type?: "project" | "article" | "empty";
  className?: string;
  forceModal?: boolean;
compactHeaderOnly?: boolean;
}

export default function Card({
  title,
  subtitle,
  slug,
  excerpt,
  tags = [],
  lang,
  readingTime,
  author,
  category,
  date,
  type = "empty",
  className = "",
  forceModal = false, // ✅ HIER EINTRAGEN
compactHeaderOnly = false,
}: CardProps) {
  // 🎨 feste Hintergrundbilder nach Typ
  const bgImage =
    type === "article" ? "/images/bg-articles.png" : "/images/bg-projects.png";

  // 🌈 Farbkonzept nach Typ
  const titleColor = type === "article" ? "#FBE7B0" : "#F7F1E1";
  const subtitleColor = type === "article" ? "#FBE7B0CC" : "#F7F1E1CC";

  // 📐 Harmonische Höhe (goldener Schnitt)
const headerHeight = compactHeaderOnly
  ? "h-full"                    // Header nimmt ganze Card-Höhe ein
  : type === "article"
    ? "h-[170px]"
    : "h-[190px]";
  const bodyHeight = type === "article" ? "min-h-[190px]" : "min-h-[170px]";

return (
  <AppLink
    to={type === "article" ? `/beitraege/${slug}` : `/projekte/${slug}`}
    disableModal={!forceModal && type !== "article"}
    className={`
      relative flex flex-col overflow-hidden rounded-3xl
      bg-surface-overlay/70 backdrop-blur-md
      border border-navy-700/60 shadow-soft-dark
      hover:border-gold-400/30 hover:shadow-gold-soft
      transition-theme duration-slow ease-breath
      ${className}
    `}
  >
    {/* Headerbereich */}
    <div
  className={`relative ${headerHeight} flex flex-col items-center ${
    compactHeaderOnly ? "justify-center" : "justify-end"
  } text-center px-5 ${compactHeaderOnly ? "pb-0 pt-0" : "pt-10 pb-6"}`}
>
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover brightness-[.85] opacity-90"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black50 to-transparent" />

      {/* Meta: Sprache & Lesezeit */}
      {type === "article" && (
        <>
          {lang && (
            <span className="absolute top-2 left-3 z-10 text-[10px] uppercase tracking-widest text-neutral-300/70 bg-navy-900/60 px-2 py-[2px] rounded-sm">
              {lang}
            </span>
          )}
          {readingTime && (
            <span className="absolute top-2 right-3 z-10 text-[10px] tracking-wide text-neutral-300/70 bg-navy-900/60 px-2 py-[2px] rounded-sm">
              {readingTime}
            </span>
          )}
        </>
      )}

      <h3
        className={`relative z-10 text-lg font-semibold`}
        style={{ color: titleColor }}
      >
        {title}
      </h3>
{compactHeaderOnly && subtitle && (
  <p className="relative z-10 text-sm text-gold-200/80 mt-1">{subtitle}</p>
)}
      {!compactHeaderOnly && subtitle && (
        <p className="relative z-10 text-sm" style={{ color: subtitleColor }}>
          {subtitle}
        </p>
      )}
    </div>

    {/* Bodybereich */}
    {!compactHeaderOnly && (
      <>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
        <div
          className={`h-card-body p-5 bg-navy-900/70 backdrop-blur-sm flex flex-col justify-start text-left ${bodyHeight}`}
        >
          {type === "article" && excerpt && (
            <p className="text-sm text-neutral-300 leading-snug line-clamp-3">
              {excerpt}
            </p>
          )}

          {type === "project" && tags && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-[2px] text-xs rounded-sm bg-navy-800/60 text-[#F7F1E1]/90 border border-navy-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {type === "article" && (author || category || date) && (
            <div className="mt-3 text-xs text-right text-neutral-400/80 space-y-1">
              {(author || date) && (
                <div>
                  {author && <span className="italic">{author}</span>}
                  {date && (
                    <span className="ml-2 text-neutral-500/70">
                      ·{" "}
                      {new Date(date).toLocaleDateString(
                        lang === "de" ? "de-DE" : "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </span>
                  )}
                </div>
              )}
              {category && (
                <div className="text-gold-400/70 uppercase tracking-wider text-[10px]">
                  {category}
                </div>
              )}
            </div>
          )}
        </div>
      </>
    )}
    </AppLink>
  );
}
