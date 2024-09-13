import { SignInFormSchema, SignUpFormSchema } from '../schema'

describe('SignInFormSchema', () => {
  it('should validate correct sign-in data', () => {
    const validData = {
      emailOrUsername: 'user@example.com',
      password: 'ValidPass123',
      rememberMe: true,
    }
    expect(SignInFormSchema.parse(validData)).toEqual(validData)
  })

  it('should validate username instead of email', () => {
    const validData = {
      emailOrUsername: 'username',
      password: 'ValidPass123',
    }
    expect(SignInFormSchema.parse(validData)).toEqual(validData)
  })

  it('should reject short password', () => {
    const result = SignInFormSchema.safeParse({ emailOrUsername: 'user@example.com', password: 'short' })
    expect(result.success).toBe(false)
  })
})

describe('SignUpFormSchema', () => {
  it('should validate correct sign-up data', () => {
    const validData = {
      fullName: 'John Doe',
      emailAddress: 'john@example.com',
      businessUrl: 'johndoe',
      password: 'ValidPass123',
    }
    expect(SignUpFormSchema.parse(validData)).toEqual(validData)
  })

  it('should reject invalid email', () => {
    expect(() =>
      SignUpFormSchema.parse({
        fullName: 'John Doe',
        emailAddress: 'invalid-email',
        password: 'ValidPass123',
      }),
    ).toThrow()
  })

  it('should reject short full name', () => {
    expect(() =>
      SignUpFormSchema.parse({
        fullName: 'J',
        emailAddress: 'john@example.com',
        password: 'ValidPass123',
      }),
    ).toThrow()
  })

  it('should allow omitting businessUrl', () => {
    const validData = {
      fullName: 'John Doe',
      emailAddress: 'john@example.com',
      password: 'ValidPass123',
    }
    expect(SignUpFormSchema.parse(validData)).toEqual(validData)
  })
})
