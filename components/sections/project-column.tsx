'use client'

import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import { CardsContainer } from './cards-container'
import { ProjectColumnContent } from './project-column-content'
import { ProjectDetail } from '@/lib/models'

export interface ProjectColumnProps {
  title: string
  isDragDisabled?: boolean
  projects?: ProjectDetail[]
  index: number
}

export const ProjectColumn = ({ title, projects, isDragDisabled = false, index }: ProjectColumnProps) => {
  return (
    <Draggable isDragDisabled={isDragDisabled} draggableId={title} index={index}>
      {(provided, snapshot) => (
        <CardsContainer
          innerRef={provided.innerRef}
          title={isDragDisabled ? '' : title}
          draggable={snapshot.isDragging}
          className='w-[302px] h-fit'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {projects && <ProjectColumnContent listId={title} listType='PROJECT' projects={projects} />}
        </CardsContainer>
      )}
    </Draggable>
  )
}
