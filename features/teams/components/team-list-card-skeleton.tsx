import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const TeamListCardSkeleton = () => {
  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <Skeleton className='h-5 w-1/4' />
        <Skeleton className='h-4 w-4' />
      </CardHeader>
      <CardContent className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className='h-[120px] w-full' />
        ))}
      </CardContent>
    </Card>
  )
}
