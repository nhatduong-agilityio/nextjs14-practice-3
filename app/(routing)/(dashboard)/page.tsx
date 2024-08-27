'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { SignOutButton } from '@clerk/nextjs'

// Components
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Heading } from '@/components/ui/heading'
import { PageHeader } from '@/components/sections/page-header'
import { Text } from '@/components/ui/text'
import { CardContainer } from '@/components/sections/card-container'

const Dashboard = () => {
  const { setTheme } = useTheme()

  const renderToggleTheme = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <div className='flex h-full flex-col p-5 lg:p-10'>
      <PageHeader className='gap-2.5'>
        <Text variant='secondary' size='lg'>
          here’s your currently projects
        </Text>
      </PageHeader>

      <div className='w-full flex flex-col gap-5'>
        <CardContainer title='Team'></CardContainer>
        <CardContainer title='Projects'></CardContainer>
      </div>
    </div>
  )
}

export default Dashboard
