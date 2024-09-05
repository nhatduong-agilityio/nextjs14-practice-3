import ProjectDetailContent from '@/components/sections/project-detail-content'
import ProjectDetailModal from '@/components/sections/project-detail-modal'

const ProjectDetail = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <ProjectDetailModal>
      <ProjectDetailContent projectId={id} />
    </ProjectDetailModal>
  )
}

export default ProjectDetail
