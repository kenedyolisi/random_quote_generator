import ViteYaml from "@modyfi/vite-plugin-yaml";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/random_quote_generator/",
  plugins: [
    svelte(),
    tailwindcss(),
    ViteYaml(),
    VitePWA({ registerType: "autoUpdate", devOptions: { enabled: true } }),
  ],
});
