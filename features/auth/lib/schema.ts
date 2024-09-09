import { z } from 'zod'

// Minimum 8 characters, at least one uppercase letter, one lowercase letter.
const passwordValidation = new RegExp(/^[A-Za-z\d@$!%*?&.]{8,}$/)

export const SignInFormSchema = z.object({
  emailOrUsername: z.union([
    z.string().email({ message: 'Invalid email address' }),
    z
      .string()
      .min(2, { message: 'Username must be at least 2 characters.' })
      .max(30, { message: 'Username must not exceed 30 characters.' }),
  ]),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).regex(passwordValidation, {
    message: 'Password must include uppercase, lowercase.',
  }),
  rememberMe: z.boolean().default(false).optional(),
})

export const SignUpFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(30, { message: 'Full name must not exceed 30 characters.' }),
  emailAddress: z.string().email({ message: 'Invalid email address' }),
  businessUrl: z
    .string()
    .toLowerCase()
    .min(2, { message: 'Business URL must be at least 2 characters and lower case.' })
    .optional(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).regex(passwordValidation, {
    message: 'Password must include uppercase, lowercase.',
  }),
})

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>
export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>
