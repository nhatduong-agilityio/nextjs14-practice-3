import { Metadata } from 'next'
import { PORT, ROUTES } from '@/constants/routes'
import { PageHeader } from '@/components/sections/page-header'

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | Pending Schedule',
  description: 'Management Plans For Pending Schedule',
  keywords: ['pending schedule', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.PENDING}`,
    title: 'Square Dashboard | Pending Schedule',
    description: 'Management Plans For Pending Schedule',
    siteName: 'Square Dashboard Pending Schedule',
  },
  twitter: {
    title: 'Square Dashboard | Pending Schedule',
    description: 'Management Plans For Pending Schedule',
    card: 'summary',
  },
}

const PendingSchedule = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Pending Schedule' />
    </div>
  )
}

export default PendingSchedule
