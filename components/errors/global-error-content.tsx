import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'

export const GlobalErrorContent = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <html lang='en'>
      <body>
        <section className='h-[50dvh] flex justify-center items-center'>
          <div className='flex flex-col max-w-96 gap-10'>
            <Heading headingLevel='h2' className='capitalize'>
              {error.message}
            </Heading>
            <Button onClick={() => reset()}>Try again</Button>
          </div>
        </section>
      </body>
    </html>
  )
}
