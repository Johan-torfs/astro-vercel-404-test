import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";

import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), ['STORYBLOK', 'PUBLIC_VERCEL_ENV']);

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    }),
    svelte()
]
});