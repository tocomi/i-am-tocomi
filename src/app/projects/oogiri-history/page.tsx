import { Project } from '@/components'

const descriptions = [
  'oogiri-bot の結果確認ページです👺',
  '社内向けなのでログインページのみの公開です🙏',
  'データは頻繁に更新されるものではないので、ISR を使ってレンダリングの高速化を図っています。',
]

const stacks = ['Next.js', 'TypeScript', 'Panda CSS', 'Vercel']

const links = [
  {
    title: 'Page',
    url: 'https://oogiri-history.vercel.app',
  },
]

export default function OogiriHistoryPage() {
  return (
    <Project
      title="oogiri-history"
      descriptions={descriptions}
      stacks={stacks}
      links={links}
    />
  )
}
