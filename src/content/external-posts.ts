import type { Blog } from './types'

export type Platform = 'zenn' | 'hatena'

export const externalPosts: Blog[] = [
  {
    title:
      '「フロントエンドカンファレンス北海道」で実施したクイズの中身を大公開！',
    pubDate: new Date('2025-09-30'),
    external: {
      url: 'https://tech.techtouch.jp/entry/frontend-conference-hokkaido-2025',
      platform: 'hatena',
    },
    tags: ['イベント'],
  },
  {
    title: 'TanStack Query v5 の新機能と最適化',
    pubDate: new Date('2024-03-11'),
    external: {
      url: 'https://tech.techtouch.jp/entry/tanstack-query-v5-update',
      platform: 'hatena',
    },
    tags: ['技術'],
  },
  {
    title: 'Next.js のアプリに NextAuth でシンプルな認証機能をつける',
    pubDate: new Date('2024-02-14'),
    external: {
      url: 'https://zenn.dev/tocomi/articles/965c6ccb676a7b',
      platform: 'zenn',
    },
    tags: ['技術'],
  },
]
