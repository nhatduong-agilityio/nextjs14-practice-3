import { Metadata, Viewport } from 'next'
import { Suspense } from 'react'

// Constants
import { PORT, ROUTES } from '@/constants/routes'

// Components
import { PageHeader } from '@/components/sections/page-header'
import { Text } from '@/components/ui/text'
import { Skeleton } from '@/components/ui/skeleton'

// Features
import { TeamListCard } from '@/features/teams/components/team-list-card'
import { ProjectListCard } from '@/features/projects/components/project-list-card'
import { getTeams } from '@/features/teams/actions/get-teams'
import { getProjects } from '@/features/projects/actions/get-projects'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard',
  description: 'Square Dashboard Management Plans',
  keywords: ['dashboard', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.DASHBOARD}`,
    title: 'Square Dashboard',
    description: 'Square Dashboard Management Plans',
    siteName: 'Square Dashboard',
  },
  twitter: {
    title: 'Square Dashboard',
    description: 'Square Dashboard Management Plans',
    card: 'summary',
  },
}

const Dashboard = async () => {
  const { data: teams, error } = await getTeams()
  const { data: projects, error: projectError } = await getProjects()

  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader className='gap-2.5'>
        <Text variant='secondary' size='lg'>
          here’s your currently projects
        </Text>
      </PageHeader>
      <div className='w-full flex flex-col gap-5'>
        <Suspense fallback={<Skeleton />}>
          <TeamListCard teams={teams} error={error} />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <ProjectListCard projects={projects} error={projectError} />
        </Suspense>
      </div>
    </div>
  )
}

export default Dashboard
