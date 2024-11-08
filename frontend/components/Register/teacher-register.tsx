"use client"
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { ChevronRight, Link, X } from 'lucide-react'
import { Button } from '../ui/button'

const TeacherRegister = () => {
    const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [phone, setphone] = useState('')
  const [grade, setgrade] = useState('')
  const [subject, setsubject] = useState('')
  const [certificates, setcertificates] = useState<File[]>([])
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
            <Label>Completed Degree (Last)</Label>
            <Select onValueChange={e=> setgrade(e)}>
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
            <Input type="text" value={subject} onChange={e=> setsubject(e.target.value)} placeholder='Subject'/>
        </div>
        <div>
            <Label>Certificates</Label> <br />
            <Button className='w-full relative'>
                <Link size={15}/>
                Attach
                <input type="file" className='opacity-0 left-0 right-0 bottom-0 top-0 h-full w-full absolute' onChange={(e)=> setcertificates(p=> e.target && e.target.files?[...p,e.target.files[0]]:[...p])}/>
            </Button>
        </div>
        <div className="col-span-2 grid grid-cols-5 gap-2">
            {certificates.map((v,i)=><div className='border border-primary rounded-full text-xs p-2 flex items-center justify-between'>
                {String(v.name).substring(0,4)}...
                <X size={16} className='text-primary'/>
            </div>)}
        </div>
        <div className="col-span-2 flex justify-end">
            <Button>Next <ChevronRight size={20}/> </Button>
        </div>
    </div>
  )
}

export default TeacherRegister