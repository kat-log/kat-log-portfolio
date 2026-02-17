import { Metadata } from 'next'
// import Image from 'next/image' // TODO: 実際の画像を使用する際にコメント解除
import { Mail, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
// TODO: スキルセクション復活時にコメント解除
// import { getSkillsByCategory } from '@/data/skills'
// import { SkillCard } from '@/components/features/SkillCard'
import { SocialLinks } from '@/components/features/SocialLinks'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Web開発を学んでいます。これまでの制作物をまとめていますのでご覧ください。',
  openGraph: {
    title: 'About - Kat Log',
    description:
      'Web開発を学んでいます。これまでの制作物をまとめていますのでご覧ください。',
    type: 'profile',
    images: [
      {
        url: '/api/og?type=about&title=About - Kat Log&description=Web開発を学んでいます。これまでの制作物をまとめていますのでご覧ください。',
        width: 1200,
        height: 630,
        alt: 'About Kat Log',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Kat Log',
    description:
      'Web開発を学んでいます。これまでの制作物をまとめていますのでご覧ください。',
    images: ['/api/og?type=about&title=About - Kat Log&description=Web開発を学んでいます。これまでの制作物をまとめていますのでご覧ください。'],
  },
}

export default function AboutPage() {
  // TODO: スキルセクション復活時にコメント解除
  // const languageSkills = getSkillsByCategory('language')
  // const frameworkSkills = getSkillsByCategory('framework')
  // const toolSkills = getSkillsByCategory('tool')

  return (
    <div className="min-h-screen py-12 px-4 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* プロフィールセクション */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* プロフィール画像 */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                {/* TODO: 実際の画像に置き換える
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
                */}
                {/* 一時的なプレースホルダー */}
                <span className="text-6xl md:text-8xl">👤</span>
              </div>
            </div>

            {/* プロフィール情報 */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {profile.title}
              </p>

              <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                {profile.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                )}
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {profile.longBio}
              </p>
            </div>
          </div>
        </section>

        {/* SNSリンクセクション */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Connect</h2>
          <SocialLinks links={profile.socialLinks} />
        </section>

        {/* TODO: スキルセクション - スキルレベルの見直し後に表示を復活させる
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {languageSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {frameworkSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {toolSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </section>
        */}

        {/* CTAセクション */}
        <section data-testid="cta-section" className="text-center py-12 px-6 bg-muted rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            一緒に開発できる機会があれば嬉しいです。お気軽にご連絡ください。
          </p>
          {profile.email && (
            <Button size="lg" asChild>
              <a href={`mailto:${profile.email}`}>Get in Touch</a>
            </Button>
          )}
        </section>
      </div>
    </div>
  )
}
