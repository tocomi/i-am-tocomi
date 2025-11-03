import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { Ogp } from '@/components/ogp'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

export async function getStaticPaths() {
  // Static pages
  const staticPages = [
    { path: 'home', title: 'つねみ / tocomi と申します。よろしゅう。' },
    { path: 'about', title: 'About 我' },
    { path: 'blog', title: 'ブログ記事たち' },
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

export const GET: APIRoute<{ title: string }> = async ({ props }) => {
  const { title } = props

  const fontPath = join(
    process.cwd(),
    'public',
    'fonts',
    'NotoSansJP-SemiBold.ttf'
  )
  const fontData = readFileSync(fontPath)

  const svg = await satori(Ogp({ title }), {
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

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  })
  const pngData = resvg.render()
  const pngBuffer = Buffer.from(pngData.asPng())

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
