import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button, buttonVariants } from '../ui/button'
import { Copy, HeartHandshake } from 'lucide-react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'

const SponsorStudentAdapter = () => {
  return (
    <Card>
      <CardHeader>
      <p className='text-sm text-primary font-semibold'>Students Details</p>
      <div className="flex gap-2 pt-3">
      <Image src="/register_bg.jpg" height={100} width={100} alt='Student' className='h-[70px] w-[70px] object-cover rounded-md'/>
      <div>
        <p className="font-semibold text-sm">Random Student</p>
        <p className='text-sm text-primary font-semibold'>Grade 4</p>
        
      </div>
      </div>
      </CardHeader>
      <CardContent>
        <p className='font-semibold text-sm text-primary'>Needed <span className='text-black'>2000 BDT/month</span></p>
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

export default SponsorStudentAdapter