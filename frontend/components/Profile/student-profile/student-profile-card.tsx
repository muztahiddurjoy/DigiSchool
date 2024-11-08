import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import React from 'react'

const StudentProfileCard = () => {
  return (
    <div className='bg-primary p-3 rounded-lg w-full flex gap-3 items-center'>
        <img src="https://github.com/muztahiddurjoy.png" className='h-[150px] w-[150px] object-cover rounded-full'/>
        <div>
            <p className="text-xl font-bold">Muztahid Rahman</p>
            <p className="mt-1 text-sm">Grade 4</p>
            <p className="mt-1 text-sm">ID : Random</p>
            <Button variant="secondary" className='mt-3 text-black' size="sm"><Download size={15}/> Download ID Card</Button>
        </div>
    </div>
  )
}

export default StudentProfileCard