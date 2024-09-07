import { useRouter } from 'next/navigation'
import { UseFormSetError } from 'react-hook-form'
import { FormSchemaType } from '../lib/schema'
import { useSignIn } from '@clerk/nextjs'
import { signInAction } from '../actions/sign-in-action'
import { ROUTES } from '@/constants/routes'

export const useSignInSubmit = (setError: UseFormSetError<FormSchemaType>) => {
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignIn()

  const handleSubmit = async (data: FormSchemaType) => {
    if (!isLoaded || !signIn || !setActive) {
      return
    }

    try {
      const { success, identifier, password, errors } = await signInAction(data)

      if (!success || !identifier || !password) {
        // Set errors returned from the server
        Object.entries(errors as { [key: string]: string[] }).forEach(([key, value]) => {
          setError(key as keyof FormSchemaType, {
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
        router.push(ROUTES.DASHBOARD)
      } else {
        setError('root', {
          type: 'manual',
          message: 'Sign-in was not completed. Please try again.',
        })
      }
    } catch (err) {
      setError('root', {
        type: 'manual',
        message: 'An unexpected error occurred. Please try again.',
      })
    }
  }

  return {
    onSubmit: handleSubmit,
  }
}
