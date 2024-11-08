"use client"
import { apiUrl } from '@/components/Login/login-form';
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { log } from 'console';
import { Download } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const StudentProfileCard = () => {
  const [student,setStudent] = useState();
  useEffect(()=>{
    const studentId = window.localStorage.getItem("id_digi");
    axios.get(`${apiUrl}/student/${studentId}`).then(res=>{
      setStudent(res.data)
      console.log(res)
    })
  },[])

  const downloadId = ()=>{
    const studentId = window.localStorage.getItem("id_digi");
    window.location.href=`${apiUrl}/student/${studentId}/id-card`
  }
  return (
    <div className='bg-primary p-3 rounded-lg w-full flex gap-3 items-center'>
        <img src={student?.profileImage} className='h-[150px] w-[150px] object-cover rounded-full'/>
        <div>
            <p className="text-xl font-bold">{student?.name}</p>
            <p className="mt-1 text-sm">Grade {student?.enrolledIn}</p>
            <p className="mt-1 text-sm">ID : {student?.id}</p>
            <Button onClick={downloadId} variant="secondary" className='mt-3 text-black' size="sm"><Download size={15}/> Download ID Card</Button>
        </div>
    </div>
  )
}

export default StudentProfileCard