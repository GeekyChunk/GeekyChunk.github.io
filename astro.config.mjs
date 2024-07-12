import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: 'https://ErmiaCodev.github.io',
  output: 'static',
  outDir: 'docs',
  build: {
    assets: 'astro'
  }
});