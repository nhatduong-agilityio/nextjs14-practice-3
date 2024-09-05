import * as React from 'react'
import { cn } from '@/lib/utils'

export const DescriptionIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 5h16a1 1 0 100-2H4a1 1 0 000 2zM4 10h16a1 1 0 100-2H4a1 1 0 000 2zM4 15h16a1 1 0 100-2H4a1 1 0 100 2zM4 20h10a1 1 0 100-2H4a1 1 0 100 2z'
    />
  </svg>
)
