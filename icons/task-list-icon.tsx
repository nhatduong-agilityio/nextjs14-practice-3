import * as React from 'react'
import { cn } from '@/utils/cn'

export const TaskListIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M12.257 13.474l7.958-10.093a1 1 0 111.57 1.238l-8.672 11a1 1 0 01-1.51.07l-4.328-4.555a1 1 0 011.45-1.377l3.532 3.717zM20 11.1a1 1 0 112 0v7.2a3.7 3.7 0 01-3.7 3.7H5.7A3.7 3.7 0 012 18.3V5.7A3.7 3.7 0 015.7 2h10.7a1 1 0 110 2H5.7A1.7 1.7 0 004 5.7v12.6A1.7 1.7 0 005.7 20h12.6a1.7 1.7 0 001.7-1.7v-7.2z'
    />
  </svg>
)
