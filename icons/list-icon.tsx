import * as React from 'react'
import { cn } from '@/lib/utils'

export const ListIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    className={cn('text-icon-primary', className)}
    {...props}
  >
    <path
      fill='currentColor'
      d='M5 6h14a1 1 0 100-2H5a1 1 0 000 2zM5 20h14a1 1 0 100-2H5a1 1 0 100 2zM19 13H5a1 1 0 110-2h14a1 1 0 110 2z'
    />
  </svg>
)
