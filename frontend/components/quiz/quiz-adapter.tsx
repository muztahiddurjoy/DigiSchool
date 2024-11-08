import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const QuizAdapter = () => {
  return (
    <Card className='my-5'>
      <CardHeader>
        <CardTitle>Sample Question 1</CardTitle>
        <CardDescription>
            <RadioGroup className='mt-5'>
              {Array(4).fill("_").map((_,i)=>{
                  const adapterKey = Math.floor(Math.random()*1000)
                  return <div className="flex items-center space-x-2" key={i}>
                  <RadioGroupItem value={String(adapterKey)} id={String(adapterKey)} />
                  <Label htmlFor={String(adapterKey)}>Option {i}</Label>
            </div>
              })}
              
            </RadioGroup>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default QuizAdapter