import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
