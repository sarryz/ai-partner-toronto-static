import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Keep your repository sub-folder name exactly as it appears in your logs
    base: "/ai-partner-toronto-static/",
    build: {
      outDir: "dist",
    }
  },
  tanstackStart: {
    // Overriding the default server mode to target single page exports
    server: { entry: "server" },
  },
});
