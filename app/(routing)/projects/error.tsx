'use client'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section>
      <Heading headingLevel='h2'>{error.message}</Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </section>
  )
}

export default Error
