import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: ["esnext"], // Ensures modern JS features like top-level await are supported
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
  server: {
    host: "0.0.0.0", // Allows external access
    port: 5174, // Ensure the correct port
  },
  optimizeDeps: {
    include: ["@clerk/clerk-js"], // Ensure Clerk is bundled
  },
});
