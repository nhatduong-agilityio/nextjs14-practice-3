'use client'

import { useTransition, useOptimistic, useCallback, useMemo } from 'react'
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
import { useToast } from '@/hooks/use-toast'

interface ProjectBoardProps {
  projects: ProjectDetail[]
  columns: ProjectColumnType[]
  error?: string
}

export const ProjectBoard = ({ projects, columns }: ProjectBoardProps) => {
  const { toast } = useToast()

  // Memoize the initial data to prevent unnecessary recalculations
  const initialData = useMemo(() => generateProjectMap(projects, columns), [projects, columns])

  // Use optimistic state for immediate UI updates
  const [optimisticState, setOptimisticState] = useOptimistic(
    { columnsOrdered: initialData, ordered: Object.keys(initialData), pendingProjectId: '' },
    (
      state,
      newState: Partial<{
        columnsOrdered: Record<string, ProjectDetail[]>
        ordered: string[]
        pendingProjectId: string
      }>,
    ) => ({
      ...state,
      ...newState,
    }),
  )

  // Use transition for managing async state updates
  const [isPending, startTransition] = useTransition()

  const { getFilter } = useProjectFilter()
  const isListBoard = getFilter('arrange') === ARRANGE.LIST

  // Handle drag end event
  const onDragEnd: OnDragEndResponder = useCallback(
    (result) => {
      if (!result.destination) return

      const source = result.source
      const destination = result.destination

      if (
        (source.droppableId === destination.droppableId && source.index === destination.index) ||
        destination.droppableId === 'EMPTY'
      ) {
        return
      }

      startTransition(async () => {
        if (result.type === 'COLUMN') {
          // Handle column reordering
          const reorderedOrder = reorder(optimisticState.ordered, source.index, destination.index)
          setOptimisticState({ ordered: reorderedOrder })

          try {
            const sourceColumn = columns.find((col) => col.index === source.index)
            const destinationColumn = columns.find((col) => col.index === destination.index)

            if (sourceColumn && destinationColumn) {
              const updatedSourceColumn = { ...sourceColumn, index: destination.index }
              const updatedDestinationColumn = { ...destinationColumn, index: source.index }

              await updateColumnOrder(updatedSourceColumn, updatedDestinationColumn)
            }
          } catch (error) {
            // Revert optimistic update on error
            setOptimisticState({ ordered: optimisticState.ordered })
          }
          return
        } else {
          // Handle project reordering
          const data = reorderProjectMap({
            projectMap: optimisticState.columnsOrdered,
            source,
            destination,
          })

          const movedProject = optimisticState.columnsOrdered[source.droppableId][source.index]
          setOptimisticState({ columnsOrdered: data.projectMap, pendingProjectId: movedProject.id })

          try {
            const sourceColumn = columns.find((col) => col.title === source.droppableId)
            const destinationColumn = columns.find((col) => col.title === destination.droppableId)
            const patchedProject = optimisticState.columnsOrdered[destination.droppableId][destination.index]

            if (sourceColumn && destinationColumn && movedProject) {
              const result = await updateProjectMap(
                data.projectMap,
                sourceColumn,
                destinationColumn,
                movedProject,
                patchedProject,
              )

              if (result.data) {
                setOptimisticState({ columnsOrdered: result.data, pendingProjectId: '' })
              } else {
                toast({
                  title: 'Failed to update project board',
                  description: result.error,
                  variant: 'destructive',
                })
              }
            }
            setOptimisticState({ pendingProjectId: '' })
          } catch (error) {
            // Revert optimistic update on error
            setOptimisticState({ columnsOrdered: optimisticState.columnsOrdered, pendingProjectId: '' })
            // Display toast for error message
            toast({
              title: 'Failed to update project board',
              description: 'Failed to update project board. Please try again.',
              variant: 'destructive',
            })
          }
        }
      })
    },
    [optimisticState.ordered, optimisticState.columnsOrdered, setOptimisticState, columns, toast],
  )

  // Memoize the project columns to prevent unnecessary re-renders
  const projectColumns = useMemo(
    () =>
      optimisticState.ordered.map((key, index) => (
        <ProjectColumn
          key={key}
          index={index}
          title={key}
          projects={optimisticState.columnsOrdered[key]}
          isListBoard={isListBoard}
          pendingProjectId={optimisticState.pendingProjectId}
        />
      )),
    [optimisticState.ordered, optimisticState.columnsOrdered, optimisticState.pendingProjectId, isListBoard],
  )

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId='board' type='COLUMN' direction={isListBoard ? 'vertical' : 'horizontal'}>
        {(provided) => (
          <div
            className={cn('flex min-h-full min-w-full gap-5 overflow-x-auto', isListBoard && 'flex-col')}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {projectColumns}
            <ProjectColumn
              isDragDisabled
              index={optimisticState.ordered.length}
              title='EMPTY'
              isListBoard={isListBoard}
            />
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  )
}
