import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { ChevronRight, Link } from 'lucide-react'
import { Button } from '../ui/button'

const TeacherRegister = () => {
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
            <Label>Completed Degree (Last)</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Degree" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SSC">SSC</SelectItem>
                <SelectItem value="HSC">HSC</SelectItem>
                <SelectItem value="Bsc./Hons">Bsc./Hons</SelectItem>
                <SelectItem value="Masters">Masters</SelectItem>
              </SelectContent>
            </Select>
        </div>
        <div>
            <Label>Subject (Optional)</Label>
            <Input type="text" placeholder='Subject'/>
        </div>
        <div>
            <Label>Certificates</Label> <br />
            <Button className='w-full'>
                <Link size={15}/>
                Attach
            </Button>
        </div>
        <div className="col-span-2 flex justify-end">
            <Button>Next <ChevronRight size={20}/> </Button>
        </div>
    </div>
  )
}

export default TeacherRegister