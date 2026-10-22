import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.petarvujovic.com",
  integrations: [tailwind(), svelte(), mdx(), sitemap()],
});
