'use client'

import { MainError } from '@/components/errors/main-error'

const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => (
  <html lang='en'>
    <body>
      <MainError error={error} reset={reset} />
    </body>
  </html>
)

export default GlobalError
