import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { ProjectDetailContent } from '@/features/projects/components/project-detail-content'
import { ProjectDetailModal } from '@/features/projects/components/project-detail-modal'
import { getProjectById } from '@/features/projects/actions/get-projects'

const ProjectDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const { data: project } = await getProjectById(id)

  if (!project) return notFound()

  return (
    <Suspense fallback={null}>
      <ProjectDetailModal project={project}>
        <ProjectDetailContent project={project} />
      </ProjectDetailModal>
    </Suspense>
  )
}

export default ProjectDetail
