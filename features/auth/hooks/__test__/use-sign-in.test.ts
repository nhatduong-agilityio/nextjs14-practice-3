import { renderHook, act } from '@testing-library/react'
import { useSignIn } from '../use-sign-in'
import { useRouter } from 'next/navigation'
import { useSignIn as useSignInClerk } from '@clerk/nextjs'
import { signInAction } from '../../actions/sign-in-action'
import { ROUTES } from '@/constants/routes'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('@clerk/nextjs', () => ({
  useSignIn: jest.fn(),
}))

jest.mock('../../actions/sign-in-action', () => ({
  signInAction: jest.fn(),
}))

describe('useSignIn', () => {
  const mockSetError = jest.fn()
  const mockShowToast = jest.fn()
  const mockPush = jest.fn()
  const mockSignIn = {
    create: jest.fn(),
  }
  const mockSetActive = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSignInClerk as jest.Mock).mockReturnValue({
      isLoaded: true,
      signIn: mockSignIn,
      setActive: mockSetActive,
    })
  })

  it('should handle successful sign-in', async () => {
    ;(signInAction as jest.Mock).mockResolvedValue({
      success: true,
      identifier: 'test@example.com',
      password: 'password123',
    })
    mockSignIn.create.mockResolvedValue({
      status: 'complete',
      createdSessionId: 'session123',
    })

    const { result } = renderHook(() => useSignIn(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({ emailOrUsername: 'test@example.com', password: 'password123' })
    })

    expect(mockSetActive).toHaveBeenCalledWith({ session: 'session123' })
    expect(mockShowToast).toHaveBeenCalledWith('Sign-in Success', expect.any(String), 'active')
    expect(mockPush).toHaveBeenCalledWith(ROUTES.DASHBOARD)
  })

  it('should handle sign-in failure', async () => {
    ;(signInAction as jest.Mock).mockResolvedValue({
      success: false,
      errors: { emailOrUsername: ['Invalid email'] },
    })

    const { result } = renderHook(() => useSignIn(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({ emailOrUsername: 'invalid@example.com', password: 'password123' })
    })

    expect(mockSetError).toHaveBeenCalledWith('emailOrUsername', expect.any(Object))
  })

  it('should return early if Clerk is not loaded or missing signIn/setActive', async () => {
    ;(useSignInClerk as jest.Mock).mockReturnValue({
      isLoaded: false,
      signIn: null,
      setActive: null,
    })

    const { result } = renderHook(() => useSignIn(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({ emailOrUsername: 'test@example.com', password: 'password123' })
    })

    expect(signInAction).not.toHaveBeenCalled()
    expect(mockSetError).not.toHaveBeenCalled()
    expect(mockShowToast).not.toHaveBeenCalled()
    expect(mockPush).not.toHaveBeenCalled()
  })

  it('should handle incomplete sign-in attempt', async () => {
    ;(signInAction as jest.Mock).mockResolvedValue({
      success: true,
      identifier: 'test@example.com',
      password: 'password123',
    })
    mockSignIn.create.mockResolvedValue({
      status: 'Sign-in was not completed. Please try again.',
    })

    const { result } = renderHook(() => useSignIn(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({ emailOrUsername: 'test@example.com', password: 'password123' })
    })

    expect(mockSetError).toHaveBeenCalledWith('root', {
      type: 'manual',
      message: expect.stringContaining('Sign-in was not completed. Please try again.'),
    })
    expect(mockShowToast).toHaveBeenCalledWith(
      'Sign-in Failed',
      expect.stringContaining('Sign-in was not completed. Please try again.'),
      'destructive',
    )
  })

  it('should handle unexpected errors during sign-in', async () => {
    ;(signInAction as jest.Mock).mockRejectedValue(new Error('Unexpected error'))

    const { result } = renderHook(() => useSignIn(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({ emailOrUsername: 'test@example.com', password: 'password123' })
    })

    expect(mockSetError).toHaveBeenCalledWith('root', {
      type: 'manual',
      message: 'An unexpected error occurred. Please try again.',
    })
    expect(mockShowToast).toHaveBeenCalledWith(
      'Sign-in Failed',
      'An unexpected error occurred. Please try again.',
      'destructive',
    )
  })

  it('should handle non-array error messages', async () => {
    ;(signInAction as jest.Mock).mockResolvedValue({
      success: false,
      errors: { emailOrUsername: 'Invalid email' },
    })

    const { result } = renderHook(() => useSignIn(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({ emailOrUsername: 'invalid@example.com', password: 'password123' })
    })

    expect(mockSetError).toHaveBeenCalledWith('emailOrUsername', {
      type: 'manual',
      message: 'Invalid email',
    })
  })

  it('should handle empty sign-in attempt result', async () => {
    ;(signInAction as jest.Mock).mockResolvedValue({
      success: true,
      identifier: 'test@example.com',
      password: 'password123',
    })
    mockSignIn.create.mockResolvedValue({})

    const { result } = renderHook(() => useSignIn(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({ emailOrUsername: 'test@example.com', password: 'password123' })
    })

    expect(mockSetError).toHaveBeenCalledWith('root', {
      type: 'manual',
      message: 'Sign-in was not completed. Please try again.',
    })
    expect(mockShowToast).toHaveBeenCalledWith(
      'Sign-in Failed',
      'Sign-in was not completed. Please try again.',
      'destructive',
    )
  })
})
