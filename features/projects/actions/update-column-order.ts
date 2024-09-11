'use server'

import { updateColumn } from './update-column'
import { ProjectColumn } from '@/types/project'
import { ApiDataResponse } from '@/types/api'

export const updateColumnOrder = async (
  sourceColumn: ProjectColumn,
  destinationColumn: ProjectColumn,
): Promise<ApiDataResponse<[]>> => {
  try {
    await updateColumn(sourceColumn.id, sourceColumn)
    await updateColumn(destinationColumn.id, destinationColumn)

    return { data: [] }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to update column order. Please try again.'
    return { error: errorMessage }
  }
}
