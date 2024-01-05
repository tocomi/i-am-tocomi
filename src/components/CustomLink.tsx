import Link from 'next/link'
import { ReactNode } from 'react'

export const CustomLink = ({
  href,
  external = false,
  children,
}: {
  href: string
  external?: boolean
  children: ReactNode
}) => {
  return (
    <Link
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-xl font-bold w-fit text-sky-200 hover-underline-animation"
    >
      {children}
    </Link>
  )
}
