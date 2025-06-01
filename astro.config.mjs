import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site :'https://CorentinFERRY.github.io',
  base: 'portfolioCV',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
