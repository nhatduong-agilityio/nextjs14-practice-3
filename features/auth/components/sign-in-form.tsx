'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

// Components
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { EmailIcon } from '@/icons/email-icon'
import { ClockOutlineIcon } from '@/icons/clock-outline-icon'
import { Separator } from '../../../components/ui/separator'
import { Label } from '../../../components/ui/label'
import { Heading } from '../../../components/ui/heading'
import { Checkbox } from '../../../components/ui/checkbox'
import { GoogleLightIcon } from '@/icons/google-light-icon'
import { FacebookLightIcon } from '@/icons/facebook-light-icon'

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(/^[A-Za-z\d@$!%*?&.]{8,}$/)

const FormSchema = z.object({
  emailOrUsername: z.union([
    z.string().email({ message: 'Invalid email address' }),
    z
      .string()
      .min(2, { message: 'Username must be at least 2 characters.' })
      .max(30, { message: 'Username must not exceed 30 characters.' }),
  ]),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).regex(passwordValidation, {
    message: 'Password must include uppercase, lowercase, number, and special character',
  }),
  rememberMe: z.boolean().default(false).optional(),
})

export const SignInForm = () => {
  const { isLoaded, signIn, setActive } = useSignIn()
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      emailOrUsername: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = async ({ emailOrUsername, password }: z.infer<typeof FormSchema>) => {
    if (!isLoaded) {
      return
    }

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailOrUsername,
        password,
      })

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.push('/')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <Form {...form}>
      <Heading headingLevel='h1' size='lg'>
        Log In to Your Account
      </Heading>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col mt-[34px] gap-2.5'>
        <FormField
          control={form.control}
          name='emailOrUsername'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email or Username</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email/username' icon={<EmailIcon />} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='Enter your password' type='password' icon={<ClockOutlineIcon />} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='rememberMe'
          render={({ field }) => (
            <FormItem className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} variant='sun' />
                </FormControl>
                <FormLabel variant='field' size='md' className='leading-4'>
                  Remember Me
                </FormLabel>
              </div>
              <Link href='/forgot-password' className='leading-4 font-medium text-link text-base hover:underline'>
                Forgot Password
              </Link>
            </FormItem>
          )}
        />
        <Button size='lg' type='submit' className='bg-blue-20 h-50'>
          Login
        </Button>
        <div className='flex gap-[15px] items-center mt-5'>
          <Separator variant='dashed' className='flex-1' />
          <Label variant='secondary' size='md'>
            Instant Login
          </Label>
          <Separator variant='dashed' className='flex-1' />
        </div>
        <Button size='lg' className='bg-red-20 my-2.5 hover:bg-red-20/90'>
          <GoogleLightIcon className='mr-[11px]' /> Continue with Google
        </Button>
        <Button size='lg' className='bg-blue-90'>
          <FacebookLightIcon className='mr-[11px]' /> Continue with Facebook
        </Button>
      </form>
    </Form>
  )
}
