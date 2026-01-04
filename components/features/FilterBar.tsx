'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectTag, PROJECT_TAG_LABELS } from '@/types'
import { Button } from '@/components/ui/button'

interface FilterBarProps {
  onFilterChange: (tag: ProjectTag | 'all') => void
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectTag | 'all'>('all')

  const handleFilterClick = (tag: ProjectTag | 'all') => {
    setActiveFilter(tag)
    onFilterChange(tag)
  }

  const filters: Array<{ value: ProjectTag | 'all'; label: string }> = [
    { value: 'all', label: 'すべて' },
    { value: 'frontend', label: PROJECT_TAG_LABELS.frontend },
    { value: 'backend', label: PROJECT_TAG_LABELS.backend },
    { value: 'fullstack', label: PROJECT_TAG_LABELS.fullstack },
    { value: 'design', label: PROJECT_TAG_LABELS.design },
    { value: 'opensource', label: PROJECT_TAG_LABELS.opensource },
  ]

  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap items-center justify-center gap-3 p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-lg shadow-black/5 dark:shadow-black/10">
        {filters.map((filter, index) => (
          <motion.div
            key={filter.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterClick(filter.value)}
              className="relative overflow-hidden"
            >
              {activeFilter === filter.value && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {filter.label}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
