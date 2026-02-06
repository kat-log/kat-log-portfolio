'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーをSentryに送信
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="ja">
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>予期せぬエラーが発生しました</h2>
          <button onClick={() => reset()}>再試行</button>
        </div>
      </body>
    </html>
  )
}
