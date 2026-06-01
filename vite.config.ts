import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three/")) return "three-core";
          if (id.includes("@react-three")) return "three-fiber";
          if (id.includes("@dimforge") || id.includes("rapier")) return "three-physics";
          if (id.includes("node_modules/gsap")) return "gsap";
        },
      },
    },
  },
});
