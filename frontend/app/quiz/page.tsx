import QuizContainer from '@/components/quiz/quiz-container'
import React from 'react'

const QuizPage = () => {
  return (
    <div className='pt-20 px-20'>
        <p className='text-sm text-primary font-semibold'>Evaluation</p>
        <p className="text-3xl font-bold">Complete The Quiz To Get Enrolled!</p>
        <QuizContainer/>
    </div>
  )
}

export default QuizPage