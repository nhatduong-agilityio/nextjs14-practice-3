'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

// Components
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { BrandIcon } from '@/icons/brand-icon'
import { GanttIcon } from '@/icons/gantt-icon'
import { NotificationIcon } from '@/icons/notification-icon'
import { PlusIcon } from '@/icons/plus-icon'
import { NavLinks } from './nav-links'
import { Button } from '../ui/button'
import { SearchInput } from '../ui/search-input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useDebounce } from '@/hooks/use-debounce'

export const Header = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('name') || '')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (debouncedSearchTerm) {
      params.set('name', debouncedSearchTerm)
    } else {
      params.delete('name')
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }, [debouncedSearchTerm, pathname, router, searchParams])

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }, [])

  return (
    <header className='w-full sticky top-0 left-0 py-4 px-5 flex items-center justify-between bg-card z-10 border-b border-separator'>
      <Link href='/' aria-label='brand-link'>
        <BrandIcon />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='lg:hidden'>
            <GanttIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <NavLinks />
        </SheetContent>
      </Sheet>
      <nav className='items-center gap-5 hidden lg:flex'>
        <SearchInput value={searchTerm} onChange={handleSearch} />
        <Button className='w-fit'>
          <PlusIcon className='mr-2 text-primary-foreground' /> New
        </Button>
        <Button size='text' variant='ghost'>
          <NotificationIcon className='hover:text-primary' />
        </Button>
        <Avatar size='sm'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  )
}
