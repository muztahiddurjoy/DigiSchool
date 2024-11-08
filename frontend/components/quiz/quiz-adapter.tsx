import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const QuizAdapter = () => {
  return (
    <Card className='my-5'>
      <CardHeader>
        <CardTitle>Is This Question?</CardTitle>
        <CardDescription>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default QuizAdapter