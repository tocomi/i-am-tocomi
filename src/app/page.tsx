import { RotatingPortrait } from '@/components'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <RotatingPortrait />
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold">Kenta TSUNEMI</h2>
        <h3 className="text-2xl font-bold">@tocomi</h3>
        <p className="text-lg">Web Engineer</p>
        <p className="text-lg">Techtouch, Inc.</p>
        <p className="text-lg">笑いの取れるエンジニアを目指しています🗿</p>
      </div>
    </div>
  )
}
