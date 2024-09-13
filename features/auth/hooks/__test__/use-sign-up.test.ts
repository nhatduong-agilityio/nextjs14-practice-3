import { renderHook, act } from '@testing-library/react'
import { useSignUp } from '../use-sign-up'
import { useRouter } from 'next/navigation'
import { useSignUp as useSignUpClerk } from '@clerk/nextjs'
import { signUpAction } from '../../actions/sign-up-action'
import { ROUTES } from '@/constants/routes'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('@clerk/nextjs', () => ({
  useSignUp: jest.fn(),
}))

jest.mock('../../actions/sign-up-action', () => ({
  signUpAction: jest.fn(),
}))

describe('useSignUp', () => {
  const mockSetError = jest.fn()
  const mockShowToast = jest.fn()
  const mockPush = jest.fn()
  const mockSignUp = {
    create: jest.fn(),
  }
  const mockSetActive = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSignUpClerk as jest.Mock).mockReturnValue({
      isLoaded: true,
      signUp: mockSignUp,
      setActive: mockSetActive,
    })
  })

  it('should handle successful sign-up', async () => {
    ;(signUpAction as jest.Mock).mockResolvedValue({
      success: true,
      emailAddress: 'test@example.com',
      password: 'password123',
      username: 'testuser',
    })
    mockSignUp.create.mockResolvedValue({
      status: 'complete',
      createdSessionId: 'session123',
    })

    const { result } = renderHook(() => useSignUp(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({
        fullName: 'Test User',
        emailAddress: 'test@example.com',
        password: 'password123',
      })
    })

    expect(mockSetActive).toHaveBeenCalledWith({ session: 'session123' })
    expect(mockShowToast).toHaveBeenCalledWith('Sign-up Success', expect.any(String), 'active')
    expect(mockPush).toHaveBeenCalledWith(ROUTES.DASHBOARD)
  })

  it('should handle sign-up failure', async () => {
    ;(signUpAction as jest.Mock).mockResolvedValue({
      success: false,
      errors: { emailAddress: ['Email already in use'] },
    })

    const { result } = renderHook(() => useSignUp(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({
        fullName: 'Test User',
        emailAddress: 'existing@example.com',
        password: 'password123',
      })
    })

    expect(mockSetError).toHaveBeenCalledWith('emailAddress', expect.any(Object))
  })

  it('should handle incomplete sign-up attempt', async () => {
    ;(signUpAction as jest.Mock).mockResolvedValue({
      success: true,
      emailAddress: 'test@example.com',
      password: 'password123',
      username: 'testuser',
    })
    mockSignUp.create.mockResolvedValue({
      status: 'missing_requirements',
    })

    const { result } = renderHook(() => useSignUp(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({
        fullName: 'Test User',
        emailAddress: 'test@example.com',
        password: 'password123',
      })
    })

    expect(mockSetError).toHaveBeenCalledWith('root', expect.any(Object))
    expect(mockShowToast).toHaveBeenCalledWith('Sign-up Failed', expect.any(String), 'destructive')
  })

  it('should handle non-array error messages', async () => {
    ;(signUpAction as jest.Mock).mockResolvedValue({
      success: false,
      errors: { emailAddress: 'Invalid email' },
    })

    const { result } = renderHook(() => useSignUp(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({
        fullName: 'Test User',
        emailAddress: 'existing@example.com',
        password: 'password123',
      })
    })

    expect(mockSetError).toHaveBeenCalledWith('emailAddress', {
      type: 'manual',
      message: 'Invalid email',
    })
  })

  it('should return early if Clerk is not loaded or missing signUp/setActive', async () => {
    ;(useSignUpClerk as jest.Mock).mockReturnValue({
      isLoaded: false,
      signIn: null,
      setActive: null,
    })

    const { result } = renderHook(() => useSignUp(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({
        fullName: 'Test User',
        emailAddress: 'test@example.com',
        password: 'password123',
      })
    })

    expect(signUpAction).not.toHaveBeenCalled()
    expect(mockSetError).not.toHaveBeenCalled()
    expect(mockShowToast).not.toHaveBeenCalled()
    expect(mockPush).not.toHaveBeenCalled()
  })

  it('should handle unexpected errors during sign-up', async () => {
    ;(signUpAction as jest.Mock).mockRejectedValue(new Error('Unexpected error'))

    const { result } = renderHook(() => useSignUp(mockSetError, mockShowToast))

    await act(async () => {
      await result.current.onSubmit({
        fullName: 'Test User',
        emailAddress: 'test@example.com',
        password: 'password123',
      })
    })

    expect(mockSetError).toHaveBeenCalledWith('root', {
      type: 'manual',
      message: 'An unexpected error occurred. Please try again.',
    })
    expect(mockShowToast).toHaveBeenCalledWith(
      'Sign-up Failed',
      'An unexpected error occurred. Please try again.',
      'destructive',
    )
  })
})
