import { updateTeam } from '../update-team'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'
import { revalidateTag } from 'next/cache'
import { TEAM_DETAIL } from '@/constants/data'

jest.mock('@/lib/api-service')
jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

describe('updateTeam', () => {
  const mockTeamId = TEAM_DETAIL.id
  const mockTeam = TEAM_DETAIL

  it('should successfully update a team', async () => {
    ;(apiService.update as jest.Mock).mockResolvedValue(mockTeam)

    const result = await updateTeam(mockTeamId, mockTeam)

    expect(apiService.update).toHaveBeenCalledWith(`${API_ENDPOINT.TEAMS}/${mockTeamId}`, mockTeam)
    expect(revalidateTag).toHaveBeenCalledWith(API_ENDPOINT.TEAMS)
    expect(revalidateTag).toHaveBeenCalledWith(`${API_ENDPOINT.TEAMS}/${mockTeamId}`)
    expect(result).toEqual({ data: mockTeam })
  })

  it('should handle errors when updating a team fails', async () => {
    const errorMessage = 'Failed to update team'
    ;(apiService.update as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await updateTeam(mockTeamId, mockTeam)

    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(apiService.update as jest.Mock).mockRejectedValue(new Error())

    const result = await updateTeam(mockTeamId, mockTeam)

    expect(result).toEqual({ error: 'Failed to update team. Please try again.' })
  })
})
