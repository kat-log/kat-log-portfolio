import { ProjectGrid } from '@/components/features/ProjectGrid'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-16 px-4 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Kat Log Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS
          </p>
        </div>
      </section>

      {/* プロジェクト一覧セクション */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">
              私が手がけたプロジェクトの一覧です
            </p>
          </div>

          <ProjectGrid projects={projects} />
        </div>
      </section>
    </main>
  )
}