import ViteYaml from "@modyfi/vite-plugin-yaml";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/random-quote-generator/",
  plugins: [svelte(), ViteYaml()],
});
