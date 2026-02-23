'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Screenshot } from '@/types'

interface ImageLightboxProps {
  images: Screenshot[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)

  // initialIndex が変わったらリセット
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  const hasMultiple = images.length > 1

  const handlePrevious = useCallback(() => {
    if (!hasMultiple) return
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [hasMultiple, images.length])

  const handleNext = useCallback(() => {
    if (!hasMultiple) return
    setDirection(1)
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [hasMultiple, images.length])

  // キーボード操作
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          handlePrevious()
          break
        case 'ArrowRight':
          handleNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, handlePrevious, handleNext])

  const currentImage = images[currentIndex]

  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] pointer-events-auto"
          role="dialog"
          aria-modal="true"
          aria-label="画像拡大表示"
        >
          {/* 背景オーバーレイ（クリックで閉じる） */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* 閉じるボタン */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="閉じる"
          >
            <X className="h-6 w-6" />
          </button>

          {/* カウンター */}
          {hasMultiple && (
            <div className="absolute top-4 left-4 z-20 text-white/70 text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* 前へボタン */}
          {hasMultiple && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="前の画像"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {/* 次へボタン */}
          {hasMultiple && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="次の画像"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          {/* 画像 */}
          <div className="flex items-center justify-center h-full px-16 py-16 pointer-events-none">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : direction < 0 ? -50 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : direction < 0 ? 50 : 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full h-full max-w-[90vw] max-h-[85vh] pointer-events-auto"
              >
                <Image
                  src={currentImage.url}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />

                {/* キャプション */}
                {currentImage.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3 text-center">
                    {currentImage.caption}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
