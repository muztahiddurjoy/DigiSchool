import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { MapPin, Paperclip } from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const NearestSchoolAdapter = (props: {name:string,id: string} ) => {
  return (
    <Card>
      <CardHeader>
        <Image src="/school.jpg" height={200} width={300} className='w-[300px] h-[200px] rounded-md object-cover' alt=''/>
        <CardTitle className='font-bold mt-10'>{props.name}</CardTitle>
        <CardDescription className='flex items-center'>
            <MapPin size={20} className='text-primary font-semibold'/>
            Mohammadpur, Dhaka
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p className='text-sm'>Card Content</p>
      </CardContent> */}
      <CardFooter className='flex items-center justify-end'>
        <Link href={`/quiz/${props.id}`} className={buttonVariants({size:'sm'})}><Paperclip size={20}/> Apply</Link>
      </CardFooter>
    </Card>
  )
}

export default NearestSchoolAdapter