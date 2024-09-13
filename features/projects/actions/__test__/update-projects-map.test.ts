import { updateProjectMap } from '../update-project-map'
import { updateColumn } from '../update-column'
import { updateProject } from '../update-project'
import { ProjectColumn, ProjectDetail } from '@/types/project'
import { PROJECT_DETAILS } from '@/constants/data'

jest.mock('../update-column')
jest.mock('../update-project')

describe('updateProjectMap', () => {
  const mockColumnsOrdered: Record<string, ProjectDetail[]> = {
    Pending: [PROJECT_DETAILS[0], PROJECT_DETAILS[1]],
    Completed: [PROJECT_DETAILS[4]],
  }
  const mockSourceColumn: ProjectColumn = {
    id: '4fe298fd-d503-489e-92ba-dc13583d4527',
    title: 'Pending',
    index: 0,
    projectIds: ['3a933dc4-bb32-4d12-a272-0af75661d0ca', 'df3ff9e3-f6d0-47d6-86b7-2bf2d9ca645f'],
  }
  const mockDestinationColumn: ProjectColumn = {
    id: '31bfddd5-7144-4935-840f-ad9093089ae1',
    title: 'Completed',
    index: 2,
    projectIds: ['3e77b626-61ab-45d1-bb0e-499ce1e7a6ca'],
  }
  const mockMovedProject: ProjectDetail = PROJECT_DETAILS[0]
  const mockPatchedProject: ProjectDetail = PROJECT_DETAILS[4]

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should update project map when moving within the same column', async () => {
    const result = await updateProjectMap(
      mockColumnsOrdered,
      mockSourceColumn,
      mockSourceColumn,
      mockMovedProject,
      mockPatchedProject,
    )

    expect(updateProject).toHaveBeenCalledTimes(2)
    expect(updateColumn).toHaveBeenCalledTimes(1)
    expect(result).toEqual({ data: '' })
  })

  it('should update project map when moving between different columns', async () => {
    const result = await updateProjectMap(mockColumnsOrdered, mockSourceColumn, mockDestinationColumn, mockMovedProject)

    expect(updateProject).toHaveBeenCalledTimes(3)
    expect(updateColumn).toHaveBeenCalledTimes(2)
    expect(result).toEqual({ data: '' })
  })

  it('should handle errors with custom error messages', async () => {
    const customErrorMessage = 'Custom error occurred'
    ;(updateProject as jest.Mock).mockImplementation(() => {
      throw new Error(customErrorMessage)
    })

    const result = await updateProjectMap(mockColumnsOrdered, mockSourceColumn, mockDestinationColumn, mockMovedProject)

    expect(result).toEqual({ error: customErrorMessage })
  })

  it('should use default error message when error object has no message', async () => {
    ;(updateProject as jest.Mock).mockImplementation(() => {
      throw new Error()
    })

    const result = await updateProjectMap(mockColumnsOrdered, mockSourceColumn, mockDestinationColumn, mockMovedProject)

    expect(result).toEqual({ error: 'Failed to update after drag. Please try again.' })
  })
})
