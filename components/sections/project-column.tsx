'use client'

import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import { CardsContainer } from './cards-container'
import { ProjectColumnContent } from './project-column-content'
import { ProjectDetail } from '@/lib/models'

export interface ProjectColumnProps {
  title: string
  projects: ProjectDetail[]
  index: number
}

export const ProjectColumn = ({ title, projects, index }: ProjectColumnProps) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <CardsContainer
          innerRef={provided.innerRef}
          title={title}
          draggable={snapshot.isDragging}
          className='w-[302px]'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ProjectColumnContent listId={title} listType='PROJECT' projects={projects} />
        </CardsContainer>
      )}
    </Draggable>
  )
}
