// @ts-check
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'

import tailwindcss from '@tailwindcss/vite'

import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://tocomi.net',
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
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      ],
    ],
  },
})
