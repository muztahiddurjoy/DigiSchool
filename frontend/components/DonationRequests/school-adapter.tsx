import { MapPin, User2 } from 'lucide-react'
import { Graduate } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const SchoolAdapter = () => {
  return (
    <div className='border border-primary/50 rounded-lg p-3 flex mt-2 gap-2'>
        <Image src="/nigga_1.jpg" height={200} width={200} alt='School Logo' className='h-[70px] w-[70px] object-cover rounded-lg'/>
        <div>
            <p className="font-semibold text-sm">School Name</p>
            <p className="text-xs flex items-center mt-1 text-primary font-medium gap-2"><MapPin size={15}/> Location</p>
            <p className="text-xs flex items-center mt-1 text-primary font-medium gap-2"><User2 size={15}/> 100 Students</p>
        </div>
    </div>
  )
}

export default SchoolAdapter