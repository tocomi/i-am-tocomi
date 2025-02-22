import { RotatingPortrait } from '@/components'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <RotatingPortrait />
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-3xl">Kenta TSUNEMI</h2>
        <h3 className="font-bold text-2xl">@tocomi</h3>
        <p className="text-lg">Web Engineer</p>
        <p className="text-lg">Techtouch, Inc.</p>
        <p className="text-lg">笑いの取れるエンジニアを目指しています🗿</p>
      </div>
    </div>
  )
}
