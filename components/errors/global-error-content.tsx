import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'

export const GlobalErrorContent = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <html lang='en'>
      <body>
        <section>
          <Heading headingLevel='h2'>{error.message}</Heading>
          <Button onClick={() => reset()}>Try again</Button>
        </section>
      </body>
    </html>
  )
}
