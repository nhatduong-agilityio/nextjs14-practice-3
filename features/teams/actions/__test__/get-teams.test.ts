import { getTeams, getTeamById } from '../get-teams'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'

jest.mock('@/lib/api-service')

describe('Team Actions', () => {
  const mockTeams = [
    { id: '1', name: 'Team 1' },
    { id: '2', name: 'Team 2' },
  ]

  describe('getTeams', () => {
    it('should successfully fetch teams', async () => {
      ;(apiService.get as jest.Mock).mockResolvedValue(mockTeams)

      const result = await getTeams()

      expect(apiService.get).toHaveBeenCalledWith(API_ENDPOINT.TEAMS, undefined, {
        tags: [API_ENDPOINT.TEAMS],
      })
      expect(result).toEqual({ data: mockTeams })
    })

    it('should handle errors when fetching teams fails', async () => {
      const errorMessage = 'Failed to fetch teams'
      ;(apiService.get as jest.Mock).mockRejectedValue(new Error(errorMessage))

      const result = await getTeams()

      expect(result).toEqual({ error: errorMessage })
    })

    it('should use default error message when error has no message', async () => {
      ;(apiService.get as jest.Mock).mockRejectedValue(new Error())

      const result = await getTeams()

      expect(result).toEqual({ error: 'Failed to fetch teams. Please try again.' })
    })
  })

  describe('getTeamById', () => {
    const teamId = '1'
    const mockTeam = { id: teamId, name: 'Team 1' }

    it('should successfully fetch a team by id', async () => {
      ;(apiService.get as jest.Mock).mockResolvedValue(mockTeam)

      const result = await getTeamById(teamId)

      expect(apiService.get).toHaveBeenCalledWith(`${API_ENDPOINT.TEAMS}/${teamId}`, undefined, {
        tags: [API_ENDPOINT.TEAMS, `${API_ENDPOINT.TEAMS}/${teamId}`],
      })
      expect(result).toEqual({ data: mockTeam })
    })

    it('should handle errors when fetching a team by id fails', async () => {
      const errorMessage = 'Failed to fetch team'
      ;(apiService.get as jest.Mock).mockRejectedValue(new Error(errorMessage))

      const result = await getTeamById(teamId)

      expect(result).toEqual({ error: errorMessage })
    })

    it('should use default error message when error has no message', async () => {
      ;(apiService.get as jest.Mock).mockRejectedValue(new Error())

      const result = await getTeamById(teamId)

      expect(result).toEqual({ error: 'Failed to fetch team with id. Please try again.' })
    })
  })
})
