import { renderHook, act } from '@testing-library/react'
import { useDebounce } from '../use-debounce'

describe('useDebounce', () => {
  jest.useFakeTimers()

  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500))
    expect(result.current).toBe('initial')
  })

  it('should debounce the value change', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    })

    expect(result.current).toBe('initial')

    // Change the value
    rerender({ value: 'changed', delay: 500 })

    // The value should not change immediately
    expect(result.current).toBe('initial')

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(500)
    })

    // Now the value should be updated
    expect(result.current).toBe('changed')
  })

  it('should cancel the previous timer on rapid changes', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    })

    rerender({ value: 'changed1', delay: 500 })
    rerender({ value: 'changed2', delay: 500 })

    // Fast-forward time, but not enough to trigger the first change
    act(() => {
      jest.advanceTimersByTime(400)
    })

    expect(result.current).toBe('initial')

    // Fast-forward the remaining time
    act(() => {
      jest.advanceTimersByTime(100)
    })

    // The value should be the latest change
    expect(result.current).toBe('changed2')
  })
})
