import { Metadata, Viewport } from 'next'
import { Suspense } from 'react'

// Constants
import { PORT, ROUTES } from '@/constants/routes'

// Components
import { PageHeader } from '@/components/sections/page-header'
import { Text } from '@/components/ui/text'

// Features
import { TeamListCard } from '@/features/teams/components/team-list-card'
import { ProjectListCard } from '@/features/projects/components/project-list-card'
import { getTeams } from '@/features/teams/actions/get-teams'
import { getProjects } from '@/features/projects/actions/get-projects'
import { TeamListCardSkeleton } from '@/features/teams/components/team-list-card-skeleton'
import { ProjectListCardSkeleton } from '@/features/projects/components/project-list-card-skeleton'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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

const Dashboard = async ({ searchParams }: { searchParams: { name: string } }) => {
  const queryParams = searchParams.name ? new URLSearchParams({ name_like: searchParams.name }) : undefined
  const [teamsResponse, projectsResponse] = await Promise.all([getTeams(queryParams), getProjects(queryParams)])

  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader className='gap-2.5'>
        <Text variant='secondary' className='text-heading-secondary' size='lg'>
          here’s your currently projects
        </Text>
      </PageHeader>
      <div className='w-full flex flex-col gap-5'>
        <Suspense fallback={<TeamListCardSkeleton />}>
          <TeamListCard teams={teamsResponse.data} error={teamsResponse.error} />
        </Suspense>
        <Suspense fallback={<ProjectListCardSkeleton />}>
          <ProjectListCard projects={projectsResponse.data} error={projectsResponse.error} />
        </Suspense>
      </div>
    </div>
  )
}

export default Dashboard
