import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Baut die ganze Seite nach ../app/ (app.js + app.css), die index.html einbindet.
export default defineConfig({
  plugins: [
    vue({
      template: {
        // Bilder bleiben relative Pfade nach assets/, Vite soll sie nicht einpacken.
        transformAssetUrls: false,
        // Leerzeichen zwischen den Tags bleiben stehen, damit der Text genauso umbricht wie vorher.
        compilerOptions: { whitespace: "preserve" },
      },
    }),
  ],
  base: "./",
  build: {
    outDir: "../app",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/seite.ts",
      output: {
        entryFileNames: "app.js",
        chunkFileNames: "app-[name].js",
        assetFileNames: "app.[ext]",
      },
    },
  },
});
