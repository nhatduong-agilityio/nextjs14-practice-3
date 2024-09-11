// Components
import { DashboardLayout } from '@/components/layouts/dashboard-layout'

const Layout = ({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) => {
  return (
    <DashboardLayout>
      {children}
      {modal}
    </DashboardLayout>
  )
}

export default Layout
