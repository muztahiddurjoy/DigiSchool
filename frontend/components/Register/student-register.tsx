"use client"

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'

const StudentRegister = () => {
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [grade, setgrade] = useState('')
  const [phone, setphone] = useState('')
  
  return (
    <div className='grid grid-cols-2 gap-3'>
        <div>
            <Label>First Name</Label>
            <Input value={fname} onChange={e=> setfname(e.target.value)} placeholder='First Name'/>
        </div>
        <div>
            <Label>Last Name</Label>
            <Input value={lname} onChange={e=> setlname(e.target.value)} placeholder='Last Name'/>
        </div>
        <div className='col-span-2'>
            <Label>Email</Label>
            <Input value={email} onChange={e=> setemail(e.target.value)} type="email" placeholder='E-mail'/>
        </div>
        <div className='col-span-2'>
            <Label>Password</Label>
            <Input value={password} onChange={e=> setpassword(e.target.value)} placeholder='Password'/>
        </div>
        <div className='col-span-2'>
            <Label>Confirm Password</Label>
            <Input placeholder='Password'/>
        </div>
        <div>
            <Label>Phone</Label>
            <Input value={phone} onChange={e=> setphone(e.target.value)} type="tel" placeholder='Phone'/>
        </div>
        <div>
            <Label>Grade</Label>
            <Select onValueChange={e=> setgrade(e)}>
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