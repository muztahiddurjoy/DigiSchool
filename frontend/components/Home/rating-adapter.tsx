import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const RatingAdapter = () => {
  return (
    <div className='border border-primary/30 transition-colors ease-in-out duration-150 hover:border-primary rounded-xl p-5 flex flex-col items-center justify-center'>
        <Avatar className='h-[70px] w-[70px]'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-center font-semibold mt-2">Random Name</p>
        <p className="text-xs text-gray-500 text-center">SSC 2021</p>
        <p className="italic mt-3 text-sm text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur et id, vitae aliquam explicabo nam qui! Molestiae deserunt tempora eligendi at quasi, eaque facere nulla sed libero modi, perferendis sequi!</p>
    </div>
  )
}

export default RatingAdapter