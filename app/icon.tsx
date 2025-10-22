import { ImageResponse } from 'next/og'

export const runtime = 'edge'
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
          fontSize: 24,
          background: 'linear-gradient(to bottom right, rgb(23, 67, 116), rgb(59, 130, 246))',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%',
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="15" y="15" width="70" height="50" rx="3" fill="#0a0a0a" />
          <rect x="20" y="20" width="60" height="40" rx="2" fill="white" opacity="0.1" />
          <line x1="25" y1="28" x2="45" y2="28" stroke="white" strokeWidth="2" />
          <line x1="25" y1="35" x2="55" y2="35" stroke="white" strokeWidth="2" />
          <line x1="25" y1="42" x2="40" y2="42" stroke="white" strokeWidth="2" />
          <line x1="25" y1="49" x2="50" y2="49" stroke="white" strokeWidth="2" />
          <rect x="45" y="65" width="10" height="8" rx="1" fill="white" />
          <ellipse cx="50" cy="75" rx="15" ry="3" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
