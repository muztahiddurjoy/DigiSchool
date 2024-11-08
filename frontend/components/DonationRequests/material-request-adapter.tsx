import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import SchoolAdapter from './school-adapter'
import { Book, BookOpen, Copy, Dot } from 'lucide-react'
import { Button } from '../ui/button'

const MaterialRequestAdapter = () => {
  return (
    <Card>
      <CardContent className='py-5'>
        <p className='text-sm text-primary font-semibold'>School Details</p>
        <SchoolAdapter/>
        <p className="text-primary font-semibold mt-5 text-sm">Material Needed</p>
        <ul className='mt-2'>
            <li className='flex items-center gap-2'>
                <BookOpen size={20} className='text-primary'/>
                <p className='text-sm font-semibold'>100 Notebooks</p>
            </li>
        </ul>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button size="sm"><Copy size={16}/> Contact Details</Button>
      </CardFooter>
    </Card>
  )
}

export default MaterialRequestAdapter