import React from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import StudentSidebar from './sidebar/student-sidebar'

const StudentProfile = ({children}:React.PropsWithChildren) => {
  return (
    
    <div className='pt-20'>
    <SidebarProvider>
        <StudentSidebar/>
        <main className='w-full'>
            <SidebarTrigger/>
            {children}
        </main>
    </SidebarProvider>
    </div>
  )
}

export default StudentProfile