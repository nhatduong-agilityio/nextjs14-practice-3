import { updateProject } from '../update-project'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'
import { revalidateTag } from 'next/cache'
import { PROJECT_DETAILS } from '@/constants/data'

jest.mock('@/lib/api-service')
jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

describe('updateProject', () => {
  const mockProjectId = PROJECT_DETAILS[0].id
  const mockProject = PROJECT_DETAILS[0]

  it('should successfully update a project', async () => {
    ;(apiService.update as jest.Mock).mockResolvedValue(mockProject)

    const result = await updateProject(mockProjectId, mockProject)

    expect(apiService.update).toHaveBeenCalledWith(`${API_ENDPOINT.PROJECTS}/${mockProjectId}`, mockProject)
    expect(revalidateTag).toHaveBeenCalledWith(API_ENDPOINT.PROJECTS)
    expect(revalidateTag).toHaveBeenCalledWith(`${API_ENDPOINT.PROJECTS}/${mockProjectId}`)
    expect(result).toEqual({ data: mockProject })
  })

  it('should handle errors when updating a project fails', async () => {
    const errorMessage = 'Failed to update project'
    ;(apiService.update as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await updateProject(mockProjectId, mockProject)

    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(apiService.update as jest.Mock).mockRejectedValue(new Error())

    const result = await updateProject(mockProjectId, mockProject)

    expect(result).toEqual({ error: 'Failed to update project. Please try again.' })
  })
})
