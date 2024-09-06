import * as React from 'react'
import { cn } from '@/utils/cn'

export const DashboardIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M7 12H6a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4Zm-3 4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2ZM9 5.5a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0v-1Zm-5 0a1.5 1.5 0 1 1 3 0v1a1.5 1.5 0 1 1-3 0v-1ZM18 11h-1a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-3a4 4 0 0 0-4-4Zm-3 4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3ZM18.5 2h-4a3.5 3.5 0 1 0 0 7h4a3.5 3.5 0 1 0 0-7ZM13 5.5A1.5 1.5 0 0 1 14.5 4h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 13 5.5Z'
      clipRule='evenodd'
    />
  </svg>
)
