import React from 'react'
import QuizAdapter from './quiz-adapter'

const QuizContainer = () => {
  return (
    <div className='min-h-screen mt-10'>
        {Array(10).fill("_").map((v,i)=><QuizAdapter key={i}/>)}
    </div>
  )
}

export default QuizContainer