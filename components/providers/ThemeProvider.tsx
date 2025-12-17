'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * ThemeProvider component
 *
 * next-themesを使用してアプリ全体のテーマ管理を提供します。
 * ダークモード/ライトモードの切り替えとシステム設定の検出をサポートします。
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
