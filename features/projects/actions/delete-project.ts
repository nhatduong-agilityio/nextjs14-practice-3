'use server'

import { revalidateTag } from 'next/cache'
import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ApiDataResponse } from '@/types/api'
import { ProjectDetail } from '@/types/project'

export const deleteProject = async (id: string): Promise<ApiDataResponse<ProjectDetail>> => {
  try {
    const deletedProject = await apiService.delete<ProjectDetail>(`${API_ENDPOINT.PROJECTS}/${id}`)
    revalidateTag(API_ENDPOINT.PROJECTS)
    revalidateTag(`${API_ENDPOINT.PROJECTS}/${id}`)
    return { data: deletedProject }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to delete project. Please try again.'
    return { error: errorMessage }
  }
}
