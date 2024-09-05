import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ProjectDetail, Task } from './models'
import { DraggableLocation } from '@hello-pangea/dnd'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getInitials = (name: string) => {
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export const calculateDaysLeft = (dueDate: string): number => {
  const now = new Date()
  const due = new Date(dueDate)
  const diffTime = due.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return Math.max(diffDays, 0) // Ensure we don't return negative days
}

export const getTimeAgo = (dateString: string): string => {
  const createdDate = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000)

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`
  return `${Math.floor(diffInSeconds / 31536000)} years ago`
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

export const calculateProgress = (taskList: Task[]): number => {
  const totalTasks = taskList.length
  const completedTasks = taskList.filter((task) => task.status === 'Completed').length

  if (totalTasks === 0) return 0

  return Math.round((completedTasks / totalTasks) * 100)
}

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
