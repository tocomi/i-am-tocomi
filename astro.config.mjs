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
      external: [
        // NOTE: バイナリファイルがビルド対象に含まれてしまうため除外
        '@resvg/resvg-js',
        'node:fs',
        'node:path',
      ],
    },
  },
  integrations: [icon(), react()],
})
