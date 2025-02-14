'use client'

import { Droppable, Draggable } from '@hello-pangea/dnd'

// Components
import { ProjectCard } from './project-card'

// Types
import { ProjectDetail } from '@/types/project'

interface ProjectColumnContentProps {
  isListBoard?: boolean
  listId: string
  listType: string
  projects: ProjectDetail[]
  pendingProjectId?: string
}

export const ProjectColumnContent = ({
  isListBoard = false,
  listId = 'LIST',
  listType,
  projects,
  pendingProjectId,
}: ProjectColumnContentProps) => {
  return (
    <Droppable droppableId={listId} type={listType}>
      {(provided, dropSnapshot) => (
        <div
          className='flex flex-col h-full w-ful overflow-x-hidden overflow-y-auto max-h-full'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className='flex flex-col min-h-full gap-2.5'>
            {projects.map((project, index) => (
              <div key={`${project.id}-${project.name}`}>
                <Draggable draggableId={project.id} index={index}>
                  {(provided, dragSnapshot) => (
                    <ProjectCard
                      variant={isListBoard ? 'row' : 'column'}
                      className='shadow-xs hover:shadow-xs'
                      innerRef={provided.innerRef}
                      key={project.id}
                      project={project}
                      draggable={dragSnapshot.isDragging}
                      data-is-dragging={dragSnapshot.isDragging}
                      data-testid={project.id}
                      data-index={index}
                      isPending={project.id === pendingProjectId}
                      hasAssignment
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      role='none'
                    />
                  )}
                </Draggable>
              </div>
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
