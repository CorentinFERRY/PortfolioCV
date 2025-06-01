import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site :'htttps://CorentinFERRY.github.io',
  base: 'portfolioCV',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
