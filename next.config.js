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
}

export default nextConfig