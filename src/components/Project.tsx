import { FC, memo } from 'react'
import { Badge } from './Badge'
import { CustomLink } from './CustomLink'

type Props = {
  descriptions: string[]
  stacks: string[]
  links: {
    title: string
    url: string
  }[]
}

export const Project: FC<Props> = memo(({ descriptions, stacks, links }) => {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">oogiri-bot</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {descriptions.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
          {stacks.map((stack) => (
            <Badge key={stack}>{stack}</Badge>
          ))}
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          {links.map((link) => (
            <CustomLink key={link.url} external href={link.url}>
              {link.title}
            </CustomLink>
          ))}
        </div>
      </div>
    </section>
  )
})
