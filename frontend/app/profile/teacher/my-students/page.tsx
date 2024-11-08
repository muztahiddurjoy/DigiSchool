import { Button, buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const MyStudents = () => {
  return (
        <div>
        <div className='px-10'>
            <div className="flex justify-end">
                <Input placeholder='Search' className='w-[200px] mb-5'/>
            </div>
        <Table className='w-full pt-5'>
        <TableCaption>A list of students who enrolled to your school.</TableCaption>
          <TableHeader className='bg-primary '>
            <TableRow className='[&>*]:text-black'>
              <TableHead className=''>ID</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead> 
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">000001</TableCell>
              <TableCell><img src="/register_bg.jpg" className='h-[50px] w-[50px] rounded-md object-cover'/></TableCell>
              <TableCell className="font-medium">New Student</TableCell>
              <TableCell>4</TableCell>
              <TableCell className="flex items-center justify-end gap-2">
                <Dialog>
                  <DialogTrigger className={buttonVariants({size:"sm"})}>Update Progress</DialogTrigger>
                  <DialogContent>
                    {/* <DialogHeader>
                      <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                      <DialogDescription>
                        Are you sure that you want to enroll that student in?
                        <div className="flex justify-end items-center gap-2 mt-5">
                            <Button size="sm">Enroll</Button>
                            <Button size="sm" variant="destructive">Cancel</Button>
                        </div>
                      </DialogDescription>
                    </DialogHeader> */}
                  </DialogContent>
                </Dialog>
                
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
    </div>
  )
}

export default MyStudents