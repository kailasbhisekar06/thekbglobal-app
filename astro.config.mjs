// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://thekbglobal.com',
  trailingSlash: 'ignore',
  integrations: [
    tailwind(), 
    sitemap(),
    robotsTxt()
  ],
});