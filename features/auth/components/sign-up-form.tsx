'use client'

import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// Components
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { EmailIcon } from '@/icons/email-icon'
import { ClockOutlineIcon } from '@/icons/clock-outline-icon'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { WorldIcon } from '@/icons/world-icon'
import { UserIcon } from '@/icons/user-icon'

// Lib
import { SignUpFormSchema, SignUpFormSchemaType } from '../lib/schema'
import { useSignUp } from '../hooks/use-sign-up'
import { useToast } from '@/hooks/use-toast'

export const SignUpForm = () => {
  const { toast } = useToast()

  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      fullName: '',
      emailAddress: '',
      businessUrl: '',
      password: '',
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

  // If sign-up process is complete, set the created session as active
  // And redirect the user
  const { onSubmit } = useSignUp(setError, handleShowToast)

  return (
    <Form {...form}>
      <Heading headingLevel='h1' size='lg'>
        Create your Free Account
      </Heading>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col mt-[34px] gap-2.5'>
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your full name' icon={<UserIcon />} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='emailAddress'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email address' type='email' icon={<EmailIcon />} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='businessUrl'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business URL</FormLabel>
              <FormControl>
                <Input
                  placeholder='business name'
                  prefixLabel={
                    <Text size='md'>
                      circle.com<span className='text-input-foreground'>/</span>
                    </Text>
                  }
                  icon={<WorldIcon />}
                  {...field}
                />
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
        <Button size='lg' type='submit' className='bg-blue-20 h-50 mt-2.5' disabled={isSubmitting}>
          {isSubmitting ? 'Creating an account...' : 'Create an account'}
        </Button>
      </form>
    </Form>
  )
}
