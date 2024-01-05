import { Project } from '@/components'

const descriptions = [
  'oogiri-bot の結果確認ページです👺',
  '社内向けなのでログインページのみの公開です🙏',
  'ただログインページが一番力作なのでそこさえ見てもらえたら満足です😂',
]

const stacks = ['Next.js', 'TypeScript', 'Panda CSS', 'Vercel']

const links = [
  {
    title: 'Page',
    url: 'https://oogiri-history.vercel.app',
  },
]

export default function OogiriHistoryPage() {
  return <Project descriptions={descriptions} stacks={stacks} links={links} />
}
