import { getProjects, getProjectById } from '../get-projects'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'

jest.mock('@/lib/api-service')

describe('Project Actions', () => {
  const mockProjects = [
    { id: '1', name: 'Project 1' },
    { id: '2', name: 'Project 2' },
  ]

  describe('getProjects', () => {
    it('should successfully fetch projects', async () => {
      ;(apiService.get as jest.Mock).mockResolvedValue(mockProjects)

      const result = await getProjects()

      expect(apiService.get).toHaveBeenCalledWith(API_ENDPOINT.PROJECTS, undefined, {
        tags: [API_ENDPOINT.PROJECTS],
      })
      expect(result).toEqual({ data: mockProjects })
    })

    it('should handle errors when fetching projects fails', async () => {
      const errorMessage = 'Failed to fetch projects'
      ;(apiService.get as jest.Mock).mockRejectedValue(new Error(errorMessage))

      const result = await getProjects()

      expect(result).toEqual({ error: errorMessage })
    })

    it('should use default error message when error has no message', async () => {
      ;(apiService.get as jest.Mock).mockRejectedValue(new Error())

      const result = await getProjects()

      expect(result).toEqual({ error: 'Failed to fetch projects. Please try again.' })
    })
  })

  describe('getProjectById', () => {
    const projectId = '1'
    const mockProject = { id: projectId, name: 'Project 1' }

    it('should successfully fetch a project by id', async () => {
      ;(apiService.get as jest.Mock).mockResolvedValue(mockProject)

      const result = await getProjectById(projectId)

      expect(apiService.get).toHaveBeenCalledWith(`${API_ENDPOINT.PROJECTS}/${projectId}`, undefined, {
        tags: [API_ENDPOINT.PROJECTS, `${API_ENDPOINT.PROJECTS}/${projectId}`],
      })
      expect(result).toEqual({ data: mockProject })
    })

    it('should handle errors when fetching a project by id fails', async () => {
      const errorMessage = 'Failed to fetch project'
      ;(apiService.get as jest.Mock).mockRejectedValue(new Error(errorMessage))

      const result = await getProjectById(projectId)

      expect(result).toEqual({ error: errorMessage })
    })

    it('should use default error message when error has no message', async () => {
      ;(apiService.get as jest.Mock).mockRejectedValue(new Error())

      const result = await getProjectById(projectId)

      expect(result).toEqual({ error: 'Failed to fetch project with id. Please try again.' })
    })
  })
})
