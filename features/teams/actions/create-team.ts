'use server'

import { revalidateTag } from 'next/cache'
import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ApiDataResponse } from '@/types/api'
import { TeamDetail } from '@/types/team'

export const createTeam = async (team: TeamDetail): Promise<ApiDataResponse<TeamDetail>> => {
  try {
    const newTeam = await apiService.create<TeamDetail>(API_ENDPOINT.TEAMS, team)
    revalidateTag(API_ENDPOINT.TEAMS)
    return { data: newTeam }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to create team. Please try again.'
    return { error: errorMessage }
  }
}
