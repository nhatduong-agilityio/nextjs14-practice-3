import React from 'react'
import { Header } from '../sections/header'
import { SideNav } from '../sections/side-nav'

export interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className='flex-1 bg-body min-h-dvh'>
      <Header />
      <div className='flex-1 min-h-[calc(100dvh-50px)] lg:min-h-[calc(100dvh-71px)] bg-background-secondary'>
        <aside className='hidden lg:block w-[250px] h-[calc(100dvh-50px)] lg:h-[calc(100dvh-70px)] bg-card fixed border-r border-separator'>
          <SideNav />
        </aside>
        <div className='flex-1 lg:ml-[250px]'>{children}</div>
      </div>
    </main>
  )
}
