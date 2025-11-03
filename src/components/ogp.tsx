import type { ReactNode } from 'react'

type Props = {
  title: string
  portraitBase64: string
  moyaiBase64: string
}

export const Ogp = ({ title, portraitBase64, moyaiBase64 }: Props) => (
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
  <div style={{ display: 'flex', width: '100%' }}>
    <h1
      style={{
        fontSize: '48px',
        margin: 0,
      }}
    >
      {title}
    </h1>
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
