import { revalidateTag } from 'next/cache'
import { deleteProject } from '../delete-project'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'

jest.mock('@/lib/api-service')
jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

describe('deleteProject', () => {
  const mockProjectId = '1'
  const mockDeletedProject = {
    id: '1',
    name: 'Deleted Project',
    description: 'A deleted project',
  }

  it('should successfully delete a project', async () => {
    ;(apiService.delete as jest.Mock).mockResolvedValue(mockDeletedProject)

    const result = await deleteProject(mockProjectId)

    expect(apiService.delete).toHaveBeenCalledWith(`${API_ENDPOINT.PROJECTS}/${mockProjectId}`)
    expect(revalidateTag).toHaveBeenCalledWith(API_ENDPOINT.PROJECTS)
    expect(revalidateTag).toHaveBeenCalledWith(`${API_ENDPOINT.PROJECTS}/${mockProjectId}`)
    expect(result).toEqual({ data: mockDeletedProject })
  })

  it('should handle errors when deleting a project fails', async () => {
    const errorMessage = 'Failed to delete project'
    ;(apiService.delete as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await deleteProject(mockProjectId)

    expect(apiService.delete).toHaveBeenCalledWith(`${API_ENDPOINT.PROJECTS}/${mockProjectId}`)
    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(apiService.delete as jest.Mock).mockRejectedValue(new Error())

    const result = await deleteProject(mockProjectId)

    expect(apiService.delete).toHaveBeenCalledWith(`${API_ENDPOINT.PROJECTS}/${mockProjectId}`)
    expect(result).toEqual({ error: 'Failed to delete project. Please try again.' })
  })
})
