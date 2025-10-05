import { z } from 'astro:content'

export const tag = z.enum(['技術', 'イベント', '読書', '趣味', '日常'])

export const blogSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  tags: z.array(tag),
  external: z
    .object({
      url: z.string(),
      platform: z.enum(['zenn', 'hatena']),
    })
    .optional(),
})
export type Blog = z.infer<typeof blogSchema>
