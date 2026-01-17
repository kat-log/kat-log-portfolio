'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * ページ遷移アニメーションを提供するプロバイダーコンポーネント
 *
 * シンプルなフェードインアニメーションでページ遷移を演出
 * Note: AnimatePresenceのmode="wait"はNext.js App Routerと
 * 相性が悪く描画問題を起こすため、シンプルな実装に変更
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
