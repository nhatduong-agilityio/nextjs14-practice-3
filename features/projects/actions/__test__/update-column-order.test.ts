import { updateColumnOrder } from '../update-column-order'
import { updateColumn } from '../update-column'
import { ProjectColumn } from '@/types/project'
import { PROJECT_COLUMNS } from '@/constants/data'

jest.mock('../update-column')

describe('updateColumnOrder', () => {
  const mockSourceColumn: ProjectColumn = PROJECT_COLUMNS[0]
  const mockDestinationColumn: ProjectColumn = PROJECT_COLUMNS[1]

  it('should successfully update column order', async () => {
    ;(updateColumn as jest.Mock).mockResolvedValue({ data: {} })

    const result = await updateColumnOrder(mockSourceColumn, mockDestinationColumn)

    expect(updateColumn).toHaveBeenCalledWith(mockSourceColumn.id, mockSourceColumn)
    expect(updateColumn).toHaveBeenCalledWith(mockDestinationColumn.id, mockDestinationColumn)
    expect(result).toEqual({ data: [] })
  })

  it('should handle errors when updating column order fails', async () => {
    const errorMessage = 'Failed to update column'
    ;(updateColumn as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await updateColumnOrder(mockSourceColumn, mockDestinationColumn)

    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(updateColumn as jest.Mock).mockRejectedValue(new Error())

    const result = await updateColumnOrder(mockSourceColumn, mockDestinationColumn)

    expect(result).toEqual({ error: 'Failed to update column order. Please try again.' })
  })
})
