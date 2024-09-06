import type { Metadata } from 'next'

// Components
import { DashboardLayout } from '@/components/layouts/dashboard-layout'

export const metadata: Metadata = {
  title: {
    template: '%s | Square Dashboard',
    default: 'Square Dashboard',
  },
  description: 'Square Dashboard App',
}

const Layout = ({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) => {
  return (
    <DashboardLayout>
      {children}
      {modal}
    </DashboardLayout>
  )
}

export default Layout
