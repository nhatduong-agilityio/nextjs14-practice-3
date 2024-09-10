'use server'

import { revalidateTag } from 'next/cache'
import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ProjectColumn } from '@/types/project'
import { ApiDataResponse } from '@/types/api'

export const updateColumn = async (id: string, column: ProjectColumn): Promise<ApiDataResponse<ProjectColumn>> => {
  try {
    const updatedColumn = await apiService.update<ProjectColumn>(`${API_ENDPOINT.COLUMNS}/${id}`, column)
    revalidateTag(API_ENDPOINT.COLUMNS)
    revalidateTag(`${API_ENDPOINT.COLUMNS}/${id}`)
    revalidateTag(API_ENDPOINT.PROJECTS)
    return { data: updatedColumn }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to update column. Please try again.'
    return { error: errorMessage }
  }
}
