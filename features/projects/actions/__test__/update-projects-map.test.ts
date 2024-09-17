import { updateProjectMap } from '../update-project-map'
import { updateColumn } from '../update-column'
import { updateProject } from '../update-project'
import { ProjectColumn, ProjectDetail } from '@/types/project'
import { PROJECT_COLUMNS, PROJECT_DETAILS } from '@/constants/data'

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
    expect(result).toEqual({ data: mockColumnsOrdered })
  })

  it('should update project map when moving between different columns', async () => {
    const result = await updateProjectMap(mockColumnsOrdered, mockSourceColumn, mockDestinationColumn, mockMovedProject)

    expect(updateProject).toHaveBeenCalledTimes(2) // 1 for moved project, 2 for updating indices
    expect(updateColumn).toHaveBeenCalledTimes(2)
    expect(result).toEqual({ data: mockColumnsOrdered })
  })

  it('should handle errors and return an error message', async () => {
    ;(updateProject as jest.Mock).mockRejectedValueOnce(new Error('Test error'))

    const result = await updateProjectMap(mockColumnsOrdered, mockSourceColumn, mockDestinationColumn, mockMovedProject)

    expect(result).toEqual({ error: 'Test error' })
  })

  it('should update indices of projects in destination column', async () => {
    const mockDestinationColumnWithMultipleProjects: ProjectColumn = PROJECT_COLUMNS[2]

    const mockColumnsOrderedWithMultipleDestinationProjects: Record<string, ProjectDetail[]> = {
      Pending: [PROJECT_DETAILS[0], PROJECT_DETAILS[1]],
      Completed: [PROJECT_DETAILS[4]],
    }

    await updateProjectMap(
      mockColumnsOrderedWithMultipleDestinationProjects,
      mockDestinationColumnWithMultipleProjects,
      PROJECT_COLUMNS[0],
      PROJECT_DETAILS[0],
    )

    expect(updateProject).toHaveBeenCalledTimes(2)
  })

  it('should use fallback error message when error has no message', async () => {
    ;(updateProject as jest.Mock).mockRejectedValueOnce(new Error())

    const result = await updateProjectMap(mockColumnsOrdered, mockSourceColumn, mockDestinationColumn, mockMovedProject)

    expect(result).toEqual({ error: 'Failed to update after drag. Please try again.' })
  })

  it('should set patchedProjectIndex to 0 when destination column is empty', async () => {
    const emptyDestinationColumn: ProjectColumn = {
      id: 'empty-destination-column',
      title: 'Empty Column',
      index: 2,
      projectIds: [],
    }

    const columnsOrderedWithEmptyDestination: Record<string, ProjectDetail[]> = {
      Pending: [PROJECT_DETAILS[0], PROJECT_DETAILS[1]],
      'Empty Column': [],
    }

    await updateProjectMap(
      columnsOrderedWithEmptyDestination,
      mockSourceColumn,
      emptyDestinationColumn,
      {} as ProjectDetail,
    )

    expect(updateProject).toHaveBeenCalledTimes(1)
  })
})
