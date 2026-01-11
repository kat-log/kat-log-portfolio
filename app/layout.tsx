import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { PageTransition } from '@/components/providers/PageTransition'

export const metadata: Metadata = {
  metadataBase: new URL('https://kat-log-portfolio.vercel.app'), // TODO: 実際のデプロイURLに置き換え
  title: {
    default: 'Kat Log - Web Developer Portfolio',
    template: '%s | Kat Log',
  },
  description:
    'モダンな技術を使ってユーザー体験を向上させるWebアプリケーションを開発しています。Next.js、React、TypeScriptを活用したプロジェクトをご覧ください。',
  keywords: [
    'Web Developer',
    'Frontend Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'ポートフォリオ',
    'フロントエンド',
    'Web開発',
  ],
  authors: [{ name: 'Kat Log' }],
  creator: 'Kat Log',
  publisher: 'Kat Log',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://kat-log-portfolio.vercel.app',
    siteName: 'Kat Log Portfolio',
    title: 'Kat Log - Web Developer Portfolio',
    description:
      'モダンな技術を使ってユーザー体験を向上させるWebアプリケーションを開発しています。',
    images: [
      {
        url: '/og-image.png', // TODO: OG画像を作成
        width: 1200,
        height: 630,
        alt: 'Kat Log Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kat Log - Web Developer Portfolio',
    description:
      'モダンな技術を使ってユーザー体験を向上させるWebアプリケーションを開発しています。',
    creator: '@yourusername', // TODO: 実際のTwitterアカウントに置き換え
    images: ['/og-image.png'], // TODO: OG画像を作成
  },
  verification: {
    // TODO: Google Search Consoleの確認後に追加
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://kat-log-portfolio.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 pt-16">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}