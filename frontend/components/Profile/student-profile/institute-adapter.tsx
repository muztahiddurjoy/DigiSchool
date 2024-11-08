"use client"
import { apiUrl } from '@/components/Login/login-form';
import { Card } from '@/components/ui/card'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const InstituteAdapter = () => {

const [student ,setStudent] = useState();
useEffect(()=>{
  const studentId = window.localStorage.getItem("id_digi");
  axios.get(`${apiUrl}/student/${studentId}`).then(res=>{
    setStudent(res.data)
    console.log(res)
  })
},[])
  return (
    <Card className='rounded-lg my-2 p-3 flex items-center gap-3'>
        <img src="/school.jpg" className='h-[70px] w-[70px] rounded-md object-cover'/>
        <div>
            <p className='text-primary font-semibold'>{student?.school?.name}</p>
            <p className="text-gray-500 text-sm mt-2">2020-Present</p>
        </div>
    </Card>
  )
}

export default InstituteAdapter