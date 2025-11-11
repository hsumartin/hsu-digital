import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    react(),
    {
      ...mdx({
        jsxImportSource: "react",
        providerImportSource: "@mdx-js/react",
        format: "mdx", // 🧠 Aktiviert Frontmatter-Parsing (Pflicht für Metadaten)
      }),
      enforce: "pre", // Wichtig für Vite 5 Kompatibilität
    },
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "es2019", // ✅ Fix für react-snap (vermeidet "Unexpected token ?")
  },
});
