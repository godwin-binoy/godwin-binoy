import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://godwin-binoy.github.io',
  base: '/',
  integrations: [tailwind()],
  vite: { build: { cssMinify: true } },
});
