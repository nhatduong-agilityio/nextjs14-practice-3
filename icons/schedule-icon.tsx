import * as React from 'react'
import { cn } from '@/lib/utils'

export const ScheduleIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M17 4V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v10a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6V7a3 3 0 0 1 3-3h2V3a1 1 0 0 1 2 0v1h9ZM3 10h18V7a1 1 0 0 0-1-1h-1a1 1 0 1 1-2 0H8a1 1 0 0 1-2 0H4a1 1 0 0 0-1 1v3Zm0 2v5a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-5H3Z'
      clipRule='evenodd'
    />
  </svg>
)
