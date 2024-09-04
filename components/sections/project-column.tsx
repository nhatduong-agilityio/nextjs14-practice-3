'use client'

import React from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd'

// Components
import { CardsContainer } from './cards-container'
import { ProjectColumnContent } from './project-column-content'
import { Button } from '../ui/button'
import { PlusIcon } from '@/icons/plus-icon'
import { ProjectDetail } from '@/lib/models'
import { cn } from '@/lib/utils'

export interface ProjectColumnProps {
  isListBoard?: boolean
  isDragDisabled?: boolean
  projects?: ProjectDetail[]
  title: string
  index: number
}

export const ProjectColumn = ({
  title,
  projects,
  isDragDisabled = false,
  isListBoard = false,
  index,
}: ProjectColumnProps) => {
  return (
    <Draggable isDragDisabled={isDragDisabled} draggableId={title} index={index}>
      {(dragProvided, snapshot) => (
        <Droppable droppableId={title} type='PROJECT'>
          {(provided) => (
            <div
              ref={provided.innerRef}
              className='flex flex-col'
              {...dragProvided.draggableProps}
              {...dragProvided.dragHandleProps}
            >
              <CardsContainer
                innerRef={dragProvided.innerRef}
                title={isDragDisabled ? '' : title}
                draggable={snapshot.isDragging}
                className={cn(
                  'w-[302px] h-fit max-h-[80dvh] overflow-hidden rounded-b-none pb-5',
                  isListBoard && 'w-full',
                )}
              >
                {projects && (
                  <ProjectColumnContent
                    isListBoard={isListBoard}
                    listId={title}
                    listType='PROJECT'
                    projects={projects}
                  />
                )}
              </CardsContainer>
              <Button
                variant='secondary'
                className='rounded-none rounded-b-3xl bg-card shadow-sm border border-t-0 border-separator'
              >
                <PlusIcon />
              </Button>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </Draggable>
  )
}
