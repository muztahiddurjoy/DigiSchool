import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'

const StudentRegister = () => {
  return (
    <div className='grid grid-cols-2 gap-3'>
        <div>
            <Label>First Name</Label>
            <Input placeholder='First Name'/>
        </div>
        <div>
            <Label>First Name</Label>
            <Input placeholder='Last Name'/>
        </div>
        <div className='col-span-2'>
            <Label>Email</Label>
            <Input type="email" placeholder='E-mail'/>
        </div>
        <div className='col-span-2'>
            <Label>Password</Label>
            <Input placeholder='Password'/>
        </div>
        <div className='col-span-2'>
            <Label>Confirm Password</Label>
            <Input placeholder='Password'/>
        </div>
        <div>
            <Label>Phone</Label>
            <Input type="tel" placeholder='Phone'/>
        </div>
        <div>
            <Label>Grade</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                {Array(10).fill("_").map((_,i)=><SelectItem value={String(i+1)} key={i}>{i+1}</SelectItem>)}
              </SelectContent>
            </Select>
        </div>
        <div className="col-span-2 flex justify-end">
            <Button>Next <ChevronRight size={20}/> </Button>
        </div>
    </div>
  )
}

export default StudentRegister