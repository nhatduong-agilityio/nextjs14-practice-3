import { ProjectDetailContent } from '@/features/projects/components/project-detail-content'

const ProjectDetail = ({ params: { id } }: { params: { id: string } }) => {
  return <ProjectDetailContent projectId={id} />
}

export default ProjectDetail
