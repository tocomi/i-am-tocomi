import { z } from 'astro:content'

export const blogSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  tags: z.array(z.string()),
  external: z
    .object({
      url: z.string(),
      platform: z.enum(['zenn', 'hatena']),
    })
    .optional(),
})
export type Blog = z.infer<typeof blogSchema>
