import SchoolAdapter from '@/components/DonationRequests/school-adapter'
import NearestSchoolAdapter from '@/components/nearest-schools/nearest-school-adapter'
import React from 'react'

const NearestDigiSchoolsPage = () => {
  return (
    <div className='py-20 px-20'>
        <p className='text-sm text-primary font-semibold'>DigiSchools in Your Area</p>
        <p className="text-3xl font-bold">Get Into a DigiSchool</p>
    <div className=' grid grid-cols-4 gap-5 mt-10'>  
    {Array(10).fill("_").map((_,i)=><NearestSchoolAdapter key={i}/>)}
    </div>
    </div>
  )
}

export default NearestDigiSchoolsPage