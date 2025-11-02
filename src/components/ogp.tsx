type Props = {
  title: string
}

export const Ogp = ({ title }: Props) => (
  <div
    style={{
      width: '1200px',
      height: '630px',
      background: 'linear-gradient(135deg, #1e293b, #0f172a)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px',
      color: 'white',
      fontFamily: 'Noto Sans JP',
    }}
  >
    <h1
      style={{
        fontSize: '72px',
        fontWeight: 'bold',
        lineHeight: 1.1,
        marginBottom: '40px',
      }}
    >
      {title}
    </h1>
  </div>
)
