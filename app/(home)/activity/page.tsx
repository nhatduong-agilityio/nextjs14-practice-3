import { Metadata } from 'next'
import { PORT, ROUTES } from '@/constants/routes'
import { PageHeader } from '@/components/sections/page-header'

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | Activity',
  description: 'Management Plans For Activity',
  keywords: ['messages', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.ACTIVITY}`,
    title: 'Square Dashboard | Activity',
    description: 'Management Plans For Activity',
    siteName: 'Square Dashboard Activity',
  },
  twitter: {
    title: 'Square Dashboard | Activity',
    description: 'Management Plans For Activity',
    card: 'summary',
  },
}

const Activity = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Activity' />
    </div>
  )
}

export default Activity
