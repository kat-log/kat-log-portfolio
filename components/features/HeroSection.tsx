'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  // スクロール位置を取得
  const { scrollY } = useScroll()

  // パララックス効果: スクロールに応じて背景を移動（0.5倍速）
  const backgroundY = useTransform(scrollY, [0, 500], [0, 250])
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    },
  }

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      {/* 背景（ベース） */}
      <div className="absolute inset-0 bg-white dark:bg-gray-950 -z-10" />

      {/* 背景グラデーション（パララックス効果） */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20 z-0"
        style={{
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
      />

      {/* コンテンツ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* メインタイトル */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
        >
          Welcome to Kat Log
        </motion.h1>

        {/* サブタイトル */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 mb-8 font-medium"
        >
          Creating Modern Web Experiences
        </motion.p>

        {/* 説明文 */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Web開発者として、モダンな技術スタックを活用したユーザー体験の高いアプリケーションを構築しています。
          Next.js、TypeScript、Tailwind CSSを使用したプロジェクトをご覧ください。
        </motion.p>

        {/* CTA ボタン */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleScrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            プロジェクトを見る
          </button>
          <a
            href="/about"
            className="px-8 py-4 border-2 border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            About Me
          </a>
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.button
        variants={scrollIndicatorVariants}
        animate="animate"
        onClick={handleScrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer group"
        aria-label="Scroll to projects"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <ChevronDown className="w-8 h-8" />
        </div>
      </motion.button>
    </section>
  )
}
