import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p style={{ fontSize: 120 }}>🗿🗿🗿</p>
        <p style={{ fontSize: 64 }}>I am tocomi</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
