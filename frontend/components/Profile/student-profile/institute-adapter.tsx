import { Card } from '@/components/ui/card'
import React from 'react'

const InstituteAdapter = () => {
  return (
    <Card className='rounded-lg my-2 p-3 flex items-center gap-3'>
        <img src="/nigga_1.jpg" className='h-[70px] w-[70px] rounded-md object-cover'/>
        <div>
            <p className='text-primary font-semibold'>Random School</p>
            <p className="text-gray-500 text-sm mt-2">2020-2023</p>
        </div>
    </Card>
  )
}

export default InstituteAdapter