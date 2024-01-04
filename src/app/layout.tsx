import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

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
        <header className="flex justify-center gap-2">
          <Link href="/">About</Link>
          <Link href="/portfolio">Portfolio</Link>
        </header>
        {children}
      </body>
    </html>
  )
}
