import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export const MainNotFound = () => {
  return (
    <section>
      <Heading headingLevel='h2'>Not Found</Heading>
      <Text>Could not find requested resource</Text>
      <Link href='/'>Return Home</Link>
    </section>
  )
}
