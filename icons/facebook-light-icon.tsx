import * as React from 'react'
import { cn } from '@/utils/cn'

export const FacebookLightIcon = ({ ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' {...props}>
    <path
      fill='#fff'
      d='M15.042 15.92a.879.879 0 0 0 .879-.878V.88A.879.879 0 0 0 15.042 0H.88A.879.879 0 0 0 0 .879v14.163c0 .485.393.879.879.879h14.163Z'
    />
    <path
      fill='#0062FF'
      d='M10.985 15.92V9.756h2.07l.31-2.402h-2.38V5.819c0-.696.193-1.17 1.19-1.17h1.273v-2.15c-.22-.029-.975-.094-1.854-.094-1.834 0-3.09 1.12-3.09 3.176v1.772H6.429v2.402h2.075v6.166h2.481Z'
    />
  </svg>
)
