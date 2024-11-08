import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const SetupSchoolForm = () => {
  return (
    <div className='px-20 py-20'>
        <p className='text-sm text-primary font-semibold'>Setup Your School</p>
        <p className="text-3xl font-bold">FillUp The Form</p>
        <div className="mt-10 grid grid-cols-3 gap-3 px-20">
            <div className="">
                <Label>School Name</Label>
                <Input placeholder='Random School'/>
            </div>
            <div className="">
                <Label>School Address</Label>
                <Input placeholder='Humayun Road, Dhaka'/>
            </div>
            <div className="">
                <Label>Licence No.</Label>
                <Input placeholder='xxxxxx'/>
            </div>
            <div className="">
                <Label>Contact Number</Label>
                <Input placeholder='880'/>
            </div>
            <div className="">
                <Label>Email</Label>
                <Input placeholder='random@gmail.com'/>
            </div>
            <div className="">
                <Label>Logo</Label>
                <Input type='file' placeholder='Random School'/>
            </div>
            <div className="">
                <Label>License 1</Label>
                <Input type="file" placeholder='Random School'/>
            </div>
            <div className="">
                <Label>License 2</Label>
                <Input type="file" placeholder='Random School'/>
            </div>
            <div className="flex items-end">
                <Button className='w-full'>Apply</Button>
            </div>
        </div>
    </div>
  )
}

export default SetupSchoolForm