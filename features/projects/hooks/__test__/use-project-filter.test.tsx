import { renderHook, act } from '@testing-library/react'
import { useProjectFilter } from '../use-project-filter'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}))

describe('useProjectFilter', () => {
  const mockPush = jest.fn()
  const mockPathname = '/projects'

  beforeEach(() => {
    ;(usePathname as jest.Mock).mockReturnValue(mockPathname)
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams())
  })

  it('should set filter correctly', () => {
    const { result } = renderHook(() => useProjectFilter())

    act(() => {
      result.current.setFilter('arrange', 'asc')
    })

    expect(mockPush).toHaveBeenCalledWith('/projects?arrange=asc')
  })

  it('should get filter correctly', () => {
    ;(useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('arrange=desc'))
    const { result } = renderHook(() => useProjectFilter())

    expect(result.current.getFilter('arrange')).toBe('desc')
  })

  it('should set filter with not enter type', () => {
    const { result } = renderHook(() => useProjectFilter())

    act(() => {
      result.current.setFilter(undefined, 'asc')
    })

    expect(mockPush).toHaveBeenCalledWith('/projects?arrange=asc')
  })

  it('should get filter with not enter type', () => {
    ;(useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('arrange=desc'))
    const { result } = renderHook(() => useProjectFilter())

    expect(result.current.getFilter(undefined)).toBe('desc')
  })
})
