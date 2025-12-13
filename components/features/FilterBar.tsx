'use client'

import { useState } from 'react'
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
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant={activeFilter === filter.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFilterClick(filter.value)}
            className="transition-all duration-200 hover:scale-105"
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
