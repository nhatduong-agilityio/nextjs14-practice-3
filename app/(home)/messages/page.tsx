import { Metadata } from 'next'
import { PORT, ROUTES } from '@/constants/routes'
import { PageHeader } from '@/components/sections/page-header'

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | Messages',
  description: 'Management Plans For Messages',
  keywords: ['messages', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.MESSAGES}`,
    title: 'Square Dashboard | Messages',
    description: 'Management Plans For Messages',
    siteName: 'Square Dashboard Messages',
  },
  twitter: {
    title: 'Square Dashboard | Messages',
    description: 'Management Plans For Messages',
    card: 'summary',
  },
}

const Messages = () => {
  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader title='Messages' />
    </div>
  )
}

export default Messages
