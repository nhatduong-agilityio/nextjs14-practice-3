import { Metadata } from 'next'
import { PORT, ROUTES } from '@/constants/routes'
import { PageHeader } from '@/components/sections/page-header'

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | Schedule',
  description: 'Management Plans For Schedule',
  keywords: ['schedule', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.SCHEDULE}`,
    title: 'Square Dashboard | Schedule',
    description: 'Management Plans For Schedule',
    siteName: 'Square Dashboard Schedule',
  },
  twitter: {
    title: 'Square Dashboard | Schedule',
    description: 'Management Plans For Schedule',
    card: 'summary',
  },
}

const Schedule = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Schedule' />
    </div>
  )
}

export default Schedule
