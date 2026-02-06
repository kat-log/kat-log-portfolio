// Next.js Client Instrumentation（Turbopack対応）
// Next.js 15.3+ で自動的にクライアントバンドルに含まれる
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const isProduction = process.env.NODE_ENV === 'production'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // トレースのサンプリングレート（本番: 10%, 開発: 100%）
  tracesSampleRate: isProduction ? 0.1 : 1.0,

  // 開発時のみデバッグモードを有効化
  debug: !isProduction,

  // エラー発生時のリプレイ記録率（100%キャプチャ）
  replaysOnErrorSampleRate: 1.0,

  // 通常セッションのリプレイ記録率（本番のみ10%）
  replaysSessionSampleRate: isProduction ? 0.1 : 0,

  // Session Replay機能の設定
  integrations: [
    Sentry.replayIntegration({
      // プライバシー保護設定
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
})

// ナビゲーション遷移の計測（Next.js App Router）
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
