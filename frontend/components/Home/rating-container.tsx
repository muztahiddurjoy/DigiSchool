import React from 'react'
import RatingAdapter from './rating-adapter'

const RatingContainer = () => {
  return (
    <div className='py-10 px-20 bg-primary/30'>
      <p className='text-sm text-primary font-semibold'>Success Stories</p>
            <p className="text-3xl font-bold">Our Successful Students</p>
            <p className="text-gray-500 mt-2 text-sm">Student's Success Story</p>
            <div className="grid grid-cols-4 gap-3 mt-5">
              <RatingAdapter/>
              <RatingAdapter/>
              <RatingAdapter/>
              <RatingAdapter/>
            </div>
    </div>
  )
}

export default RatingContainer