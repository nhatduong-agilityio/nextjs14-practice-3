import * as React from 'react'
import { cn } from '@/lib/utils'

export const MessagesIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    className={cn('text-icon-primary', className)}
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M21.783 22.976a1 1 0 0 0 1.193-1.193l-1.097-4.94A10.959 10.959 0 0 0 23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11c1.702 0 3.35-.388 4.844-1.121l4.94 1.097Zm-1.84-6.739a1 1 0 0 0-.095.689l.835 3.757-3.757-.835a1 1 0 0 0-.689.094A8.955 8.955 0 0 1 12 21a9 9 0 1 1 9-9c0 1.5-.366 2.945-1.058 4.237Z'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M9 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
      clipRule='evenodd'
    />
  </svg>
)
