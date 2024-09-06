import type { Metadata } from 'next'

import { AuthLayout } from '@/components/layouts/auth-layout'

export const metadata: Metadata = {
  title: {
    template: '%s | Square Dashboard Authentication',
    default: 'Square Dashboard Authentication',
  },
  description: 'Square Dashboard App Authentication',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>
}

export default Layout
