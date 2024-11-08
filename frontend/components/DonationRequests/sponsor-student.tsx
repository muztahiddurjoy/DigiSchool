import React from 'react'
import SponsorStudentAdapter from './sponsor-student-adapter'

const SponsorStudent = () => {
  return (
    <div>
        <p className='text-sm text-primary font-semibold'>Sponsor</p>
        <p className="text-3xl font-bold">Save A Future</p>
        <div className="grid grid-cols-4 mt-5 gap-5">
            {Array(10).fill("").map((v,i)=><SponsorStudentAdapter key={i}/>)}
        </div>
    </div>
  )
}

export default SponsorStudent