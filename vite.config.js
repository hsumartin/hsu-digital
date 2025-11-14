import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    mdx({
      jsxImportSource: "react",
      providerImportSource: "@mdx-js/react",
    }),
  ],
  resolve: {
    alias: {
    '/~': path.resolve(__dirname, 'src')
    },
  },
  build: {
    target: "es2019",
    outDir: "dist",
    chunkSizeWarningLimit: 1000,
  },
});
