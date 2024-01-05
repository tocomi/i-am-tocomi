import { CustomLink } from '@/components'

export default function Home() {
  return (
    <main className="p-4 h-[90%] flex justify-around">
      <div className="flex flex-col items-center w-3/5 justify-center">
        <h2 className="text-lg">Kenta TSUNEMI</h2>
      </div>
      <div className="flex flex-col items-start w-2/5 justify-center gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold">Kenta TSUNEMI</h2>
          <h3 className="text-2xl font-bold">@tocomi</h3>
          <p className="text-lg">Web Engineer</p>
          <p className="text-lg">Techtouch, Inc.</p>
        </div>
        <div className="flex flex-col gap-2">
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
  )
}
