'use server'

import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ApiDataResponse } from '@/types/api'
import { ProjectColumn } from '@/types/project'

export const getColumns = async (): Promise<ApiDataResponse<ProjectColumn[]>> => {
  try {
    const columns = await apiService.get<ProjectColumn[]>(API_ENDPOINT.COLUMNS, undefined, {
      tags: [API_ENDPOINT.COLUMNS],
    })
    return { data: columns }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to fetch columns. Please try again.'
    return { error: errorMessage }
  }
}
