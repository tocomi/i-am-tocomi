import { Project } from '@/components'

const descriptions = [
  '競走馬を独自の指数でスコアリングします🏇',
  'レースのデータはスクレイピングで取得しています。',
  'スクレイピングには Puppeteer を使い、Cloud Run 上で実行しています。',
  'ISR を使うことで、リアルタイム性を一部犠牲にする代わりにスクレイピング回数を抑制しています。',
]

const stacks = [
  'Next.js',
  'TypeScript',
  'Panda CSS',
  'Puppeteer',
  'Cloud Run',
  'Vercel',
]

const links = [
  {
    title: 'GitHub',
    url: 'https://github.com/tocomi/umaaji-analyzer',
  },
  {
    title: 'Page',
    url: 'https://umaaji-analyzer.vercel.app/',
  },
]

export default function UmaajiAnalyzerPage() {
  return (
    <Project
      title="UMAAJI Analyzer"
      descriptions={descriptions}
      stacks={stacks}
      links={links}
    />
  )
}
