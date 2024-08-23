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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>
}
