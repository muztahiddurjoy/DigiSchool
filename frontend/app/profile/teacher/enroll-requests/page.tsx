import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const EnrollRequests = () => {
  return (
    <div>
        <div className='px-10'>
        <Table className='w-full'>
        <TableCaption>A list of students who want to get enrolled to your school.</TableCaption>
          <TableHeader className='bg-primary '>
            <TableRow className='[&>*]:text-black'>
              <TableHead className=''>ID</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead> 
              <TableHead>Mark Obtained (Quiz)</TableHead> 
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="font-medium">{new Date().toLocaleDateString()}</TableCell>
              <TableCell>Donated to Random Student</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="flex items-center justify-end gap-2">2.00 BDT</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
    </div>
  )
}

export default EnrollRequests