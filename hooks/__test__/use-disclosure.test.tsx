import { renderHook, act } from '@testing-library/react'
import { useDisclosure } from '../use-disclosure'

describe('useDisclosure', () => {
  it('should initialize with isOpen as false', () => {
    const { result } = renderHook(() => useDisclosure())
    expect(result.current.isOpen).toBe(false)
  })

  it('should open when onOpen is called', () => {
    const { result } = renderHook(() => useDisclosure())
    act(() => {
      result.current.onOpen()
    })
    expect(result.current.isOpen).toBe(true)
  })

  it('should close when onClose is called', () => {
    const { result } = renderHook(() => useDisclosure())
    act(() => {
      result.current.onOpen()
      result.current.onClose()
    })
    expect(result.current.isOpen).toBe(false)
  })

  it('should toggle when onToggle is called', () => {
    const { result } = renderHook(() => useDisclosure())
    act(() => {
      result.current.onToggle()
    })
    expect(result.current.isOpen).toBe(true)
    act(() => {
      result.current.onToggle()
    })
    expect(result.current.isOpen).toBe(false)
  })
})
