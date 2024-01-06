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
      className="hover-underline-animation w-fit text-xl text-sky-200"
    >
      {children}
    </Link>
  )
}
