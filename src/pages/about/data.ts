type Career = {
  period: string
  company: string
  role: string
  description: string[]
}

export const careers: Career[] = [
  {
    period: '2021年2月 - 現在',
    company: 'テックタッチ株式会社',
    role: 'フロントエンドエンジニア',
    description: [
      'React/TypeScript を用いたフロントエンド開発を主に担当しています。',
      '分析機能の新規開発、ガイダンスの新規機能開発、DOM 操作の機能改善やパフォーマンス改善に従事しました。',
      '直近では AI を用いた機能強化のプロジェクトに参画しています。',
      'チームの業務効率化に関心があり、サイドプロジェクトでは CI/CD の時間短縮や自動化、Rspack の導入などに取り組みました。',
      'フロントエンドチームの勉強会や、最新ニュースをキャッチアップするラジオの運営も行っています。',
      'また、会社全体のコミュニケーションを活発化させるタスクフォースにも参加しており、チーム内外問わずコミュニケーションを盛り上げることが好きです。',
    ],
  },
  {
    period: '2019年10月 - 2021年1月',
    company: 'パーソルキャリア株式会社',
    role: 'Webエンジニア',
    description: [
      '転職を機にWebエンジニアに転身しました。',
      'ユーザーが転職したその後をサポートするサービスサイトや SNS の開発に従事しました。',
      'Nuxt.js と GCP を使用してフルスタックに開発を担当しました。',
    ],
  },
  {
    period: '2015年4月 - 2019年9月',
    company: '株式会社ワークスアプリケーションズ',
    role: 'エンジニア',
    description: [
      '研修で触れたプログラミングが楽しくエンジニアのキャリアを選びました。',
      '最初は給与計算プロダクトの問い合わせ対応や不具合修正を担当しました。',
      'その後プロダクトのバージョンアップ支援ツールの開発とスクラムマスターを担当しました。',
      'AWS や Java などクラウドやサーバーサイドの技術に触れることが多かったです。',
    ],
  },
  {
    period: '2010年4月 - 2015年3月',
    company: '東北大学',
    role: '経済学部経済学科',
    description: [
      'クラシックギターとスマブラDXに明け暮れる日々を過ごしました。',
      'ゼミでは統計学を学びました。',
      '単位を数え間違えて留年したのは今では鉄板ネタです。',
    ],
  },
]

type Hobby = { icon: string; title: string; description: string | string[] }

export const hobbies: Hobby[] = [
  {
    icon: '🎮',
    title: 'Gaming',
    description: 'ゲームが好きです。',
  },
  {
    icon: '📚',
    title: 'Reading',
    description: '技術書や小説を読むことが好きです。',
  },
  {
    icon: '🎵',
    title: 'Music',
    description: '音楽鑑賞が趣味です。',
  },
  {
    icon: '✈️',
    title: 'Travel',
    description: '旅行に行くのが好きです。',
  },
]
