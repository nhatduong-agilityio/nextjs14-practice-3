'use server'

import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ApiDataResponse } from '@/types/api'
import { ProjectDetail } from '@/types/project'

export const getProjects = async (queryParams?: URLSearchParams): Promise<ApiDataResponse<ProjectDetail[]>> => {
  try {
    const projects = await apiService.get<ProjectDetail[]>(API_ENDPOINT.PROJECTS, queryParams, {
      tags: [API_ENDPOINT.PROJECTS],
    })
    return { data: projects }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to fetch projects. Please try again.'
    return { error: errorMessage }
  }
}

export const getProjectById = async (id: string): Promise<ApiDataResponse<ProjectDetail>> => {
  try {
    const project = await apiService.get<ProjectDetail>(`${API_ENDPOINT.PROJECTS}/${id}`, undefined, {
      tags: [API_ENDPOINT.PROJECTS, `${API_ENDPOINT.PROJECTS}/${id}`],
    })
    return { data: project }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to fetch project with id. Please try again.'
    return { error: errorMessage }
  }
}
