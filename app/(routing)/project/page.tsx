import { PageHeader } from '@/components/sections/page-header'
import { ProjectBoard } from '@/components/sections/project-board'

const Project = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Projects' className='gap-2.5'></PageHeader>
      <ProjectBoard />
    </div>
  )
}

export default Project
