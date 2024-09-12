import { Metadata } from 'next'
import { PORT, ROUTES } from '@/constants/routes'
import { PageHeader } from '@/components/sections/page-header'

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | In Progress Schedule',
  description: 'Management Plans For In Progress Schedule',
  keywords: ['inprogress schedule', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.IN_PROGRESS}`,
    title: 'Square Dashboard | In Progress Schedule',
    description: 'Management Plans For In Progress Schedule',
    siteName: 'Square Dashboard In Progress Schedule',
  },
  twitter: {
    title: 'Square Dashboard | In Progress Schedule',
    description: 'Management Plans For In Progress Schedule',
    card: 'summary',
  },
}

const InProgressSchedule = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='In Progress Schedule' />
    </div>
  )
}

export default InProgressSchedule
