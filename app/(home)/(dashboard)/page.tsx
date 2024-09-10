import { Suspense } from 'react'

// Components
import { PageHeader } from '@/components/sections/page-header'
import { Text } from '@/components/ui/text'

// Features
import { TeamListCard } from '@/features/teams/components/team-list-card'
import { ProjectListCard } from '@/features/projects/components/project-list-card'
import { getTeams } from '@/features/teams/actions/get-teams'
import { Skeleton } from '@/components/ui/skeleton'

const Dashboard = async () => {
  const { data: teams, error } = await getTeams()

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
        <ProjectListCard />
      </div>
    </div>
  )
}

export default Dashboard
