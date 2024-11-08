import { School } from 'lucide-react'
import React from 'react'

interface BriefAdapterProps{
    title:string
    description:string
    icon:React.ReactNode
}

const BriefAdapter = (props:BriefAdapterProps) => {
  return (
    <div className='flex justify-center flex-col'>
            {props.icon}
            <p className='text-xl font-bold mt-2'>{props.title}</p>
        <div className='w-[40%] h-[3px] my-5 rounded-full bg-primary'></div>
        <p className="text-gray-500 text-sm">{props.description}</p>
    </div>
  )
}

export default BriefAdapter