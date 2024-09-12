import { Metadata } from 'next'
import { PORT, ROUTES } from '@/constants/routes'
import { PageHeader } from '@/components/sections/page-header'

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | Completed Schedule',
  description: 'Management Plans For Completed Schedule',
  keywords: ['completed schedule', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.COMPLETED}`,
    title: 'Square Dashboard | Completed Schedule',
    description: 'Management Plans For Completed Schedule',
    siteName: 'Square Dashboard Completed Schedule',
  },
  twitter: {
    title: 'Square Dashboard | Completed Schedule',
    description: 'Management Plans For Completed Schedule',
    card: 'summary',
  },
}

const CompletedSchedule = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Completed Schedule' />
    </div>
  )
}

export default CompletedSchedule
