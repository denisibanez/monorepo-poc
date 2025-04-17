import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5175,
  },
  resolve: {
    alias: {
      "@shared/d": path.resolve(__dirname, "../../shared/d/src/index.ts"),
    },
  },
  build: {
    rollupOptions: {
      external: ["@shared/d"],
    },
  },
});
