import * as React from 'react'
import { cn } from '@/lib/utils'

export const FilterIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M15 12.912V18a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-7.088L2.226 4.633A1 1 0 013 3h18a1 1 0 01.774 1.633L15 12.913zm-2 4.47v-4.826a1 1 0 01.226-.634L18.89 5H5.11l5.664 6.922a1 1 0 01.226.634v5.826l2-1z'
    />
  </svg>
)
