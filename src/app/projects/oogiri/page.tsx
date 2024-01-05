import { CustomLink } from '@/components'
import { Badge } from '@/components/Badge'

export default function OogiriPage() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">oogiri-bot</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p>みんなで大喜利ができるSlackBotです🤖</p>
          <p>社内でのコミュニケーションツールの一環として作りました。</p>
          <p>匿名で参加できて、ウケた回答だけ名前が開示されるから安心！</p>
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
          <Badge>Slack Bolt</Badge>
          <Badge>Node.js</Badge>
          <Badge>Typescript</Badge>
          <Badge>Firebase</Badge>
          <Badge>Heroku</Badge>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          <CustomLink external href="https://github.com/tocomi/oogiri-bot">
            GitHub
          </CustomLink>
          <CustomLink external href="https://note.com/tocomi/n/nfccf235976f9">
            note
          </CustomLink>
          <CustomLink
            external
            href="https://tech.techtouch.jp/entry/slack-oogiri-bot"
          >
            Blog
          </CustomLink>
        </div>
      </div>
    </section>
  )
}
