import { Suspense } from 'react'
import { ProjectDetailContent } from '@/features/projects/components/project-detail-content'
import { ProjectDetailModal } from '@/features/projects/components/project-detail-modal'

const ProjectDetail = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Suspense fallback={null}>
      <ProjectDetailModal>
        <ProjectDetailContent projectId={id} />
      </ProjectDetailModal>
    </Suspense>
  )
}

export default ProjectDetail
