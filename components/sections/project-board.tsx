'use client'

import React, { useState } from 'react'
import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd'

// Constants
import { PROJECT_DETAILS } from '@/constants/data'

// Components
import { ProjectColumn } from './project-column'
import { StrictModeDroppable } from '../droppable-provider'

// Utils
import { generateProjectMap, reorder, reorderProjectMap } from '@/lib/utils'

export const ProjectBoard = () => {
  const initialData = generateProjectMap(PROJECT_DETAILS)

  const [columns, setColumns] = useState(initialData)

  const [ordered, setOrdered] = useState(Object.keys(initialData))

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return
    }

    const source = result.source
    const destination = result.destination

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const reorderedOrder = reorder(ordered, source.index, destination.index)
      setOrdered(reorderedOrder)
      return
    }

    const column = columns[source.droppableId]
    const withQuoteRemoved = [...column]
    withQuoteRemoved.splice(source.index, 1)

    const data = reorderProjectMap({
      projectMap: columns,
      source,
      destination,
    })

    setColumns(data.projectMap)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId='board' type='COLUMN' direction='horizontal'>
        {(provided) => (
          <div className='flex min-h-full min-w-full' ref={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key, index) => (
              <ProjectColumn key={key} index={index} title={key} projects={columns[key]} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  )
}
