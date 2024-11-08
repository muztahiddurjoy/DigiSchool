import React from 'react'
import FeaturedSchoolAdapter from './featured-school-adapter'

const FeaturedSchools = () => {
  return (
    <div className='py-10 px-20'>
        <p className='text-sm text-primary font-bold'>Featured Schools</p>
        <p className="text-4xl font-bold mt-3">Top DigiSchools</p>
        <div className="grid mt-5 grid-cols-4 gap-3">
            <FeaturedSchoolAdapter/>
            <FeaturedSchoolAdapter/>
            <FeaturedSchoolAdapter/>
            <FeaturedSchoolAdapter/>
        </div>
    </div>
  )
}

export default FeaturedSchools