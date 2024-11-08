"use client"
import React from 'react'
import QuizAdapter from './quiz-adapter'
import { Button } from '../ui/button'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { apiUrl } from '../Login/login-form'

const QuizContainer = ({id}:{id:string}) => {
  
  const {toast} = useToast()
  return (
    <div className='min-h-screen mt-10'>
        {Array(5).fill("_").map((v,i)=><QuizAdapter key={i}/>)}
        <div className="flex items-center justify-end mb-10">
          <Button onClick={e=>{
            axios.get(`${apiUrl}/school/${id}/enroll`,{
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("accessToken_digi")}`
              }
            }).then(()=>{
              window.location.href='/profile/student'
            })
          }}>
            Submit
          </Button>
        </div>
    </div>
  )
}

export default QuizContainer