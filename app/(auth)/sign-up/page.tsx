import { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'

// Constants
import { PORT, ROUTES } from '@/constants/routes'

// Features
import { SignUpForm } from '@/features/auth/components/sign-up-form'
import { Skeleton } from '@/components/ui/skeleton'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Sign Up | Square Dashboard',
  description: 'Sign Up To Access Square Dashboard',
  keywords: ['signin', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.SIGN_UP}`,
    title: 'Sign Up | Square Dashboard',
    description: 'Sign Up To Access Square Dashboard',
    siteName: 'Sign Up',
  },
  twitter: {
    title: 'Sign Up | Square Dashboard',
    description: 'Sign Up To Access Square Dashboard',
    card: 'summary',
  },
}

const SignUp = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <SignUpForm />
    </Suspense>
  )
}

export default SignUp
