// Edge Runtime (middleware, edge routes等) でのSentry初期化設定
// ローカル実行時にも必要
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const isProduction = process.env.NODE_ENV === 'production'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // トレースのサンプリングレート（本番: 10%, 開発: 100%）
  tracesSampleRate: isProduction ? 0.1 : 1.0,

  // 開発時のみデバッグモードを有効化
  debug: !isProduction,
})
