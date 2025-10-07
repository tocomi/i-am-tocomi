type Career = {
  period: string
  company: string
  role: string
  description: string
}

export const careers: Career[] = [
  {
    period: '2020年 - 現在',
    company: 'Techtouch, Inc.',
    role: 'Web Frontend Engineer',
    description:
      'プロダクト開発に従事。React/TypeScriptを用いたフロントエンド開発を担当。',
  },
  {
    period: '2018年 - 2020年',
    company: 'Previous Company',
    role: 'Software Engineer',
    description: 'Webアプリケーション開発に従事。',
  },
  {
    period: '2018年',
    company: 'University',
    role: '卒業',
    description: '情報系学科で学びました。',
  },
]

type Hobby = { icon: string; title: string; description: string }

export const hobbies: Hobby[] = [
  {
    icon: '🎮',
    title: 'Gaming',
    description: 'ゲームが好きです。',
  },
  {
    icon: '📚',
    title: 'Reading',
    description: '技術書や小説を読むことが好きです。',
  },
  {
    icon: '🎵',
    title: 'Music',
    description: '音楽鑑賞が趣味です。',
  },
  {
    icon: '✈️',
    title: 'Travel',
    description: '旅行に行くのが好きです。',
  },
]
