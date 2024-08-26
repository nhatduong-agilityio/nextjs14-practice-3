'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { BrandIcon } from '@/icons/brand-icon'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { GanttIcon } from '@/icons/gantt-icon'
import { NotificationIcon } from '@/icons/notification-icon'
import { PlusIcon } from '@/icons/plus-icon'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { SearchInput } from '../ui/search-input'
import { NavLinks } from './nav-links'

export const Header = () => {
  return (
    <header className='w-full sticky top-0 left-0 py-4 px-5 flex items-center justify-between bg-card z-10 border-b border-separator'>
      <BrandIcon />

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
        <SearchInput />

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
