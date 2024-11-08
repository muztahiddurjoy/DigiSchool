import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'

const DonorRegister = () => {
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
        <Label>Type</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual">Individual</SelectItem>
            <SelectItem value="individual">Company</SelectItem>
          </SelectContent>
        </Select>
    </div>
    <div className="col-span-2 flex justify-end">
        <Button>Next <ChevronRight size={20}/> </Button>
    </div>
</div>
  )
}

export default DonorRegister