'use server'

import { clerkClient } from '@clerk/nextjs/server'
import { SignUpFormSchema, SignUpFormSchemaType } from '../lib/schema'
import { formatFullName } from '../utils/format'

export const signUpAction = async (formData: SignUpFormSchemaType) => {
  // Validate the form data using the Zod schema
  const result = SignUpFormSchema.safeParse(formData)

  if (!result.success) {
    // If validation fails, return the errors
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  // Validation passed, proceed with sign-in logic
  const { emailAddress, password, fullName } = result.data

  try {
    // Find the user by email or username
    const { data: users } = await clerkClient().users.getUserList({
      emailAddress: [emailAddress],
      username: [emailAddress],
    })

    if (users.length !== 0) {
      return {
        success: false,
        errors: { emailAddress: ['User found by this email or username'] },
      }
    }

    return {
      success: true,
      emailAddress,
      password,
      username: formatFullName(fullName),
    }
  } catch (err) {
    return {
      success: false,
      errors: { root: ['An unexpected error occurred during sign up'] },
    }
  }
}
