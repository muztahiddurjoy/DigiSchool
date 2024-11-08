"use client"
import SchoolAdapter from '@/components/DonationRequests/school-adapter'
import { apiUrl } from '@/components/Login/login-form'
import NearestSchoolAdapter from '@/components/nearest-schools/nearest-school-adapter'
import axios from 'axios'
import { log } from 'console'
import React, { useEffect, useState } from 'react'

const NearestDigiSchoolsPage = () => {
  const [schools,setSchools] = useState([])
  useEffect(()=>{
    axios.get(`${apiUrl}/school`).then((res)=>{
      console.log(res)
      setSchools(res.data)
    })
  },[])
  return (
    <div className='py-20 px-20'>
        <p className='text-sm text-primary font-semibold'>DigiSchools in Your Area</p>
        <p className="text-3xl font-bold">Get Into a DigiSchool</p>
    <div className=' grid grid-cols-4 gap-5 mt-10'>  
    {schools?.map((school,i)=><NearestSchoolAdapter key={i} name={school.name}/>)}
    </div>
    </div>
  )
}

export default NearestDigiSchoolsPage