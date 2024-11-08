import React from 'react'
import InstituteAdapter from './institute-adapter'
import { ScrollArea } from '@/components/ui/scroll-area'

const Institutes = () => {
  return (
    <ScrollArea className='h-[30vh] pr-3'>
        <h1 className='text-xl font-bold text-primary text-right'>Institutes</h1>
        <div className='mt-5'>
            {Array(5).fill("").map((v,i)=><InstituteAdapter/>)}
        </div>
    </ScrollArea>
  )
}

export default Institutes