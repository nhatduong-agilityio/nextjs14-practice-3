import * as React from 'react'
import { cn } from '@/lib/utils'

export const ActivityIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M12 5a1 1 0 0 1 1 1v5.51l4.114 3.2a1 1 0 0 1-1.228 1.58l-4.5-3.5A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1Z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z'
      clipRule='evenodd'
    />
  </svg>
)
