import * as React from 'react'
import { cn } from '@/lib/utils'

export const MoreIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M7 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM21 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z'
      clipRule='evenodd'
    />
  </svg>
)
