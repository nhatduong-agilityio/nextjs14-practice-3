import { useRouter } from 'next/navigation'
import { UseFormSetError } from 'react-hook-form'
import { SignInFormSchemaType } from '../lib/schema'
import { useSignIn as useSignInClerk } from '@clerk/nextjs'
import { signInAction } from '../actions/sign-in-action'
import { ROUTES } from '@/constants/routes'

export const useSignIn = (
  setError: UseFormSetError<SignInFormSchemaType>,
  onShowToast?: (title: string, message: string, variant?: 'default' | 'active' | 'destructive') => void,
) => {
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignInClerk()

  const handleSubmit = async (data: SignInFormSchemaType) => {
    if (!isLoaded || !signIn || !setActive) {
      return
    }

    try {
      const { success, identifier, password, errors } = await signInAction(data)

      if (!success || !identifier || !password) {
        // Set errors returned from the server
        Object.entries(errors as { [key: string]: string[] }).forEach(([key, value]) => {
          setError(key as keyof SignInFormSchemaType, {
            type: 'manual',
            message: Array.isArray(value) ? value[0] : value,
          })
        })
        return
      }

      const signInAttempt = await signIn.create({
        identifier,
        password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        onShowToast?.('Sign-in Success', `Welcome back ${identifier}!`, 'active')
        router.push(ROUTES.DASHBOARD)
      } else {
        setError('root', {
          type: 'manual',
          message: 'Sign-in was not completed. Please try again.',
        })
        onShowToast?.('Sign-in Failed', 'Sign-in was not completed. Please try again.', 'destructive')
      }
    } catch (err) {
      setError('root', {
        type: 'manual',
        message: 'An unexpected error occurred. Please try again.',
      })
      onShowToast?.('Sign-in Failed', 'An unexpected error occurred. Please try again.', 'destructive')
    }
  }

  return {
    onSubmit: handleSubmit,
  }
}
