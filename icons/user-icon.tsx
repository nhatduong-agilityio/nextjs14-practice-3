import * as React from 'react'
import { cn } from '@/utils/cn'

export const UserIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M7.77 7.824C7.77 5.16 9.886 3 12.5 3c2.613 0 4.73 2.16 4.73 4.824a4.844 4.844 0 0 1-2.103 4.011C17.974 12.921 20 15.72 20 19v2H5v-2c0-3.28 2.026-6.08 4.873-7.165a4.844 4.844 0 0 1-2.104-4.011Zm4.73 2.705c1.466 0 2.654-1.211 2.654-2.705 0-1.495-1.188-2.706-2.654-2.706S9.846 6.329 9.846 7.824c0 1.494 1.188 2.705 2.654 2.705Zm0 2.942c-2.957 0-5.36 2.412-5.422 5.411h10.844c-.062-3-2.466-5.411-5.422-5.411Z'
      clipRule='evenodd'
    />
  </svg>
)
