'use client'

// Constants
import { PROJECT_DETAILS } from '@/constants/data'

// Components
import { CardContainer } from '@/components/sections/card-container'
import { AddNewCard } from '@/components/sections/add-new-card'
import { ProjectCard } from './project-card'

export const ProjectListCard = () => {
  const listActionsProject = [
    {
      name: 'Add New Project…',
      action: () => null,
    },
    {
      name: 'Edit Current Project…',
      action: () => null,
    },
    {
      name: 'Add New Member…',
      action: () => null,
    },
    {
      name: 'Remove Current Member…',
      action: () => null,
    },
  ]

  return (
    <CardContainer title='Projects' menuOptions={listActionsProject}>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 lg:gap-30'>
        {PROJECT_DETAILS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <AddNewCard title='Add Project' className='min-h-[237px]' />
      </div>
    </CardContainer>
  )
}
