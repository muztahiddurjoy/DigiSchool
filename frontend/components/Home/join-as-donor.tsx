import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const JoinAsDonor = () => {
  return (
    <div className='md:px-20 py-10'>
        <div className="rounded-xl border border-primary grid grid-cols-2 items-center">
        <div className='p-10'>
            <p className='text-sm text-primary font-semibold'>Be a Hero</p>
            <p className="text-3xl font-bold">Not All Heroes Wear Suits</p>
            <p className="text-gray-500 mt-2 text-sm">Sponsor a student or help with materials</p>
            <div className="flex mt-2 items-center gap-2">
                <Button>Sponsor Student</Button>
                <Button variant="outline">Donate Materials</Button>
            </div>
        </div>
        <div className="flex justify-end px-10">
            <Image src="/superman.jpeg" className='h-[400px] w-auto' height={1000} width={1000} alt='Superman'/>
        </div>
        
        </div>
    </div>
  )
}

export default JoinAsDonor