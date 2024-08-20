'use client'

import * as React from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  // Handle submission of the sign-up form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isLoaded) return

    // Start the sign-up process using the email and password provided
    try {
      const sigUpnAttempt = await signUp.create({
        emailAddress,
        password,
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (sigUpnAttempt.status === 'complete') {
        await setActive({ session: sigUpnAttempt.createdSessionId })
        router.push('/')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(sigUpnAttempt, null, 2))
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  // Display the initial sign-up form to capture the email and password
  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Enter email address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Enter password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Next</button>
        </div>
      </form>
    </>
  )
}

export default SignUpPage
