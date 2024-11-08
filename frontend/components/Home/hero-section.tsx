import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import heroImage from '@/public/hero_image.png'
const HeroSection = () => {
  return (
    <div className='min-h-screen w-full bg-primary/20 grid grid-cols-2 items-center md:px-10 lg:px-20'>
        <div>
            <p className="text-primary text-sm font-bold">Biggest Online School</p>
            <h1 className='text-[#252B42] mt-5 text-6xl font-extrabold uppercase'>Start Your School</h1>
            <p className="text-gray-500 text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sequi.</p>
            <div className="flex items-center gap-2 mt-3">
                <Button size="lg">As Student</Button>
                <Button size="lg" variant="outline">As Teacher</Button>
            </div>
        </div>
        <div>
            <Image src={heroImage} placeholder='blur' height={1000} width={1000} alt='DigiSchool'/>
        </div>
    </div>
  )
}

export default HeroSection