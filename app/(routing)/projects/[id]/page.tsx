import ProjectDetailContent from '@/components/sections/project-detail-content'

const ProjectDetail = ({ params: { id } }: { params: { id: string } }) => {
  return <ProjectDetailContent projectId={id} />
}

export default ProjectDetail
