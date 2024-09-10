'use server'

import { revalidateTag } from 'next/cache'
import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ApiDataResponse } from '@/types/api'
import { ProjectDetail } from '@/types/project'

export const createProject = async (project: ProjectDetail): Promise<ApiDataResponse<ProjectDetail>> => {
  try {
    const newProject = await apiService.create<ProjectDetail>(API_ENDPOINT.PROJECTS, project)
    revalidateTag(API_ENDPOINT.PROJECTS)
    return { data: newProject }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to create project. Please try again.'
    return { error: errorMessage }
  }
}
