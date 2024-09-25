import { updateColumn } from '../update-column'
import { apiService } from '@/lib/api-service'
import { API_ENDPOINT } from '@/constants/api'
import { revalidateTag } from 'next/cache'

jest.mock('@/lib/api-service')
jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}))

describe('updateColumn', () => {
  const mockColumnId = '1'
  const mockColumn = { id: mockColumnId, title: 'Updated Column', index: 2, projects: [] }

  it('should successfully update a column', async () => {
    ;(apiService.update as jest.Mock).mockResolvedValue(mockColumn)

    const result = await updateColumn(mockColumnId, mockColumn)

    expect(apiService.update).toHaveBeenCalledWith(`${API_ENDPOINT.COLUMNS}/${mockColumnId}`, mockColumn)
    expect(revalidateTag).toHaveBeenCalledWith(API_ENDPOINT.COLUMNS)
    expect(revalidateTag).toHaveBeenCalledWith(`${API_ENDPOINT.COLUMNS}/${mockColumnId}`)
    expect(result).toEqual({ data: mockColumn })
  })

  it('should handle errors when updating a column fails', async () => {
    const errorMessage = 'Failed to update column'
    ;(apiService.update as jest.Mock).mockRejectedValue(new Error(errorMessage))

    const result = await updateColumn(mockColumnId, mockColumn)

    expect(result).toEqual({ error: errorMessage })
  })

  it('should use default error message when error has no message', async () => {
    ;(apiService.update as jest.Mock).mockRejectedValue(new Error())

    const result = await updateColumn(mockColumnId, mockColumn)

    expect(result).toEqual({ error: 'Failed to update column. Please try again.' })
  })
})
