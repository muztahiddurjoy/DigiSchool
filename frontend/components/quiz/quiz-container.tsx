import React from 'react'
import QuizAdapter from './quiz-adapter'
import { Button } from '../ui/button'

const QuizContainer = () => {
  return (
    <div className='min-h-screen mt-10'>
        {Array(5).fill("_").map((v,i)=><QuizAdapter key={i}/>)}
        <div className="flex items-center justify-end mb-10">
          <Button>
            Submit
          </Button>
        </div>
    </div>
  )
}

export default QuizContainer