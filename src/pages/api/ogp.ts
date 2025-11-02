import { ImageResponse } from '@vercel/og'
import type { APIRoute } from 'astro'
import { Ogp } from '@/components/ogp'

export const prerender = false

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') ?? 'Untitled'
  if (!title) {
    return new Response('Title is required', { status: 400 })
  }

  const fontData = await fetch(
    new URL('@/fonts/NotoSansJP-Regular.ttf', import.meta.url)
  ).then(res => res.arrayBuffer())

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
