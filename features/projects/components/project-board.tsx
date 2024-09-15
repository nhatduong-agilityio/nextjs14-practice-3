'use client'

import React, { useState } from 'react'
import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd'

// Constants
import { ARRANGE } from '@/constants/filters'

// Components
import { ProjectColumn } from './project-column'
import { StrictModeDroppable } from './droppable-provider'

// Utils
import { cn } from '@/utils/cn'
import { generateProjectMap, reorder, reorderProjectMap } from '../utils/project-drag-drop'

// Hooks
import { useProjectFilter } from '../hooks/use-project-filter'
import { ProjectDetail, ProjectColumn as ProjectColumnType } from '@/types/project'

// Actions
import { updateColumnOrder } from '../actions/update-column-order'
import { updateProjectMap } from '../actions/update-project-map'

interface ProjectBoardProps {
  projects: ProjectDetail[]
  columns: ProjectColumnType[]
  error?: string
}

export const ProjectBoard = ({ projects, columns }: ProjectBoardProps) => {
  const initialData = generateProjectMap(projects, columns)

  const [columnsOrdered, setColumnsOrdered] = useState(initialData)

  const [ordered, setOrdered] = useState(Object.keys(initialData))

  const { getFilter } = useProjectFilter()

  const isListBoard = getFilter('arrange') === ARRANGE.LIST

  const onDragEnd: OnDragEndResponder = async (result) => {
    if (!result.destination) {
      return
    }

    const source = result.source
    const destination = result.destination

    // did not move anywhere - can bail early
    if (
      (source.droppableId === destination.droppableId && source.index === destination.index) ||
      destination.droppableId === 'EMPTY'
    ) {
      return
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const reorderedOrder = reorder(ordered, source.index, destination.index)
      setOrdered(reorderedOrder)

      // Update column order in the backend
      const sourceColumn = columns.find((col) => col.index === source.index)
      const destinationColumn = columns.find((col) => col.index === destination.index)

      if (sourceColumn && destinationColumn) {
        const updatedSourceColumn = { ...sourceColumn, index: destination.index }
        const updatedDestinationColumn = { ...destinationColumn, index: source.index }

        await updateColumnOrder(updatedSourceColumn, updatedDestinationColumn)
      }
      return
    }

    const column = columnsOrdered[source.droppableId]
    const withQuoteRemoved = [...column]
    withQuoteRemoved.splice(source.index, 1)

    const data = reorderProjectMap({
      projectMap: columnsOrdered,
      source,
      destination,
    })

    setColumnsOrdered(data.projectMap)

    const sourceColumn = columns.find((col) => col.title === source.droppableId)
    const destinationColumn = columns.find((col) => col.title === destination.droppableId)
    const movedProject = columnsOrdered[source.droppableId][source.index]
    const patchedProject = columnsOrdered[destination.droppableId][destination.index]

    if (sourceColumn && destinationColumn && movedProject) {
      await updateProjectMap(data.projectMap, sourceColumn, destinationColumn, movedProject, patchedProject)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId='board' type='COLUMN' direction={isListBoard ? 'vertical' : 'horizontal'}>
        {(provided) => (
          <div
            className={cn('flex min-h-full min-w-full gap-5 overflow-x-auto', isListBoard && 'flex-col')}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {ordered.map((key, index) => (
              <ProjectColumn
                key={key}
                index={index}
                title={key}
                projects={columnsOrdered[key]}
                isListBoard={isListBoard}
              />
            ))}
            <ProjectColumn isDragDisabled index={ordered.length} title='EMPTY' isListBoard={isListBoard} />
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  )
}
