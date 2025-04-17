import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5176,
  },
  resolve: {
    alias: {
      "@shared/d": path.resolve(__dirname, "../../shared/d/src/index.ts"),
    },
  },
});
