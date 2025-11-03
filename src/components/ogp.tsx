import type { ReactNode } from 'react'

type Props = {
  title: string
  portraitBase64: string
}

export const Ogp = ({ title, portraitBase64 }: Props) => (
  <Background>
    <Container>
      <h1
        style={{
          fontSize: '72px',
          fontWeight: 'bold',
          lineHeight: '1.1',
          margin: 0,
        }}
      >
        {title}
      </h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'gray',
        }}
      >
        <img
          src={portraitBase64}
          alt="Portrait"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
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
      padding: '16px',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    }}
  >
    {children}
  </div>
)
