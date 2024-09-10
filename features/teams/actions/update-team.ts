'use server'

import { revalidateTag } from 'next/cache'
import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ApiDataResponse } from '@/types/api'
import { TeamDetail } from '@/types/team'

export const updateTeam = async (id: string, team: TeamDetail): Promise<ApiDataResponse<TeamDetail>> => {
  try {
    const updatedTeam = await apiService.update<TeamDetail>(`${API_ENDPOINT.TEAMS}/${id}`, team)
    revalidateTag(API_ENDPOINT.TEAMS)
    revalidateTag(`${API_ENDPOINT.TEAMS}/${id}`)
    return { data: updatedTeam }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to update team. Please try again.'
    return { error: errorMessage }
  }
}
