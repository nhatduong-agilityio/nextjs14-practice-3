import * as React from 'react'
import { cn } from '@/lib/utils'

export const KanBanIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M6 15V5a1 1 0 10-2 0v10a1 1 0 102 0zM20 12V5a1 1 0 10-2 0v7a1 1 0 102 0zM13 5v14a1 1 0 11-2 0V5a1 1 0 112 0z'
    />
  </svg>
)
