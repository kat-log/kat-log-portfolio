'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

/**
 * ThemeToggle component
 *
 * ダークモード/ライトモードを切り替えるトグルボタン。
 * システム設定を考慮し、マウント後にのみ表示されます。
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // クライアントサイドでマウントされた後にのみ表示
  // これによりハイドレーションミスマッチを防ぐ
  // （useTheme は初期レンダー時に localStorage を読むため、SSR の出力と一致しない）
  // useSyncExternalStore はハイドレーション時にサーバースナップショットを使うため、
  // useEffect + setState を挟まずに「マウント済みか」を安全に判定できる
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  )

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9" disabled>
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
