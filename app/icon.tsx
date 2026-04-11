import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #247e75, #3aafa9)',
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            fontSize: '22px',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1,
          }}
        >
          K
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}
