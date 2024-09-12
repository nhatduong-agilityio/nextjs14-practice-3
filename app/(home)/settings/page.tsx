import { Metadata } from 'next'
import { PORT, ROUTES } from '@/constants/routes'
import { Settings } from '@/components/sections/settings'

export const metadata: Metadata = {
  metadataBase: new URL(`${PORT}`),
  title: 'Square Dashboard | Settings',
  description: 'Management Plans For Settings',
  keywords: ['settings', 'square dashboard', 'nextjs'],
  openGraph: {
    type: 'website',
    url: `${PORT}${ROUTES.SETTINGS}`,
    title: 'Square Dashboard | Settings',
    description: 'Management Plans For Settings',
    siteName: 'Square Dashboard Settings',
  },
  twitter: {
    title: 'Square Dashboard | Settings',
    description: 'Management Plans For Settings',
    card: 'summary',
  },
}

const SettingsPage = () => {
  return <Settings />
}

export default SettingsPage
