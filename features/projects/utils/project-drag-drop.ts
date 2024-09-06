import { ProjectDetail } from '@/types/project'
import { DraggableLocation } from '@hello-pangea/dnd'

// A little function to help us with reordering the result
export const reorder = (project: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(project)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const reorderProjectMap = ({
  projectMap,
  source,
  destination,
}: {
  projectMap: Record<string, ProjectDetail[]>
  source: DraggableLocation
  destination: DraggableLocation
}) => {
  const current = [...projectMap[source.droppableId]]
  const next = [...projectMap[destination.droppableId]]
  const target = current[source.index]

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = current.slice()
    const [removed] = reordered.splice(source.index, 1)
    reordered.splice(destination.index, 0, removed)
    const result = {
      ...projectMap,
      [source.droppableId]: reordered,
    }
    return {
      projectMap: result,
    }
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1)
  // insert into next
  next.splice(destination.index, 0, target)

  const result = {
    ...projectMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  }

  return {
    projectMap: result,
  }
}

/**
 * Given an array of ProjectDetails, generate a map of column
 * names to arrays of ProjectDetails that belong to that column.
 * @param projects The array of ProjectDetails
 * @returns A map of column names to their respective arrays of ProjectDetails
 */
export const generateProjectMap = (projects: ProjectDetail[]) => {
  const columns = Array.from(new Set(projects.map((project) => project.column)))

  return columns.reduce(
    (previous, column) => ({
      ...previous,
      [column]: projects.filter((project) => project.column === column),
    }),
    {} as Record<string, ProjectDetail[]>,
  )
}
