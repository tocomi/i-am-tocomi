---
title: 'Astro を使ってポートフォリオを作った'
pubDate: 2025-11-24
tags: ["技術"]
---

Astro を一度触ってみたかったので、新しいポートフォリオを Astro で作ってみた。

前のポートフォリオを作ったときは Next.js を使ってたけど、その時に比べてよりミニマムな構成で軽量なページを作ることに関心が増えてきたので、Astro に興味が湧いてきた感じ。

作る過程で触った機能とか工夫した点をまとめておく。

## ブログ記事の管理

以前のポートフォリオでは、ブログは Notion で書いて [Super](https://super.so/) で公開する形にしていた。

ただ、ブログも含めてポートフォリオ内で管理したいよなあと思ったので、Astro の [Content Collection](https://docs.astro.build/ja/guides/content-collections/) を使って管理することにした。

Content Collection を使うと、Markdown ファイルを HTML に変換してくれたりメタデータを型安全に扱えたりするので、ブログの管理が楽になった。

```ts
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: blogSchema,
})
```

また、例えば↑みたいなコードのシンタックスハイライトはデフォルトで [Shiki](https://shiki.matsu.io/) が入っているので、特にカスタマイズせずに表示できるのは嬉しかった👨‍🎨

## OGP の生成

ブログも含めて全てのページに OGP を設定したかったので、ビルド時に各ページの OGP を生成する方法を採った。

OGP 画像の作成には、JSX から画像を生成できる [satori](https://satori.dev/) を使っている。

ブログの追加などにも対応できる形で OGP を生成するには SSR をして動的に生成するしかないと思っていたが、SSG でも対応できる方法があるというのが学びだった📝

## View Transition

View Transition を使って、ページ遷移時のアイコンの移動をスムーズにしたかった。

Astro で [View Transition を使うための方法](https://docs.astro.build/ja/guides/view-transitions/) の一つとして `<ClientRouter />` を使う方法があり、このコンポーネントを使うだけで View Transition が有効になるのでこれを利用した。

これにより、ページ移動時の全体の繊維がスムーズに行われるようになった。

便利な一方で、このコンポーネントを使うと MPA ではなく SPA として動作するようになるという制約がある⚠️

アイコンの移動をスムーズにする実装は、アイコンのクラスに `transition:name="portrait"` を追加するだけで完了した。

## MCP の活用

Astro では [MCP](https://docs.astro.build/ja/guides/build-with-ai/) を提供しているので利用した。

普段使っている Claude Code に MCP をセットアップすることで、Astro の仕様や API についての質問も AI に聞けるようになり便利だった。
