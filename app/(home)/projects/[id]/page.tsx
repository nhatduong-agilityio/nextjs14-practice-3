import { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { PORT, ROUTES } from '@/constants/routes'
import { getProjectById } from '@/features/projects/actions/get-projects'
import { ProjectDetailContent } from '@/features/projects/components/project-detail-content'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }): Promise<Metadata> => {
  const { data: project } = await getProjectById(id)

  return {
    metadataBase: new URL(`${PORT}`),
    title: `Project Detail | ${project?.name}`,
    description: project?.name,
    keywords: ['project', 'square dashboard', 'nextjs'],
    openGraph: {
      type: 'website',
      url: `${PORT}${ROUTES.PROJECTS}/${project?.id}`,
      title: `Project Detail | ${project?.name}`,
      description: project?.name,
      siteName: 'Project Detail',
    },
    twitter: {
      title: `Project Detail | ${project?.name}`,
      description: project?.name,
      card: 'summary',
    },
  }
}

const ProjectDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const { data: project } = await getProjectById(id)

  if (!project) return notFound()

  return <ProjectDetailContent project={project} />
}

export default ProjectDetail
