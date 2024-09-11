import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export const MainNotFound = () => {
  return (
    <section className='h-[50dvh] flex justify-center items-center'>
      <div className='flex flex-col max-w-96 gap-10'>
        <Heading headingLevel='h2'>Not Found</Heading>
        <Text>Could not find requested resource</Text>
        <Link href='/'>Return Home</Link>
      </div>
    </section>
  )
}
