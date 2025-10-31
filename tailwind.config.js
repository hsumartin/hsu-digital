/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a1424", // Primärfläche
          800: "#111a2f", // Tiefe / Overlay
          700: "#1a2743", // Gradient-Ende
        },
        gold: {
          500: "#d1a954", // Hauptakzent
          400: "#e2b765", // Hover / Linien
          300: "#E8C97F", // Highlights
        },
        neutral: {
          50: "#F5F7FA",  // Text auf Dunkel
          200: "#E9ECF2", // Sekundärtext
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        gold: "0 0 20px rgba(209,169,84,0.2)", // sanfter Schimmer
      },
      transitionTimingFunction: {
        "soft": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
