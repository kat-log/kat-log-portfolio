'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * ページ遷移アニメーションを提供するプロバイダーコンポーネント
 *
 * Framer MotionのAnimatePresenceを使用して、
 * ページ間のスムーズなフェードイン/アウトトランジションを実装
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0.0, 0.2, 1], // easeInOut カスタムベジェ曲線
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
