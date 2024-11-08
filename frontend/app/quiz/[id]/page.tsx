"use client"
import QuizContainer from '@/components/quiz/quiz-container'
import { useToast } from '@/hooks/use-toast'
import { useParams } from 'next/navigation'
import React from 'react'

const QuizPage = () => {
  const params = useParams()
  return (
    <div className='pt-20 px-20'>
        <p className='text-sm text-primary font-semibold'>Evaluation</p>
        <p className="text-3xl font-bold">Complete The Quiz To Get Enrolled!</p>
        <QuizContainer id={String(params?.id)}/>  
    </div>
  )
}

export default QuizPage