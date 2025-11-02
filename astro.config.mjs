// @ts-check
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://i-am-tocomi.pages.dev',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // NOTE: バイナリファイルがビルド対象に含まれるため除外
      external: ['@resvg/resvg-js'],
    },
  },
  integrations: [icon(), react()],
})
