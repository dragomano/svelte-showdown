import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: "src/SvelteShowdown.svelte",
      name: "SvelteShowdown",
      fileName: (format) => `svelte-showdown.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["svelte"],
      output: {
        globals: {
          svelte: "svelte",
        },
      },
    },
  },
});
