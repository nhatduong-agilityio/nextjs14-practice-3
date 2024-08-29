'use client'

import React, { memo, ReactNode } from 'react'
import { Droppable, Draggable, DroppableProvided } from '@hello-pangea/dnd'
import { CardProject } from './card-project'
import { ProjectDetail } from '@/lib/models'

const ProjectList = ({ projects }: { projects: ProjectDetail[] }) => {
  return (
    <div className='flex flex-col min-h-full gap-2.5'>
      {projects.map((project, index) => (
        <div key={`${project.id}-${project.name}`}>
          <Draggable draggableId={project.id} index={index}>
            {(provided, dragSnapshot) => (
              <CardProject
                innerRef={provided.innerRef}
                key={project.id}
                project={project}
                draggable={dragSnapshot.isDragging}
                data-is-dragging={dragSnapshot.isDragging}
                data-testid={project.id}
                data-index={index}
                aria-label={`${project.name}-${project.id}`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              />
            )}
          </Draggable>
        </div>
      ))}
    </div>
  )
}

export interface ProjectColumnContentProps {
  listId: string
  listType: string
  projects: ProjectDetail[]
}

export const ProjectColumnContent = ({ listId = 'LIST', listType, projects }: ProjectColumnContentProps) => {
  return (
    <Droppable droppableId={listId} type={listType}>
      {(provided, dropSnapshot) => (
        <div
          className='flex flex-col h-full w-ful overflow-x-hidden overflow-y-auto max-h-full pb-2.5'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <ProjectList projects={projects} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
