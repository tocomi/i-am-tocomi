import { CustomLink } from '@/components'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'I am tocomi !!',
  description: "tocomi's portfolio site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="h-screen">
          <header className="flex justify-center gap-8 py-4 border-b border-white">
            <CustomLink href="/">About</CustomLink>
            <CustomLink href="/portfolio">Portfolio</CustomLink>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
