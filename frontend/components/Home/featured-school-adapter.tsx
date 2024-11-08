import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Link, MapPin, School, School2 } from 'lucide-react'
import { Button } from '../ui/button'

const FeaturedSchoolAdapter = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='font-bold'>Random School</CardTitle>
        <CardDescription className='flex items-center'>
            <MapPin size={20} className='text-primary font-semibold'/>
            Mohammadpur, Dhaka
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p className='text-sm'>Card Content</p>
      </CardContent> */}
      <CardFooter className='flex items-center justify-end'>
        <Button size="sm"><School2 size={20}/> Visit</Button>
      </CardFooter>
    </Card>
  )
}

export default FeaturedSchoolAdapter