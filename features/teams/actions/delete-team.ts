'use server'

import { revalidateTag } from 'next/cache'
import { API_ENDPOINT } from '@/constants/api'
import { apiService } from '@/lib/api-service'
import { ApiDataResponse } from '@/types/api'
import { TeamDetail } from '@/types/team'

export const deleteTeam = async (id: string): Promise<ApiDataResponse<TeamDetail>> => {
  try {
    const deletedTeam = await apiService.delete<TeamDetail>(`${API_ENDPOINT.TEAMS}/${id}`)
    revalidateTag(API_ENDPOINT.TEAMS)
    revalidateTag(`${API_ENDPOINT.TEAMS}/${id}`)
    return { data: deletedTeam }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to delete team. Please try again.'
    return { error: errorMessage }
  }
}
