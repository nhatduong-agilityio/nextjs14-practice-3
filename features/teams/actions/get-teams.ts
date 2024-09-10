'use server'

import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ApiDataResponse } from '@/types/api'
import { TeamDetail } from '@/types/team'

export const getTeams = async (queryParams?: URLSearchParams): Promise<ApiDataResponse<TeamDetail[]>> => {
  try {
    const teams = await apiService.get<TeamDetail[]>(API_ENDPOINT.TEAMS, queryParams, {
      tags: [API_ENDPOINT.TEAMS],
    })
    return { data: teams }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to fetch teams. Please try again.'
    return { error: errorMessage }
  }
}

export const getTeamById = async (id: string): Promise<ApiDataResponse<TeamDetail>> => {
  try {
    const team = await apiService.get<TeamDetail>(`${API_ENDPOINT.TEAMS}/${id}`, undefined, {
      tags: [API_ENDPOINT.TEAMS, `${API_ENDPOINT.TEAMS}/${id}`],
    })
    return { data: team }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to fetch team with id. Please try again.'
    return { error: errorMessage }
  }
}
