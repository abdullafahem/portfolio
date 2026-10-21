// @ts-check
import { defineConfig } from 'astro/config';

// SITE and BASE are filled in automatically by the GitHub Actions workflow
// (.github/workflows/deploy.yml). Locally they fall back to the defaults below.
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
});
