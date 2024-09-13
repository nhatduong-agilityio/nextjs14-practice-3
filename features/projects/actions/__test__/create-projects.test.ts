import { createProject } from '../create-project'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'
import { revalidateTag } from 'next/cache'
import { PROJECT_DETAILS } from '@/constants/data'

jest.mock('@/lib/api-service')
jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

describe('createProject', () => {
  const mockProject = PROJECT_DETAILS[0]

  it('should successfully create a project', async () => {
    ;(apiService.create as jest.Mock).mockResolvedValue(mockProject)

    const result = await createProject(mockProject)

    expect(apiService.create).toHaveBeenCalledWith(API_ENDPOINT.PROJECTS, mockProject)
    expect(revalidateTag).toHaveBeenCalledWith(API_ENDPOINT.PROJECTS)
    expect(result).toEqual({ data: mockProject })
  })

  it('should handle errors when creating a project fails', async () => {
    const errorMessage = 'Failed to create project'
    ;(apiService.create as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await createProject(mockProject)

    expect(apiService.create).toHaveBeenCalledWith(API_ENDPOINT.PROJECTS, mockProject)
    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(apiService.create as jest.Mock).mockRejectedValue(new Error())

    const result = await createProject(mockProject)

    expect(apiService.create).toHaveBeenCalledWith(API_ENDPOINT.PROJECTS, mockProject)
    expect(result).toEqual({ error: 'Failed to create project. Please try again.' })
  })
})
