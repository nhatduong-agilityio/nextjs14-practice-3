import { updateProjectMap } from '../update-project-map'
import { updateColumn } from '../update-column'
import { ProjectColumn } from '@/types/project'

jest.mock('../update-column')

describe('updateProjectMap', () => {
  const mockSourceColumn: ProjectColumn = {
    id: 'source-1',
    title: 'Source Column',
    index: 0,
    projects: [{ projectId: 'project-1', index: 0 }],
  }

  const mockDestColumn: ProjectColumn = {
    id: 'dest-1',
    title: 'Destination Column',
    index: 1,
    projects: [{ projectId: 'project-2', index: 0 }],
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should successfully update project map', async () => {
    ;(updateColumn as jest.Mock).mockResolvedValue({ data: {} })

    const result = await updateProjectMap(mockSourceColumn, mockDestColumn)

    expect(updateColumn).toHaveBeenCalledTimes(2)
    expect(updateColumn).toHaveBeenCalledWith(mockSourceColumn.id, mockSourceColumn)
    expect(updateColumn).toHaveBeenCalledWith(mockDestColumn.id, mockDestColumn)
    expect(result).toEqual({ data: [] })
  })

  it('should handle errors when updating project map fails', async () => {
    const errorMessage = 'Failed to update column'
    ;(updateColumn as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await updateProjectMap(mockSourceColumn, mockDestColumn)

    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(updateColumn as jest.Mock).mockRejectedValue(new Error())

    const result = await updateProjectMap(mockSourceColumn, mockDestColumn)

    expect(result).toEqual({ error: 'Failed to update project map. Please try again.' })
  })
})
