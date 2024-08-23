'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { EmailIcon } from '@/icons/email-icon'
import { ClockOutlineIcon } from '@/icons/clock-outline-icon'
import { Separator } from '../ui/separator'
import { Label } from '../ui/label'
import { Heading } from '../ui/heading'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'
import { GoogleLightIcon } from '@/icons/google-light-icon'
import { FacebookLightIcon } from '@/icons/facebook-light-icon'
import { Text } from '../ui/text'
import { WorldIcon } from '@/icons/world-icon'
import { UserIcon } from '@/icons/user-icon'

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

const FormSchema = z.object({
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
    message: 'Password must include uppercase, lowercase, number, and special character',
  }),
})

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: '',
      emailAddress: '',
      businessUrl: '',
      password: '',
    },
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data)
  }

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
        <Button size='lg' type='submit' className='bg-blue-20 h-50 mt-2.5'>
          Create an account
        </Button>
      </form>
    </Form>
  )
}
