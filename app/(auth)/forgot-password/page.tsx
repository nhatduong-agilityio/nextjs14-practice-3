import { Metadata } from 'next'
import { PORT, ROUTES } from '@/constants/routes'
import { PageHeader } from '@/components/sections/page-header'

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | Forgot Password',
  description: 'Control Password To Access Square Dashboard',
  keywords: ['forgot password', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.MESSAGES}`,
    title: 'Square Dashboard | Forgot Password',
    description: 'Control Password To Access Square Dashboard',
    siteName: 'Square Dashboard Forgot Password',
  },
  twitter: {
    title: 'Square Dashboard | Forgot Password',
    description: 'Control Password To Access Square Dashboard',
    card: 'summary',
  },
}

const ForgotPasswordPage = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Forgot Password' />
    </div>
  )
}

export default ForgotPasswordPage
