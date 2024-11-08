import AcademicResults from '@/components/Profile/student-profile/academic-results'
import Institutes from '@/components/Profile/student-profile/institutes'
import StudentProfileCard from '@/components/Profile/student-profile/student-profile-card'
import React from 'react'

const StudentProfilePage = () => {
  return (
    <div className='p-5 grid grid-cols-2 gap-3 w-full'>
        <StudentProfileCard/>
        <Institutes/>
        <div className='col-span-2'>
            <AcademicResults/>
        </div>
    </div>
  )
}

export default StudentProfilePage