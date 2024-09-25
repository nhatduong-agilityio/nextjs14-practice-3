import { ProjectColumn, ProjectDetail } from '@/types/project'
import { DraggableLocation } from '@hello-pangea/dnd'
import { getProjectById } from '../actions/get-projects'

// A little function to help us with reordering the result
export const reorder = (project: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(project)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Given an array of ProjectDetails, generate a map of column
 * names to arrays of ProjectDetails that belong to that column.
 * @param projects The array of ProjectDetails
 * @returns A map of column names to their respective arrays of ProjectDetails
 */
export async function generateProjectMap(columns: ProjectColumn[]): Promise<Record<string, ProjectDetail[]>> {
  const sortedColumns = [...columns].sort((a, b) => a.index - b.index)
  const projectMap: Record<string, ProjectDetail[]> = {}

  for (const column of sortedColumns) {
    const columnProjects = await Promise.all(
      column.projects.map(async ({ projectId, index }) => {
        const projectResponse = await getProjectById(projectId)
        if (projectResponse.data) {
          return { ...projectResponse.data, index }
        }
        return null
      }),
    )

    projectMap[column.title] = columnProjects
      .filter((p): p is ProjectDetail & { index: number } => p !== null && typeof p.index === 'number')
      .sort((a, b) => a.index - b.index)
  }

  return projectMap
}
