'use client'

import { PROJECT_DETAILS } from '@/constants/data'
import { CardsContainer } from './cards-container'
import { CardAddNew } from './card-add-new'
import { CardProject } from './card-project'

export const CardProjectList = () => {
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
    <CardsContainer title='Projects' menuOptions={listActionsProject}>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 lg:gap-30'>
        {PROJECT_DETAILS.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
        <CardAddNew title='Add Project' className='min-h-[237px]' />
      </div>
    </CardsContainer>
  )
}
