import type { Viewport } from 'next'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Constants
import { PORT, ROUTES } from '@/constants/routes'

// Components
import { PageHeader } from '@/components/sections/page-header'
import { getColumns } from '@/features/projects/actions/get-columns'
import { getProjects } from '@/features/projects/actions/get-projects'
import { ProjectBoard } from '@/features/projects/components/project-board'
import { ProjectFilter } from '@/features/projects/components/project-filter'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | Projects',
  description: 'Management Plans For Projects',
  keywords: ['projects', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.PROJECTS}`,
    title: 'Square Dashboard | Projects',
    description: 'Management Plans For Projects',
    siteName: 'Square Dashboard Projects',
  },
  twitter: {
    title: 'Square Dashboard | Projects',
    description: 'Management Plans For Projects',
    card: 'summary',
  },
}

const Projects = async ({ searchParams }: { searchParams: { name: string } }) => {
  const queryParams = searchParams.name ? new URLSearchParams({ name_like: searchParams.name }) : undefined
  const [columnResponse, projectsResponse] = await Promise.all([getColumns(), getProjects(queryParams)])

  if (!projectsResponse.data || !columnResponse.data) {
    return notFound()
  }

  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Projects' className='gap-30 flex flex-nowrap'>
        <ProjectFilter />
      </PageHeader>
      <ProjectBoard projects={projectsResponse.data} columns={columnResponse.data} />
    </div>
  )
}

export default Projects
