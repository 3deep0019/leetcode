import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "./",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});
