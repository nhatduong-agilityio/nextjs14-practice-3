import { memo, ReactNode } from 'react'
import { Header } from '../sections/header'
import { SideNav } from '../sections/side-nav'

interface DashboardLayoutProps {
  children: ReactNode
}

export const DashboardLayout = memo(({ children }: DashboardLayoutProps) => (
  <main className='flex-1 bg-body min-h-dvh' data-testid='dashboard-layout'>
    <Header data-testid='dashboard-header' />
    <div
      className='flex-1 min-h-[calc(100dvh-50px)] lg:min-h-[calc(100dvh-71px)] bg-background-secondary'
      data-testid='dashboard-main-content'
    >
      <aside
        className='hidden lg:block w-[250px] h-[calc(100dvh-50px)] lg:h-[calc(100dvh-70px)] bg-card fixed border-r border-separator'
        data-testid='dashboard-sidenav'
      >
        <SideNav data-testid='dashboard-header-content' />
      </aside>
      <div className='flex-1 lg:ml-[250px]' data-testid='dashboard-children'>
        {children}
      </div>
    </div>
  </main>
))
DashboardLayout.displayName = 'DashboardLayout'
