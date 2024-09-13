import fetchMock from 'jest-fetch-mock'
import { ApiService, apiService as apiServiceDefault } from '../api-service'

fetchMock.enableMocks()

describe('ApiService', () => {
  let apiService: ApiService

  beforeEach(() => {
    fetchMock.resetMocks()
    apiService = new ApiService('https://api.example.com')
  })

  it('should create a new instance with the correct base URL', () => {
    expect(apiService['baseUrl']).toBe('https://api.example.com')
  })

  describe('create', () => {
    it('should send a POST request with the correct data', async () => {
      const mockData = { name: 'Test' }
      fetchMock.mockResponseOnce(JSON.stringify(mockData))

      const result = await apiService.create('/test', mockData)

      expect(fetchMock).toHaveBeenCalledWith(
        'https://api.example.com/test',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mockData),
        }),
      )
      expect(result).toEqual(mockData)
    })
  })

  describe('get', () => {
    it('should send a GET request with query params', async () => {
      const mockData = { id: 1, name: 'Test' }
      fetchMock.mockResponseOnce(JSON.stringify(mockData))

      const queryParams = new URLSearchParams({ id: '1' })
      const result = await apiService.get('/test', queryParams)

      expect(fetchMock).toHaveBeenCalledWith(
        'https://api.example.com/test?id=1',
        expect.objectContaining({ method: 'GET' }),
      )
      expect(result).toEqual(mockData)
    })
  })

  describe('update', () => {
    it('should send a PUT request with the correct data', async () => {
      const mockData = { id: 1, name: 'Updated Test' }
      fetchMock.mockResponseOnce(JSON.stringify(mockData))

      const result = await apiService.update('/test/1', mockData)

      expect(fetchMock).toHaveBeenCalledWith(
        'https://api.example.com/test/1',
        expect.objectContaining({
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mockData),
        }),
      )
      expect(result).toEqual(mockData)
    })
  })

  describe('delete', () => {
    it('should send a DELETE request', async () => {
      const mockResponse = { success: true }
      fetchMock.mockResponseOnce(JSON.stringify(mockResponse))

      const result = await apiService.delete('/test/1')

      expect(fetchMock).toHaveBeenCalledWith(
        'https://api.example.com/test/1',
        expect.objectContaining({ method: 'DELETE' }),
      )
      expect(result).toEqual(mockResponse)
    })
  })

  it('should handle request errors', async () => {
    fetchMock.mockRejectOnce(new Error('Network error'))

    await expect(apiService.get('/test')).rejects.toThrow('Network error')
  })

  it('should handle non-OK responses', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'Not Found' }), { status: 404 })

    await expect(apiService.get('/test')).rejects.toThrow('Error 404: Not Found')
  })

  it('should abort the request after 10 seconds timeout', async () => {
    jest.useFakeTimers()
    fetchMock.mockResponse(() => new Promise((resolve) => setTimeout(resolve, 10000)))

    const promise = apiService.get('/test')
    jest.advanceTimersByTime(10001)

    await expect(promise).rejects.toThrow('The operation was aborted')

    jest.useRealTimers()
  })

  it('should create apiService with API constant or empty string', () => {
    expect(apiServiceDefault).toEqual({ baseUrl: '' })
  })
})
