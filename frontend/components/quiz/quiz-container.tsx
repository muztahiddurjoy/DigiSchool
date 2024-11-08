"use client"
import React from 'react'
import QuizAdapter from './quiz-adapter'
import { Button } from '../ui/button'
import { useToast } from '@/hooks/use-toast'

const QuizContainer = () => {
  
  const {toast} = useToast()
  return (
    <div className='min-h-screen mt-10'>
        {Array(5).fill("_").map((v,i)=><QuizAdapter key={i}/>)}
        <div className="flex items-center justify-end mb-10">
          <Button onClick={e=>{
            toast({
              title:'Submitted!',
              description:'thanks for completing the quiz. The School will review the result'
            })
          }}>
            Submit
          </Button>
        </div>
    </div>
  )
}

export default QuizContainer