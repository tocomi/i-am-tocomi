import { ImageResponse } from '@vercel/og'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { Ogp } from '@/components/ogp'

export const prerender = true

export async function getStaticPaths() {
  // Static pages
  const staticPages = [
    { path: 'home', title: 'Home' },
    { path: 'about', title: 'About' },
    { path: 'blog', title: 'Blog' },
  ]

  // Blog posts
  const posts = await getCollection('blog')
  const blogPages = posts.map(post => ({
    path: `blog/${post.id}`,
    title: post.data.title,
  }))

  // Combine all pages
  const allPages = [...staticPages, ...blogPages]

  return allPages.map(page => ({
    params: { path: page.path },
    props: { title: page.title },
  }))
}

export const GET: APIRoute<{ title: string }> = async ({ props, request }) => {
  const { title } = props

  const fontUrl = `${new URL(request.url).origin}/fonts/NotoSansJP-Regular.ttf`
  const fontData = await fetch(fontUrl).then(r => r.arrayBuffer())

  return new ImageResponse(Ogp({ title }), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Noto Sans JP',
        data: fontData,
        style: 'normal',
      },
    ],
  })
}
