const EXCERPT_LENGTH = 120

// NOTE: 見出し・画像・引用・表・区切り線と、リンクだけの行は抜粋に含めない
const NON_PROSE_LINE = /^(#|!\[|>|\||---|\[[^\]]*\]\([^)]*\)$)/

const stripInlineMarkdown = (line: string) =>
  line
    .replace(/^[-*+]\s+/, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*`]/g, '')
    .trim()

export const createExcerpt = (markdown: string) => {
  const text = markdown
    .replace(/```[\s\S]*?```/g, '')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '' && !NON_PROSE_LINE.test(line))
    .map(stripInlineMarkdown)
    .filter(line => line !== '')
    .join(' ')

  // NOTE: 絵文字を途中で切らないようコードポイント単位で切り詰める
  return [...text].slice(0, EXCERPT_LENGTH).join('')
}
