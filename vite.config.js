import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "@/styles/_vars" as *;`,
      },
    },
  },
});

