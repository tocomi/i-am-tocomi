export type Talk = {
  date: Date
  eventName: string
  eventUrl: string
  title: string
  slideUrl?: string
}

export const talks: Talk[] = [
  {
    date: new Date('2025-09-13'),
    eventName: 'M-1 グランプリ 2025',
    eventUrl: 'https://www.m-1gp.com/combi/35495.html',
    title: '1回戦敗退',
  },
  {
    date: new Date('2025-02-25'),
    eventName: 'shibuya.ts',
    eventUrl: 'https://shibuya-ts.connpass.com/event/339243/',
    title: '配列にまつわる型検査をしたら思ったより大変だった話',
    slideUrl:
      'https://speakerdeck.com/tocomi/pei-lie-nimatuwaruxing-jian-cha-wositarasi-tutayorida-bian-datutahua',
  },
  {
    date: new Date('2024-11-16'),
    eventName: 'TSKaigi Kansai 2024',
    eventUrl: 'https://kansai.tskaigi.org/talks/tocomi',
    title: '型チェック 速度改善 奮闘記⌛',
    slideUrl:
      'https://speakerdeck.com/tocomi/xing-tietuku-su-du-gai-shan-fen-dou-ji',
  },
  {
    date: new Date('2024-04-19'),
    eventName: 'BARフロントえんどう #2 「CSS Library / Framework」',
    eventUrl: 'https://cybozu.connpass.com/event/311066/',
    title: 'CSS セレクタを戦わせてみた⚔️',
    slideUrl: 'https://speakerdeck.com/tocomi/cssserekutawozhan-wasetemita',
  },
]
