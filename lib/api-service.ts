import { API } from '@/constants/api'

export class ApiService {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit,
    queryParams?: URLSearchParams,
    next?: NextFetchRequestConfig,
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`)
    if (queryParams) {
      url.search = queryParams.toString()
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout

    try {
      const response = await fetch(url.toString(), {
        ...options,
        signal: controller.signal,
        next,
      })
      clearTimeout(timeoutId)

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || `Error ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  async create<T>(endpoint: string, data: T, headers?: HeadersInit, next?: NextFetchRequestConfig): Promise<T> {
    return this.request<T>(
      endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      },
      undefined,
      next,
    )
  }

  async get<T>(endpoint: string, queryParams?: URLSearchParams, next?: NextFetchRequestConfig): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' }, queryParams, next)
  }

  async update<T>(endpoint: string, data: T, headers?: HeadersInit, next?: NextFetchRequestConfig): Promise<T> {
    return this.request<T>(
      endpoint,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      },
      undefined,
      next,
    )
  }

  async delete<T>(endpoint: string, next?: NextFetchRequestConfig): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' }, undefined, next)
  }
}

export const apiService = new ApiService(API || '')
