import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'
import React from 'react'

const EnrollStudentPage = () => {
  return (
    <div className='px-20'>
        <Label>Student ID , Phone , Email</Label>
        <div className="flex items-end mt-3">
        <Input className='w-full h-[50px] rounded-r-none' placeholder='xxxx-xxxx-xxxx-xxxx'/>
        <Button className='rounded-l-none h-[50px]'><Search size={15}/> Search</Button>
        </div>
        
    </div>
  )
}

export default EnrollStudentPage