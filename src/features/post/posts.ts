import { getCollection } from 'astro:content'
import type { Blog } from '@/content/types'
import { externalPosts } from '@/content/external-posts'

type Post = Blog & {
  id: string
}

const posts = await getCollection('blog')
const mergedPosts: Post[] = [
  ...posts.map(post => ({ ...post.data, id: post.id })),
  ...externalPosts.map(post => ({ ...post, id: post.external?.url ?? '' })),
]
const sortedPosts = mergedPosts.sort(
  (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
)

// 年ごとにグループ化
export const postsByYear = sortedPosts.reduce(
  (acc, post) => {
    const year = post.pubDate.getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  },
  {} as Record<number, Post[]>
)

// 年を降順でソート
export const years = Object.keys(postsByYear)
  .map(Number)
  .sort((a, b) => b - a)
