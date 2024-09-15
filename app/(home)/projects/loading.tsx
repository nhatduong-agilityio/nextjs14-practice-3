import React from 'react'
import { Spinner } from '@/components/sections/spinner'

const Loading = () => (
  <section className='h-[50dvh] flex justify-center items-center'>
    <div className='flex flex-col max-w-96 gap-10'>
      <Spinner size={11} />
    </div>
  </section>
)

export default Loading
