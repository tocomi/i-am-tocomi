import { CustomLink } from '@/components'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({
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
      <body className={inter.className}>
        <div className="h-screen">
          <main className="p-24 h-[90%] flex justify-around gap-2">
            <div className="w-3/4 flex items-center justify-center">
              {children}
            </div>
            <div className="flex flex-col items-start w-1/4 justify-center gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold mb-1">Projects</h3>
                <CustomLink href="/projects/oogiri">oogiri-bot</CustomLink>
                <CustomLink href="/projects/oogiri-history">
                  oogiri-history
                </CustomLink>
                <CustomLink href="/projects/koedame">koedame</CustomLink>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold mb-1">Links</h3>
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
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
