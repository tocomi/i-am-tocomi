import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { blogSchema } from './types'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: blogSchema,
})

export const collections = { blog }
