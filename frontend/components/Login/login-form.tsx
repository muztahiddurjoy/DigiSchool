"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

const LoginForm = () => {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    
  return (
    <Card className='min-w-[300px]'>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Fillup with your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <Label className='text-xs'>Email</Label>
        <Input value={email} onChange={e=> setemail(e.target.value)} placeholder='john@doe.com'/>
        <div className="mt-2"></div>
        <Label className='text-xs'>Password</Label>
        <Input className=''/>
      </CardContent>
      <CardFooter className='flex flex-col items-end'>
        <Button>Login</Button>
        <Dialog>
          <DialogTrigger className='text-sm mt-2'>Forgot Password?</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reset Password</DialogTitle>
              <DialogDescription className='pt-2'>
                Lorem ipsum dolor sit amet.
                <Input placeholder='random@gmail.com' className='mt-1'/>
                <div className='flex justify-end mt-2'>
                    <Button size="sm">Reset</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

export default LoginForm