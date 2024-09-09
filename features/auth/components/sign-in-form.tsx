'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

// Components
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { EmailIcon } from '@/icons/email-icon'
import { ClockOutlineIcon } from '@/icons/clock-outline-icon'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Heading } from '@/components/ui/heading'
import { Checkbox } from '@/components/ui/checkbox'
import { GoogleLightIcon } from '@/icons/google-light-icon'
import { FacebookLightIcon } from '@/icons/facebook-light-icon'

// Lib
import { SignInFormSchema, SignInFormSchemaType } from '../lib/schema'

// Actions
import { useSignIn } from '../hooks/use-sign-in'
import { useToast } from '@/hooks/use-toast'
import { useCallback } from 'react'

export const SignInForm = () => {
  const { toast } = useToast()

  const form = useForm<SignInFormSchemaType>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      emailOrUsername: '',
      password: '',
      rememberMe: false,
    },
  })
  const {
    setError,
    formState: { isSubmitting },
  } = form

  const handleShowToast = useCallback(
    (title: string, message: string, variant?: 'default' | 'active' | 'destructive') => {
      toast({
        variant,
        title,
        description: message,
      })
    },
    [toast],
  )

  // If sign-in process is complete, set the created session as active
  // And redirect the user
  const { onSubmit } = useSignIn(setError, handleShowToast)

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
        <Button size='lg' type='submit' className='bg-blue-20 h-50' disabled={isSubmitting}>
          {isSubmitting ? 'Signing In...' : 'Sign In'}
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
