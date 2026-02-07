// Next.js Instrumentation ファイル
// サーバーサイドとEdge RuntimeでSentryを初期化
// https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // サーバーサイド（Node.js）での初期化
    await import('./sentry.server.config')
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge Runtimeでの初期化
    await import('./sentry.edge.config')
  }
}

// onRequestError は意図的に実装しない
// Sentry SDKの自動計装（Auto Instrumentation）に任せることで、
// 二重送信のリスクを避け、メンテナンスコストを削減
