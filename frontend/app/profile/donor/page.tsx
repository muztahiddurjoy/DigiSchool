import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const DonorProfile = () => {
  return (
    <div className='px-10'>
        <Table className='w-full'>
          <TableCaption>A list of your transactions.</TableCaption>
          <TableHeader className='bg-primary '>
            <TableRow className='[&>*]:text-black'>
              <TableHead className=''>Transaction ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Purpose</TableHead>
              <TableHead>Method</TableHead> 
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="font-medium">{new Date().toLocaleDateString()}</TableCell>
              <TableCell>Donated to Random Student</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">2.00 BDT</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
  )
}

export default DonorProfile