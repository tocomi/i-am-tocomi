import { CustomLink } from '@/components'
import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'

const font = Instrument_Sans({
  subsets: ['latin'],
})

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
      <body className={font.className}>
        <div className="flex items-center justify-center sm:h-screen">
          <main className="flex max-w-[800px] flex-col justify-between gap-12 p-8 sm:flex-row sm:gap-8">
            <div className="flex max-w-[480px] items-center justify-center md:w-[480px]">
              {children}
            </div>
            <div className="flex min-w-44 flex-1 flex-col items-start justify-center gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="mb-1 text-2xl font-bold">Projects</h3>
                <CustomLink href="/projects/oogiri">oogiri-bot</CustomLink>
                <CustomLink href="/projects/oogiri-history">
                  oogiri-history
                </CustomLink>
                <CustomLink href="/projects/umaaji-analyzer">
                  umaaji-analyzer
                </CustomLink>
                <CustomLink href="/projects/koedame">koedame</CustomLink>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-1 text-2xl font-bold">Links</h3>
                <CustomLink href="https://i-am-tocomi.super.site" external>
                  Blog
                </CustomLink>
                <CustomLink href="https://github.com/tocomi" external>
                  GitHub
                </CustomLink>
                <CustomLink href="https://twitter.com/tocomi0112" external>
                  Twitter
                </CustomLink>
              </div>
              <CustomLink href="/">Home</CustomLink>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
