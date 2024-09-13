import { deleteTeam } from '../delete-team'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'
import { revalidateTag } from 'next/cache'

jest.mock('@/lib/api-service')
jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

describe('deleteTeam', () => {
  const mockTeamId = '1'
  const mockDeletedTeam = { id: mockTeamId, name: 'Deleted Team' }

  it('should successfully delete a team', async () => {
    ;(apiService.delete as jest.Mock).mockResolvedValue(mockDeletedTeam)

    const result = await deleteTeam(mockTeamId)

    expect(apiService.delete).toHaveBeenCalledWith(`${API_ENDPOINT.TEAMS}/${mockTeamId}`)
    expect(revalidateTag).toHaveBeenCalledWith(API_ENDPOINT.TEAMS)
    expect(revalidateTag).toHaveBeenCalledWith(`${API_ENDPOINT.TEAMS}/${mockTeamId}`)
    expect(result).toEqual({ data: mockDeletedTeam })
  })

  it('should handle errors when deleting a team fails', async () => {
    const errorMessage = 'Failed to delete team'
    ;(apiService.delete as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await deleteTeam(mockTeamId)

    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(apiService.delete as jest.Mock).mockRejectedValue(new Error())

    const result = await deleteTeam(mockTeamId)

    expect(result).toEqual({ error: 'Failed to delete team. Please try again.' })
  })
})
