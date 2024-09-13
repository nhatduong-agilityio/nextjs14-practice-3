import { getColumns } from '../get-columns'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'

jest.mock('@/lib/api-service')

describe('getColumns', () => {
  const mockColumns = [
    { id: '1', name: 'To Do' },
    { id: '2', name: 'In Progress' },
    { id: '3', name: 'Done' },
  ]

  it('should successfully fetch columns', async () => {
    ;(apiService.get as jest.Mock).mockResolvedValue(mockColumns)

    const result = await getColumns()

    expect(apiService.get).toHaveBeenCalledWith(API_ENDPOINT.COLUMNS, undefined, {
      tags: [API_ENDPOINT.COLUMNS],
    })
    expect(result).toEqual({ data: mockColumns })
  })

  it('should handle errors when fetching columns fails', async () => {
    const errorMessage = 'Failed to fetch columns'
    ;(apiService.get as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await getColumns()

    expect(apiService.get).toHaveBeenCalledWith(API_ENDPOINT.COLUMNS, undefined, {
      tags: [API_ENDPOINT.COLUMNS],
    })
    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(apiService.get as jest.Mock).mockRejectedValue(new Error())

    const result = await getColumns()

    expect(apiService.get).toHaveBeenCalledWith(API_ENDPOINT.COLUMNS, undefined, {
      tags: [API_ENDPOINT.COLUMNS],
    })
    expect(result).toEqual({ error: 'Failed to fetch columns. Please try again.' })
  })
})
