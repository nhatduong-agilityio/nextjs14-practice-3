import { ApiDataResponse } from '@/types/api'
import { updateColumn } from './update-column'
import { ProjectColumn } from '@/types/project'

export const updateProjectMap = async (
  sourceColumn: ProjectColumn,
  destColumn: ProjectColumn,
): Promise<ApiDataResponse<[]>> => {
  try {
    const response = await Promise.all([
      updateColumn(sourceColumn.id, sourceColumn),
      updateColumn(destColumn.id, destColumn),
    ])

    return { data: [] }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to update project map. Please try again.'
    return { error: errorMessage }
  }
}
