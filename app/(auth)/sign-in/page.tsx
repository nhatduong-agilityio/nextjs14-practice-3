import * as React from 'react'

// Features
import { SignInForm } from '@/features/auth/components/sign-in-form'

const SignInPage = () => {
  return (
    <div className='flex flex-col sm:min-w-[506px] pt-2.5 px-2.5 overflow-y-scroll no-scrollbar'>
      <SignInForm />
    </div>
  )
}

export default SignInPage
