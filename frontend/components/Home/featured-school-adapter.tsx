import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { MapPin, School, School2 } from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedSchoolAdapter = () => {
  return (
    <Card>
      <CardHeader>
      <Image src="/school.jpg" height={200} width={300} className='w-[300px] h-[200px] rounded-md object-cover' alt=''/>
        <CardTitle className='font-bold pt-5'>Random School</CardTitle>
        <CardDescription className='flex items-center'>
            <MapPin size={20} className='text-primary font-semibold'/>
            Mohammadpur, Dhaka
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p className='text-sm'>Card Content</p>
      </CardContent> */}
      <CardFooter className='flex items-center justify-end'>
        <Link href="/" className={buttonVariants({size:'sm'})}><School2 size={20}/> Apply</Link>
      </CardFooter>
    </Card>
  )
}

export default FeaturedSchoolAdapter