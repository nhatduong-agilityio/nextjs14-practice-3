import { renderHook } from '@testing-library/react'
import { useOnClickOutside } from '../use-on-click-outside'

describe('useOnClickOutside', () => {
  let handler: jest.Mock
  let ref: { current: HTMLDivElement }

  beforeEach(() => {
    handler = jest.fn()
    ref = { current: document.createElement('div') }
    document.body.appendChild(ref.current)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should call handler when clicking outside', () => {
    renderHook(() => useOnClickOutside(ref, handler))

    const event = new MouseEvent('mousedown', { bubbles: true })
    document.body.dispatchEvent(event)

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(event)
  })

  it('should not call handler when clicking inside', () => {
    renderHook(() => useOnClickOutside(ref, handler))

    const event = new MouseEvent('mousedown', { bubbles: true })
    ref.current?.dispatchEvent(event)

    expect(handler).not.toHaveBeenCalled()
  })

  it('should work with touch events', () => {
    renderHook(() => useOnClickOutside(ref, handler))

    const event = new TouchEvent('touchstart', { bubbles: true })
    document.body.dispatchEvent(event)

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(event)
  })

  it('should work with multiple refs', () => {
    const ref1 = { current: document.createElement('div') }
    const ref2 = { current: document.createElement('div') }
    document.body.appendChild(ref1.current)
    document.body.appendChild(ref2.current)

    renderHook(() => useOnClickOutside({ current: [ref1.current, ref2.current] }, handler))

    const event = new MouseEvent('mousedown', { bubbles: true })
    document.body.dispatchEvent(event)

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(event)
  })

  it('should handle array of refs correctly', () => {
    const ref1 = { current: document.createElement('div') }
    const ref2 = { current: document.createElement('div') }
    document.body.appendChild(ref1.current)
    document.body.appendChild(ref2.current)

    const arrayRef = { current: [ref1.current, ref2.current] }

    renderHook(() => useOnClickOutside(arrayRef, handler))

    const event = new MouseEvent('mousedown', { bubbles: true })
    ref1.current.dispatchEvent(event)

    expect(handler).not.toHaveBeenCalled()

    document.body.dispatchEvent(event)

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(event)
  })
})
