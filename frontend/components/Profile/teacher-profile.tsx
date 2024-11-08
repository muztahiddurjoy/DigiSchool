import React from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import TeacherSidebar from './sidebar/teacher-sidebar'

const TeacherProfile = ({children}:React.PropsWithChildren) => {
  return (
    <div className='pt-20'>
    <SidebarProvider>
        <TeacherSidebar/>
        <main className='w-full'>
            <SidebarTrigger/>
            {children}
        </main>
    </SidebarProvider>
    </div>
  )
}

export default TeacherProfile