// build.mjs – portable build script for Vercel
import { build } from "vite";

console.log("🔧 Building project via Vite API…");
await build({
  root: ".",
  build: {
    outDir: "dist",
  },
});
console.log("✅ Build finished");