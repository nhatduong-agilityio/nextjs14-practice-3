'use server'

import { clerkClient } from '@clerk/nextjs/server'
import { SignInFormSchema, SignInFormSchemaType } from '../lib/schema'

export const signInAction = async (formData: SignInFormSchemaType) => {
  // Validate the form data using the Zod schema
  const result = SignInFormSchema.safeParse(formData)

  if (!result.success) {
    // If validation fails, return the errors
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  // Validation passed, proceed with sign-in logic
  const { emailOrUsername, password } = result.data

  try {
    // Find the user by email or username
    const { data: users } = await clerkClient().users.getUserList({
      emailAddress: [emailOrUsername],
      username: [emailOrUsername],
    })

    if (users.length === 0) {
      return {
        success: false,
        errors: { emailOrUsername: ['No user found with this email or username'] },
      }
    }

    const user = users[0]

    // Verify the password
    const verified = await clerkClient().users.verifyPassword({
      userId: user.id,
      password: password,
    })

    if (!verified) {
      return {
        success: false,
        errors: { password: ['Invalid password'] },
      }
    }

    return {
      success: true,
      identifier: emailOrUsername,
      password,
    }
  } catch (err) {
    return {
      success: false,
      errors: { root: ['An unexpected error occurred during sign in'] },
    }
  }
}
