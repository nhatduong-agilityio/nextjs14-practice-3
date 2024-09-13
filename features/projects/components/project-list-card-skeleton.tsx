import { CardContainer } from '@/components/sections/card-container'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const ProjectListCardSkeleton = () => {
  return (
    <CardContainer title='Projects'>
      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 lg:gap-30'>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className='w-full'>
            <CardHeader className='flex justify-between items-start'>
              <Skeleton className='h-6 w-3/4' />
              <Skeleton className='h-4 w-4 rounded-full' />
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <div className='flex gap-2'>
                <Skeleton className='h-6 w-20' />
                <Skeleton className='h-6 w-24' />
              </div>
              <Skeleton className='h-2 w-full' />
            </CardContent>
            <CardFooter className='flex gap-2'>
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className='h-8 w-8 rounded-full' />
              ))}
            </CardFooter>
          </Card>
        ))}
        <Skeleton className='h-[237px] w-full' /> {/* AddNewCard skeleton */}
      </div>
    </CardContainer>
  )
}
