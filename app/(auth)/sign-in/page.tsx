import { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'

// Constants
import { PORT, ROUTES } from '@/constants/routes'

// Features
import { SignInForm } from '@/features/auth/components/sign-in-form'
import { Skeleton } from '@/components/ui/skeleton'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Sign In | Square Dashboard',
  description: 'Sign In To Access Square Dashboard',
  keywords: ['signin', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.SIGN_IN}`,
    title: 'Sign In | Square Dashboard',
    description: 'Sign In To Access Square Dashboard',
    siteName: 'Sign In',
  },
  twitter: {
    title: 'Sign In | Square Dashboard',
    description: 'Sign In To Access Square Dashboard',
    card: 'summary',
  },
}

const SignIn = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <SignInForm />
    </Suspense>
  )
}

export default SignIn
