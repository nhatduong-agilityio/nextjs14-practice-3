'use client'

import { GlobalErrorContent } from '@/components/errors/global-error-content'

const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => (
  <GlobalErrorContent error={error} reset={reset} />
)

export default GlobalError
