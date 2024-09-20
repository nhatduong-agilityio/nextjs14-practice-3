import { PROJECT_DETAILS } from '@/constants/data'
import { editDescription, DescriptionState } from '../edit-description'
import { updateProject } from '../update-project'
import { ProjectDetail } from '@/types/project'

// Mock the updateProject function
jest.mock('../update-project')

describe('editDescription', () => {
  const mockProject: ProjectDetail = PROJECT_DETAILS[0]

  const mockPrevState: DescriptionState = {}

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should update description successfully', async () => {
    const formData = new FormData()
    formData.append('description', 'New description')

    const result = await editDescription(mockProject, mockPrevState, formData)

    expect(updateProject).toHaveBeenCalledWith('3a933dc4-bb32-4d12-a272-0af75661d0ca', {
      ...mockProject,
      description: 'New description',
    })
    expect(result).toEqual({
      message: 'Description updated successfully',
    })
  })

  it('should return error when description is missing', async () => {
    const formData = new FormData()

    const result = await editDescription(mockProject, mockPrevState, formData)

    expect(updateProject).not.toHaveBeenCalled()
    expect(result).toEqual({
      error: 'Description is null',
      message: 'Missing Fields. Failed to edit description',
    })
  })

  it('should handle database error', async () => {
    const formData = new FormData()
    formData.append('description', 'New description')
    ;(updateProject as jest.Mock).mockRejectedValue(new Error('Database error'))

    const result = await editDescription(mockProject, mockPrevState, formData)

    expect(updateProject).toHaveBeenCalled()
    expect(result).toEqual({
      error: 'Failed to fetch',
      message: 'Failed to update description.',
    })
  })
})
