import { withSentryConfig } from '@sentry/nextjs'
import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  images: {
    // 外部画像ホストの許可
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // 画像最適化設定
    formats: ['image/avif', 'image/webp'], // AVIF優先、次にWebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // レスポンシブ画像のブレークポイント
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // アイコンなど小さい画像用
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30日間キャッシュ
    dangerouslyAllowSVG: false, // SVGの許可（セキュリティリスクあり）
    contentDispositionType: 'attachment', // SVG用のセキュリティヘッダー
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // SVG用のCSP
  },
  // バンドルサイズ最適化
  compiler: {
    // 本番環境でconsole.log等を削除（デバッグコードの除去）
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // error と warn は残す
    } : false,
  },
}

// Bundle Analyzerの設定
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// Sentry設定オプション
const sentryOptions = {
  // ソースマップのアップロード設定
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // 認証トークン（CI/CD用）
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // ソースマップを本番ビルドでのみアップロード
  silent: !process.env.CI,

  // 追加のWebpack設定
  widenClientFileUpload: true,

  // ソースマップをクライアントに公開しない
  hideSourceMaps: true,

  // 注: automaticVercelMonitors は Turbopack 非対応のため削除
}

export default withSentryConfig(bundleAnalyzer(nextConfig), sentryOptions)