import type { ReactNode } from 'react'

import { readFileSync } from 'node:fs'
import { join } from 'node:path'

type Props = {
  title: string
}

const portraitPath = join(process.cwd(), 'public', 'images', 'portrait.jpg')
const portraitData = readFileSync(portraitPath)
const portraitBase64 = `data:image/jpeg;base64,${portraitData.toString('base64')}`

const moyaiPath = join(process.cwd(), 'public', 'images', 'moyai.png')
const moyaiData = readFileSync(moyaiPath)
const moyaiBase64 = `data:image/png;base64,${moyaiData.toString('base64')}`

/**
 * OGP 生成用のコンポーネント
 *
 * - web サイト上で表示する想定はない
 */
export const Ogp = ({ title }: Props) => (
  <Background>
    <Container>
      <Title title={title} />
      <Footer portraitBase64={portraitBase64} moyaiBase64={moyaiBase64} />
    </Container>
  </Background>
)

const Background = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage:
        'linear-gradient(135deg, #ff6b6b 0%, #ffa500 50%, #ff1493 100%)',
      width: '1200px',
      height: '630px',
    }}
  >
    {children}
  </div>
)

const Container = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: '16px',
      flexDirection: 'column',
      gap: '16px',
      width: '1160px',
      height: '590px',
      padding: '48px',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
    }}
  >
    {children}
  </div>
)

const Title = ({ title }: { title: string }) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      position: 'relative',
    }}
  >
    <div
      style={{
        display: 'flex',
        width: '100%',
        border: '4px solid black',
        borderRadius: '24px',
        padding: '20px 32px',
        height: '264px',
      }}
    >
      <h1
        style={{
          fontSize: '48px',
          margin: 0,
        }}
      >
        {title}
      </h1>
    </div>
    <div
      style={{
        position: 'absolute',
        bottom: '-18px',
        right: '84px',
        width: '0',
        height: '0',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: '20px solid black',
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: '-13px',
        right: '87px',
        width: '0',
        height: '0',
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent',
        borderTop: '17px solid white',
      }}
    />
  </div>
)

const Footer = ({
  portraitBase64,
  moyaiBase64,
}: {
  portraitBase64: string
  moyaiBase64: string
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: '100%',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <img
        src={portraitBase64}
        alt="Portrait"
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
          width: '100px',
          height: '100px',
        }}
      />
      <p style={{ fontSize: '36px' }}>Kenta TSUNEMI / @tocomi</p>
    </div>
    <div style={{ display: 'flex' }}>
      <img
        src={moyaiBase64}
        alt="Moyai"
        style={{
          width: '200px',
          height: '200px',
        }}
      />
    </div>
  </div>
)
