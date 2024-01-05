import { Project } from '@/components'

const descriptions = [
  'みんなで大喜利ができるSlackBotです🤖',
  '社内でのコミュニケーションツールの一環として作りました。',
  '匿名で参加できて、ウケた回答だけ名前が開示されるから安心！',
]

const stacks = ['Slack Bolt', 'Node.js', 'Typescript', 'Firebase', 'Heroku']

const links = [
  {
    title: 'GitHub',
    url: 'https://github.com/tocomi/oogiri-bot',
  },
  {
    title: 'note',
    url: 'https://note.com/tocomi/n/nfccf235976f9',
  },
  {
    title: 'Blog',
    url: 'https://tech.techtouch.jp/entry/slack-oogiri-bot',
  },
]

export default function OogiriBotPage() {
  return <Project descriptions={descriptions} stacks={stacks} links={links} />
}
