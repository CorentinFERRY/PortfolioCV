import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site :'https://corentinferry.github.io',
  base: 'PortfolioCV',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
