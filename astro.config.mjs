// @ts-check
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://i-am-tocomi.pages.dev/',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), react()],
})
