import { createTeam } from '../create-team'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'
import { revalidateTag } from 'next/cache'
import { TEAM_DETAIL } from '@/constants/data'

jest.mock('@/lib/api-service')
jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

describe('createTeam', () => {
  const mockTeam = TEAM_DETAIL

  it('should successfully create a team', async () => {
    ;(apiService.create as jest.Mock).mockResolvedValue(mockTeam)

    const result = await createTeam(mockTeam)

    expect(apiService.create).toHaveBeenCalledWith(API_ENDPOINT.TEAMS, mockTeam)
    expect(revalidateTag).toHaveBeenCalledWith(API_ENDPOINT.TEAMS)
    expect(result).toEqual({ data: mockTeam })
  })

  it('should handle errors when creating a team fails', async () => {
    const errorMessage = 'Failed to create team'
    ;(apiService.create as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await createTeam(mockTeam)

    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(apiService.create as jest.Mock).mockRejectedValue(new Error())

    const result = await createTeam(mockTeam)

    expect(result).toEqual({ error: 'Failed to create team. Please try again.' })
  })
})
