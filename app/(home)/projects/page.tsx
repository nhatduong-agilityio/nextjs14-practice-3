import { PageHeader } from '@/components/sections/page-header'
import { ProjectBoard } from '@/features/projects/components/project-board'
import { ProjectFilter } from '@/features/projects/components/project-filter'

const Projects = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Projects' className='gap-30 flex flex-nowrap'>
        <ProjectFilter />
      </PageHeader>
      <ProjectBoard />
    </div>
  )
}

export default Projects
