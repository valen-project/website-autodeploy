// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://valen-project.github.io',
  base: '/website-autodeploy',
  vite: {
    plugins: [tailwindcss()]
  }
});