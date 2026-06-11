import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force TanStack Start to run in complete static single-page app mode
  tsr: {
    appType: "spa"
  },
  vite: {
    base: "/ai-partner-toronto-static/",
    build: {
      outDir: "dist",
    }
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
