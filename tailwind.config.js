/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";
import forms from "@tailwindcss/forms";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media", // alternativ: "class" für manuelles Theme-Switching
  theme: {
    extend: {
      colors: {
        // 🎨 Marken- & Systemfarben
        brand: {
          primary: "#d1a954",
          secondary: "#0b1222",
          accent: "#f2dd9c",
        },
        surface: {
          base: "#0a0f19", // leicht wärmer für OLED
          overlay: "#131a26",
          card: "#101623", // leicht dunkler, sorgt für mehr Tiefe
        },
        text: {
          primary: "#E6E8ED",
          secondary: "#B8BDCA",
          muted: "#8D94A5",
          accent: "#F2DD9C",
        },
        navy: {
          950: "#070c14",
          900: "#0b0f19",
          800: "#111a2f",
          700: "#1a2238",
        },
        gold: {
          100: "#f6e9c3",
          200: "#f2dd9c",
          300: "#e6c977",
          400: "#dcb869", // Haupt-Goldton
          500: "#d1a954",
          600: "#b99443",
        },
      },

      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },

      boxShadow: {
        gold: "0 0 20px rgba(209,169,84,0.2)",
        "gold-xl": "0 0 40px -10px rgba(209,169,84,0.15)",
        "soft-xl": "0 8px 40px -16px rgba(0,0,0,0.25)",
        "gold-soft": "0 4px 30px -10px rgba(209,169,84,0.25)",
        "card-float": "0 12px 45px -18px rgba(209,169,84,0.18)",
        "soft-dark": "0 10px 40px -20px rgba(0,0,0,0.35)",
      },

      backgroundImage: {
        "gradient-space": "linear-gradient(to bottom, #0a1424, #0b0f19, #070c14)",
        "gradient-gold": "radial-gradient(circle at 50% 20%, rgba(209,169,84,0.08), transparent 75%)",
        "gradient-navy": "linear-gradient(to bottom, #0a1424, #111a2f)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },

      transitionProperty: {
        theme: "background-color, color, border-color, fill, stroke",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        breath: "cubic-bezier(0.45, 0, 0.55, 1)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        fast: "150ms",
        slow: "500ms",
      },

      height: {
        "card-header": "170px",
        "card-body": "190px",
      },
      minHeight: {
        "card-body": "180px",
      },

      // ✍️ Prose (MDX Typografie)
      typography: ({ theme }) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.text.primary"),
            "--tw-prose-headings": theme("colors.gold.400"),
            "--tw-prose-links": theme("colors.gold.400"),
            "--tw-prose-bold": theme("colors.text.secondary"),
            "--tw-prose-quotes": theme("colors.text.muted"),
            "--tw-prose-quote-borders": theme("colors.gold.500"),

            color: theme("colors.text.primary"),
            lineHeight: "1.75",
            maxWidth: "70ch",
            letterSpacing: "0.01em",

            "h1, h2, h3": {
              fontWeight: "600",
              letterSpacing: "-0.01em",
              color: theme("colors.gold.400"),
            },
            h1: {
              fontSize: "2.25rem",
              marginBottom: "0.75em",
              lineHeight: "1.2",
              textShadow: "0 0 10px rgba(209,169,84,0.1)",
            },
            h2: {
              fontSize: "1.5rem",
              marginTop: "2em",
              marginBottom: "1em",
              lineHeight: "1.35",
            },
            h3: {
              fontSize: "1.25rem",
              marginTop: "1.5em",
              marginBottom: "0.75em",
              lineHeight: "1.4",
            },
            a: {
              color: theme("colors.gold.400"),
              fontWeight: "500",
              textDecoration: "none",
              transition: "color 0.3s ease, text-shadow 0.3s ease",
            },
            "a:hover": {
              color: theme("colors.gold.300"),
              textShadow: "0 0 6px rgba(242,221,156,0.3)",
            },
            blockquote: {
              borderLeftColor: theme("colors.gold.500"),
              borderLeftWidth: "2px",
              fontStyle: "italic",
              color: theme("colors.text.secondary"),
              opacity: 0.9,
              paddingLeft: "1rem",
            },
            strong: { color: theme("colors.text.primary"), fontWeight: "600" },
            em: { color: theme("colors.text.secondary"), fontStyle: "italic" },
            "ul li::marker": { color: theme("colors.gold.400") },
            figcaption: {
              textAlign: "center",
              fontSize: theme("fontSize.sm")[0],
              color: theme("colors.text.muted"),
              marginTop: theme("spacing.3"),
              fontStyle: "italic",
            },
          },
        },
      }),
    },
  },
  plugins: [typography, forms, scrollbar],
};
