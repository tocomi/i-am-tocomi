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

export const GET: APIRoute<{ title: string }> = async ({ props }) => {
  const { title } = props

  const fontPath = join(
    process.cwd(),
    'public',
    'fonts',
    'NotoSansJP-SemiBold.ttf'
  )
  const fontData = readFileSync(fontPath)

  const portraitPath = join(process.cwd(), 'public', 'images', 'portrait.jpg')
  const portraitData = readFileSync(portraitPath)
  const portraitBase64 = `data:image/jpeg;base64,${portraitData.toString('base64')}`

  const moyaiPath = join(process.cwd(), 'public', 'images', 'moyai.png')
  const moyaiData = readFileSync(moyaiPath)
  const moyaiBase64 = `data:image/png;base64,${moyaiData.toString('base64')}`

  const svg = await satori(Ogp({ title, portraitBase64, moyaiBase64 }), {
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
