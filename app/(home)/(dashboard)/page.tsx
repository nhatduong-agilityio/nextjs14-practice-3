import { PageHeader } from '@/components/sections/page-header'
import { Text } from '@/components/ui/text'

// Features
import { TeamListCard } from '@/features/teams/components/team-list-card'
import { ProjectListCard } from '@/features/projects/components/project-list-card'

const Dashboard = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader className='gap-2.5'>
        <Text variant='secondary' size='lg'>
          here’s your currently projects
        </Text>
      </PageHeader>
      <div className='w-full flex flex-col gap-5'>
        <TeamListCard />
        <ProjectListCard />
      </div>
    </div>
  )
}

export default Dashboard
