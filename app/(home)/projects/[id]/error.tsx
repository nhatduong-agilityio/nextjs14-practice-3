'use client'

import { MainError } from '@/components/errors/main-error'

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => (
  <MainError error={error} reset={reset} />
)

export default Error
