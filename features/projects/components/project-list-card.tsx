'use client'

import { useEffect } from 'react'

// Components
import { CardContainer } from '@/components/sections/card-container'
import { AddNewCard } from '@/components/sections/add-new-card'
import { ProjectCard } from './project-card'
import { ProjectDetail } from '@/types/project'
import { useToast } from '@/hooks/use-toast'

interface ProjectListCardProps {
  error?: string
  projects?: ProjectDetail[]
}

export const ProjectListCard = ({ error, projects }: ProjectListCardProps) => {
  const { toast } = useToast()

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

  useEffect(() => {
    if (!projects && error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error || 'Failed to fetch projects. Please try again.',
      })
    }
  }, [error, projects, toast])

  return (
    <CardContainer title='Projects' menuOptions={listActionsProject}>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 lg:gap-30'>
        {projects && projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        <AddNewCard title='Add Project' className='min-h-[237px]' />
      </div>
    </CardContainer>
  )
}
