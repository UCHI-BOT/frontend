import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          fm: ["framer-motion"],
          des: ["@repo/ui"],
          ico: ["@repo/ui/emojis"],
          ph: ["posthog-js", "posthog-js/react"],
        },
      },
    },
  },
});
