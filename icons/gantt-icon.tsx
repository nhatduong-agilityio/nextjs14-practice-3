import * as React from 'react'
import { cn } from '@/lib/utils'

export const GanttIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M10 6h7a1 1 0 1 0 0-2h-7a1 1 0 0 0 0 2ZM9 20h10a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2ZM16 13H5a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2Z'
    />
  </svg>
)
