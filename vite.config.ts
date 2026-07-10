import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    // Enables the "@/..." path alias used throughout src/
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      // src/server.ts is our SSR entry (adds error-page fallback handling)
      server: { entry: "./src/server.ts" },
    }),
    // React's Vite plugin must come after TanStack Start's plugin
    viteReact(),
    // Nitro adapter — "vercel" preset targets Vercel deployments.
    // Swap the preset (or remove it) if you deploy elsewhere, e.g. "node-server" or "cloudflare".
    nitro({ preset: "vercel" }),
  ],
});
