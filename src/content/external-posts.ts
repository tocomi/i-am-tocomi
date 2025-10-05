import type { Blog } from './types'

export type Platform = 'zenn' | 'hatena'

export const externalPosts: Blog[] = [
  {
    title: 'Next.js のアプリに NextAuth でシンプルな認証機能をつける',
    pubDate: new Date('2024-02-14'),
    external: {
      url: 'https://zenn.dev/tocomi/articles/965c6ccb676a7b',
      platform: 'zenn',
    },
    tags: ['Development'],
  },
]
