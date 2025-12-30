'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Escキーでメニューを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // モバイルメニュー開時はスクロールを防止
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);

    // ハッシュリンクの場合はスムーズスクロール
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* デスクトップナビゲーション */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={handleLinkClick(link.href)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* モバイルハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* モバイルメニューオーバーレイ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 背景オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* スライドメニュー */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* メニューヘッダー */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* ナビゲーションリンク */}
                <ul className="flex flex-col p-4 space-y-2">
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={handleLinkClick(link.href)}
                        className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
