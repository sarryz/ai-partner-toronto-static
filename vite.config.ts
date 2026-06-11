// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Keep your base setting so assets load from your specific sub-folder
    base: "./",
    // Force the Nitro engine to create flat, static files for GitHub
    nitro: {
      preset: "github-pages",
      prerender: {
        // Pre-render both root and subdirectory paths
        routes: ["/", "/ai-partner-toronto-static/"],
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
