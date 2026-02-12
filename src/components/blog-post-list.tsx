import { useState } from 'react'
import type { Tag } from '@/content/types'

type SerializedPost = {
  id: string
  title: string
  pubDate: string
  tags: Tag[]
  external?: {
    url: string
    platform: 'zenn' | 'hatena'
  }
}

type Props = {
  posts: SerializedPost[]
  allTags: readonly Tag[]
  allYears: number[]
}

const formatFullDate = (date: Date) => {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mb-3 ml-[-4px] inline h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#888"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const ZennLogo = () => (
  <svg
    className="mb-1 ml-1 inline h-5 w-5"
    viewBox="0 0 88.3 88.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#3EA8FF">
      <path d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9C2.8,82.5,3.2,83.3,3.9,83.3z" />
      <path d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1h16.3C61.3,83.3,62.1,82.9,62.5,82.1z" />
    </g>
  </svg>
)

const HatenaLogo = () => (
  <svg
    className="mb-1 inline h-7 w-7"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
  >
    <path
      fill="#333"
      d="M149.999 248.909c-54.537 0-98.906-44.367-98.906-98.909 0-54.537 44.369-98.909 98.906-98.909 54.545 0 98.908 44.372 98.908 98.909 0 54.542-44.363 98.909-98.908 98.909zm0-185.238c-47.601 0-86.33 38.723-86.33 86.329 0 47.605 38.729 86.332 86.33 86.332 47.61 0 86.338-38.727 86.338-86.332 0-47.606-38.728-86.329-86.338-86.329zM161.52 101.16c-4.832-9.785-7.783-19.3-9.273-24.845v70.055c2.447.917 4.197 3.257 4.197 6.021 0 3.559-2.887 6.442-6.443 6.442-3.56 0-6.443-2.885-6.443-6.442 0-2.896 1.925-5.317 4.558-6.131v-70.019c-1.485 5.531-4.438 15.092-9.293 24.919-7.571 15.314-17.009 28.823-17.009 28.823l6.036 82.598s5.736 6.401 22.31 6.41h.023c16.573-.009 22.312-6.41 22.312-6.41l6.035-82.598c-.003 0-9.441-13.508-17.01-28.823z"
    />
  </svg>
)

const ExternalIcons = ({ platform }: { platform: 'zenn' | 'hatena' }) => (
  <>
    <ExternalIcon />
    {platform === 'zenn' && <ZennLogo />}
    {platform === 'hatena' && <HatenaLogo />}
  </>
)

const BlogCard = ({ post }: { post: SerializedPost }) => {
  const href = post.external?.url ?? `/blog/${post.id}`
  const formattedDate = formatFullDate(new Date(post.pubDate))

  return (
    <article className="group border-b border-gray-200 pt-2 pb-3 first:pt-0 last:border-b-0">
      <a
        href={`${href}/`}
        className="block"
        target={post.external ? '_blank' : '_self'}
        rel={post.external ? 'noopener noreferrer' : undefined}
      >
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full px-2 py-0.25 text-[11px] text-gray-500 border border-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <time className="flex-shrink-0 text-sm text-gray-500">
              {formattedDate}
            </time>
          </div>
          <h3 className="font-bold text-gray-900 transition-colors group-hover:text-blue-600">
            {post.title}
            {post.external && (
              <ExternalIcons platform={post.external.platform} />
            )}
          </h3>
        </div>
      </a>
    </article>
  )
}

export const BlogPostList = ({ posts, allTags, allYears }: Props) => {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const filteredPosts = posts.filter(post => {
    if (selectedTag && !post.tags.includes(selectedTag)) return false
    if (selectedYear && new Date(post.pubDate).getFullYear() !== selectedYear)
      return false
    return true
  })

  // グループ化
  const postsByYear = filteredPosts.reduce(
    (acc, post) => {
      const year = new Date(post.pubDate).getFullYear()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(post)
      return acc
    },
    {} as Record<number, SerializedPost[]>
  )

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  const handleTagClick = (tag: Tag) => {
    setSelectedTag(prev => (prev === tag ? null : tag))
  }

  const handleYearClick = (year: number) => {
    setSelectedYear(prev => (prev === year ? null : year))
  }

  const handleReset = () => {
    setSelectedTag(null)
    setSelectedYear(null)
  }

  const hasFilter = selectedTag !== null || selectedYear !== null

  return (
    <div>
      {/* フィルター */}
      <div className="mb-8 flex flex-col gap-4">
        {/* カテゴリフィルター */}
        <div>
          <div className="mb-2 text-sm font-semibold text-gray-600">
            カテゴリ
          </div>
          <div className="flex flex-wrap gap-1.5">
            {allTags.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 年フィルター */}
        <div>
          <div className="mb-2 text-sm font-semibold text-gray-600">年</div>
          <div className="flex flex-wrap gap-1.5">
            {allYears.map(year => (
              <button
                key={year}
                type="button"
                onClick={() => handleYearClick(year)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors cursor-pointer ${
                  selectedYear === year
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* リセット */}
        {hasFilter && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {filteredPosts.length} 件
            </span>
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer"
            >
              フィルターをリセット
            </button>
          </div>
        )}
      </div>

      {/* 記事一覧 */}
      <div className="flex flex-col gap-6">
        {years.length === 0 && (
          <p className="text-gray-500">該当する記事がありません。</p>
        )}
        {years.map(year => (
          <div key={year}>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-1">
              {year}
            </h2>
            <div className="flex flex-col gap-1">
              {postsByYear[year].map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
