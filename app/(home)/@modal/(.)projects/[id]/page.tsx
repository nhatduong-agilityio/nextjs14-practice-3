import { ProjectDetailContent } from '@/features/projects/components/project-detail-content'
import { ProjectDetailModal } from '@/features/projects/components/project-detail-modal'

const ProjectDetail = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <ProjectDetailModal>
      <ProjectDetailContent projectId={id} />
    </ProjectDetailModal>
  )
}

export default ProjectDetail
