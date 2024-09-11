import { useRouter } from 'next/navigation'
import { UseFormSetError } from 'react-hook-form'
import { SignUpFormSchemaType } from '../lib/schema'
import { useSignUp as useSignUpClerk } from '@clerk/nextjs'
import { ROUTES } from '@/constants/routes'
import { signUpAction } from '../actions/sign-up-action'

export const useSignUp = (
  setError: UseFormSetError<SignUpFormSchemaType>,
  onShowToast?: (title: string, message: string, variant?: 'default' | 'active' | 'destructive') => void,
) => {
  const router = useRouter()
  const { isLoaded, signUp, setActive } = useSignUpClerk()

  const handleSubmit = async (data: SignUpFormSchemaType) => {
    if (!isLoaded || !signUp || !setActive) {
      return
    }

    try {
      const { success, emailAddress, password, username, errors } = await signUpAction(data)

      if (!success || !emailAddress || !password || !username) {
        // Set errors returned from the server
        Object.entries(errors as { [key: string]: string[] }).forEach(([key, value]) => {
          setError(key as keyof SignUpFormSchemaType, {
            type: 'manual',
            message: Array.isArray(value) ? value[0] : value,
          })
        })
        return
      }

      const sigUpnAttempt = await signUp.create({
        emailAddress,
        password,
        username,
      })

      if (sigUpnAttempt.status === 'complete') {
        await setActive({ session: sigUpnAttempt.createdSessionId })
        onShowToast?.('Sign-up Success', `Welcome ${sigUpnAttempt.emailAddress}!`, 'active')
        router.push(ROUTES.DASHBOARD)
      } else {
        setError('root', {
          type: 'manual',
          message: JSON.stringify(sigUpnAttempt, null, 2) || 'Sign-up was not completed. Please try again.',
        })
        onShowToast?.(
          'Sign-up Failed',
          JSON.stringify(sigUpnAttempt, null, 2) || 'Sign-up was not completed. Please try again.',
          'destructive',
        )
      }
    } catch (err) {
      setError('root', {
        type: 'manual',
        message: 'An unexpected error occurred. Please try again.',
      })
      onShowToast?.('Sign-up Failed', 'An unexpected error occurred. Please try again.', 'destructive')
    }
  }

  return {
    onSubmit: handleSubmit,
  }
}
