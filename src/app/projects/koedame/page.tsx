import { Project } from '@/components'

const descriptions = [
  '歴史上の人物がリアクションしてくれる某 SNS のオマージュです🐦',
  '投稿内容がどこかに保存されたりはしませんのでご安心を。笑',
]

const stacks = ['Vue.js', 'Vuetify', 'Netlify']

const links = [
  {
    title: 'GitHub',
    url: 'https://github.com/tocomi/koedame',
  },
  {
    title: 'Page',
    url: 'https://koedame.netlify.app/',
  },
]

export default function KoedamePage() {
  return (
    <Project
      title="koedame"
      descriptions={descriptions}
      stacks={stacks}
      links={links}
    />
  )
}
