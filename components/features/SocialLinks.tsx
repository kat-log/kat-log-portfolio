'use client'

import { motion } from 'framer-motion'
import { siGithub, siX, siQiita } from 'simple-icons'
import { Button } from '@/components/ui/button'

type SocialPlatform = 'github' | 'x' | 'qiita'

const socialIcons: Record<SocialPlatform, typeof siGithub> = {
  github: siGithub,
  x: siX,
  qiita: siQiita,
}

interface SocialLink {
  platform: string
  url: string
}

interface SocialLinksProps {
  links: SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => {
        const icon = socialIcons[link.platform as SocialPlatform]

        return (
          <motion.div
            key={link.platform}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <div
                  className="w-5 h-5 flex-shrink-0 [&>svg]:w-full [&>svg]:h-full"
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                  style={{ fill: 'currentColor' }}
                />
                <span className="uppercase">{link.platform}</span>
              </a>
            </Button>
          </motion.div>
        )
      })}
    </div>
  )
}
