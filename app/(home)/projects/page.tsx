import type { Viewport } from 'next'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Constants
import { PORT, ROUTES } from '@/constants/routes'

// Components
import { PageHeader } from '@/components/sections/page-header'
import { getColumns } from '@/features/projects/actions/get-columns'
import { ProjectBoard } from '@/features/projects/components/project-board'
import { ProjectFilter } from '@/features/projects/components/project-filter'
import { generateProjectMap } from '@/features/projects/utils/project-drag-drop'

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

const Projects = async () => {
  const columnResponse = await getColumns()

  if (!columnResponse.data) {
    return notFound()
  }

  const initialBoard = await generateProjectMap(columnResponse.data)

  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Projects' className='gap-30 flex flex-nowrap'>
        <ProjectFilter />
      </PageHeader>
      <ProjectBoard initialBoard={initialBoard} columns={columnResponse.data} />
    </div>
  )
}

export default Projects
