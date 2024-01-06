import { FC, memo } from 'react'
import { Badge } from './Badge'
import { CustomLink } from './CustomLink'

type Props = {
  title: string
  descriptions: string[]
  stacks: string[]
  links: {
    title: string
    url: string
  }[]
}

export const Project: FC<Props> = memo(
  ({ title, descriptions, stacks, links }) => {
    return (
      <section className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {descriptions.map((description) => (
              <p key={description}>{description}</p>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            {stacks.map((stack) => (
              <Badge key={stack}>{stack}</Badge>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {links.map((link) => (
              <CustomLink key={link.url} external href={link.url}>
                {link.title}
              </CustomLink>
            ))}
          </div>
        </div>
      </section>
    )
  }
)
