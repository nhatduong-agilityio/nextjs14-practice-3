import Link from 'next/link'

import { SheetClose } from './sheet'
import { Separator } from './separator'
import { Text } from './text'
import { cn } from '@/lib/utils'
import React from 'react'
import { ChevronUpIcon } from '@/icons/chevron-up-icon'
import { ChevronDownIcon } from '@/icons/chevron-down-icon'

export interface NavItemProps {
  isActive?: boolean
  isSubItem?: boolean
  hasSubItem?: boolean
  icon?: JSX.Element
  suffixContent?: JSX.Element
  label: string
  url: string
}

export const NavItem = ({
  isActive = false,
  isSubItem = false,
  hasSubItem = false,
  icon,
  suffixContent,
  label,
  url,
}: NavItemProps) => {
  const Icon =
    icon &&
    React.cloneElement<React.SVGAttributes<SVGSVGElement>>(icon, {
      className: cn(isActive && 'text-text-link-selected', icon.props.className),
    })

  return (
    <SheetClose asChild>
      <Link
        href={url}
        className={cn(
          'h-[52px] w-full flex justify-between items-center py-2.5',
          isActive && !isSubItem ? 'pr-5' : 'px-5',
        )}
      >
        <div className='h-full flex justify-between items-center'>
          {isActive && !isSubItem && (
            <Separator orientation='vertical' className='w-[3px] rounded-e-xl bg-text-link-selected mr-[17px]' />
          )}
          {Icon}
          <Text
            variant='link'
            className={cn(
              'text-text-link ml-5',
              isSubItem && 'font-normal',
              isActive && 'text-text-link-selected font-semibold animate-fade-in-right',
            )}
          >
            {label}
          </Text>
        </div>

        {hasSubItem && (isActive ? <ChevronUpIcon /> : <ChevronDownIcon />)}
        {suffixContent}
      </Link>
    </SheetClose>
  )
}
