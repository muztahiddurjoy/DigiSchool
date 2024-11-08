import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import DonorRegister from './donor-register'
import TeacherRegister from './teacher-register'
import StudentRegister from './student-register'

const RegisterFormContainer = () => {
  return (
    <Card className=''>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Select account type</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className='w-full'>
            <TabsTrigger className='flex-1' value="student">Student</TabsTrigger>
            <TabsTrigger className='flex-1' value="teacher">Teacher</TabsTrigger>
            <TabsTrigger className='flex-1' value="donor">Donor</TabsTrigger>
          </TabsList>
          <TabsContent value="student">
            <StudentRegister/>
          </TabsContent>
          <TabsContent value="teacher">
            <TeacherRegister/>
          </TabsContent>
          <TabsContent value="donor">
            <DonorRegister/>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default RegisterFormContainer