import { signInAction } from '../sign-in-action'
import * as clerkModule from '@clerk/nextjs/server'

jest.mock('@clerk/nextjs/server', () => ({
  clerkClient: jest.fn(),
}))

describe('signInAction', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return success true when sign-in is successful', async () => {
    const mockGetUserList = jest.fn().mockResolvedValue({
      data: [{ id: 'user123' }],
    })
    const mockVerifyPassword = jest.fn().mockResolvedValue(true)

    const mockClerkClient = {
      users: {
        getUserList: mockGetUserList,
        verifyPassword: mockVerifyPassword,
      },
    }

    jest.spyOn(clerkModule, 'clerkClient').mockReturnValue(mockClerkClient as any)

    const result = await signInAction({
      emailOrUsername: 'test@example.com',
      password: 'password123',
    })

    expect(result).toEqual({
      success: true,
      identifier: 'test@example.com',
      password: 'password123',
    })
    expect(mockGetUserList).toHaveBeenCalledWith({
      emailAddress: ['test@example.com'],
      username: ['test@example.com'],
    })
    expect(mockVerifyPassword).toHaveBeenCalledWith({
      userId: 'user123',
      password: 'password123',
    })
  })

  it('should return success false when user is not found', async () => {
    const mockGetUserList = jest.fn().mockResolvedValue({ data: [] })

    const mockClerkClient = {
      users: {
        getUserList: mockGetUserList,
      },
    }

    jest.spyOn(clerkModule, 'clerkClient').mockReturnValue(mockClerkClient as any)

    const result = await signInAction({
      emailOrUsername: 'nonexistent@example.com',
      password: 'password123',
    })

    expect(result).toEqual({
      success: false,
      errors: { emailOrUsername: ['No user found with this email or username'] },
    })
  })

  it('should return success false when password is incorrect', async () => {
    const mockGetUserList = jest.fn().mockResolvedValue({
      data: [{ id: 'user123' }],
    })
    const mockVerifyPassword = jest.fn().mockResolvedValue(false)

    const mockClerkClient = {
      users: {
        getUserList: mockGetUserList,
        verifyPassword: mockVerifyPassword,
      },
    }

    jest.spyOn(clerkModule, 'clerkClient').mockReturnValue(mockClerkClient as any)

    const result = await signInAction({
      emailOrUsername: 'test@example.com',
      password: 'wrongpassword',
    })

    expect(result).toEqual({
      success: false,
      errors: { password: ['Invalid password'] },
    })
  })

  it('should return validation errors for invalid input', async () => {
    const result = await signInAction({
      emailOrUsername: '', // Invalid: empty string
      password: 'short', // Invalid: too short
    })

    expect(result).toEqual({
      success: false,
      errors: expect.objectContaining({
        emailOrUsername: expect.arrayContaining([expect.any(String)]),
        password: expect.arrayContaining([expect.any(String)]),
      }),
    })
  })

  it('should handle unexpected errors during sign-in', async () => {
    const mockGetUserList = jest.fn().mockRejectedValue(new Error('API Error'))

    const mockClerkClient = {
      users: {
        getUserList: mockGetUserList,
      },
    }

    jest.spyOn(clerkModule, 'clerkClient').mockReturnValue(mockClerkClient as any)

    const result = await signInAction({
      emailOrUsername: 'test@example.com',
      password: 'password123',
    })

    expect(result).toEqual({
      success: false,
      errors: { root: ['An unexpected error occurred during sign in'] },
    })
    expect(mockGetUserList).toHaveBeenCalled()
  })
})
