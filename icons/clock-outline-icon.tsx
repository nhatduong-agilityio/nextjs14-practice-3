import * as React from 'react'
import { cn } from '@/lib/utils'

export const ClockOutlineIcon = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
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
      d='M7.026 8.924v-1.83C7.026 4.284 9.28 2 12.07 2c2.79 0 5.045 2.284 5.045 5.094v1.83h1.428c.812 0 1.457.666 1.457 1.472v10.132c0 .806-.645 1.472-1.457 1.472H5.457A1.464 1.464 0 0 1 4 20.528V10.396c0-.806.645-1.472 1.457-1.472h1.569Zm-1.203 1.818v9.44h12.354v-9.44H5.823Zm9.47-1.846V7.094c0-1.812-1.446-3.276-3.223-3.276-1.776 0-3.222 1.464-3.222 3.276v1.802h6.445Z'
      clipRule='evenodd'
    />
  </svg>
)
