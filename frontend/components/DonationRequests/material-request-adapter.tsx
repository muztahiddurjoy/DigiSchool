import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import SchoolAdapter from './school-adapter'
import { Book, BookOpen, Copy, Dot, HeartHandshake } from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'

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
      <Dialog>
          <DialogTrigger className={buttonVariants()}><HeartHandshake size={15}/> Donate</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How Much You Can Donate?</DialogTitle>
              <DialogDescription>
                <Input className='mt-5' placeholder='1000 BDT'/>
                <div className='flex justify-end mt-5'>
                  <Button size="sm">Donate</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

export default MaterialRequestAdapter