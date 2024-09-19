'use server'

import { revalidateTag } from 'next/cache'
import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ProjectDetail } from '@/types/project'
import { ApiDataResponse } from '@/types/api'

export const updateProject = async (id: string, project: ProjectDetail): Promise<ApiDataResponse<ProjectDetail>> => {
  try {
    const updatedProject = await apiService.update<ProjectDetail>(`${API_ENDPOINT.PROJECTS}/${id}`, project)
    // revalidateTag(API_ENDPOINT.PROJECTS)
    revalidateTag(`${API_ENDPOINT.PROJECTS}/${id}`)
    return { data: updatedProject }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to update project. Please try again.'
    return { error: errorMessage }
  }
}
