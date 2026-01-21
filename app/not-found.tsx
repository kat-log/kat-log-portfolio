import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404エラーコード */}
        <p className="text-9xl md:text-[200px] font-bold text-gray-500 dark:text-gray-500 mb-4">
          404
        </p>

        {/* エラーメッセージ - メインの見出し */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          お探しのページは見つかりませんでした。
          <br />
          URLが間違っているか、ページが移動・削除された可能性があります。
        </p>

        {/* ホームに戻るボタン */}
        <Button size="lg" asChild>
          <Link href="/">
            ホームに戻る
          </Link>
        </Button>
      </div>
    </div>
  )
}
