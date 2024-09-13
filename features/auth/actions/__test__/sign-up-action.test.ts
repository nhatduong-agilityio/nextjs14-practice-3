import { signUpAction } from '../sign-up-action'
import * as clerkModule from '@clerk/nextjs/server'

jest.mock('@clerk/nextjs/server', () => ({
  clerkClient: jest.fn(),
}))

describe('signUpAction', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return success true when sign-up is successful', async () => {
    const mockGetUserList = jest.fn().mockResolvedValue({ data: [] })

    const mockClerkClient = {
      users: {
        getUserList: mockGetUserList,
      },
    }

    jest.spyOn(clerkModule, 'clerkClient').mockReturnValue(mockClerkClient as any)

    const result = await signUpAction({
      fullName: 'newuser',
      emailAddress: 'newuser@example.com',
      password: 'password123',
    })

    expect(result).toEqual({
      success: true,
      username: 'newusernewuser',
      emailAddress: 'newuser@example.com',
      password: 'password123',
    })
    expect(mockGetUserList).toHaveBeenCalledWith({
      emailAddress: ['newuser@example.com'],
      username: ['newuser@example.com'],
    })
  })

  it('should return success false when user already exists', async () => {
    const mockGetUserList = jest.fn().mockResolvedValue({
      data: [{ id: 'existingUser123' }],
    })

    const mockClerkClient = {
      users: {
        getUserList: mockGetUserList,
      },
    }

    jest.spyOn(clerkModule, 'clerkClient').mockReturnValue(mockClerkClient as any)

    const result = await signUpAction({
      fullName: 'existinguser',
      emailAddress: 'existinguser@example.com',
      password: 'password123',
    })

    expect(result).toEqual({
      success: false,
      errors: { emailAddress: ['User found by this email or username'] },
    })
  })

  it('should return validation errors for invalid input', async () => {
    const result = await signUpAction({
      emailAddress: 'invalidemail',
      password: 'short',
      fullName: 'A',
    })

    expect(result).toEqual({
      success: false,
      errors: {
        emailAddress: ['Invalid email address'],
        fullName: ['Full name must be at least 2 characters.'],
        password: ['Password must be at least 8 characters long', 'Password must include uppercase, lowercase.'],
      },
    })
  })

  it('should handle unexpected errors during sign-up', async () => {
    const mockGetUserList = jest.fn().mockRejectedValue(new Error('API Error'))

    const mockClerkClient = {
      users: {
        getUserList: mockGetUserList,
      },
    }

    jest.spyOn(clerkModule, 'clerkClient').mockReturnValue(mockClerkClient as any)

    const result = await signUpAction({
      fullName: 'newuser',
      emailAddress: 'newuser@example.com',
      password: 'password123',
    })

    expect(result).toEqual({
      success: false,
      errors: { root: ['An unexpected error occurred during sign up'] },
    })
  })
})
