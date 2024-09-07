import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";
import markdownIntegration from '@astropub/md'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    pagefind(),
    markdownIntegration()
  ]
});