import React from 'react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import Link from 'next/link'

const TeacherSidebar = () => {
  return (
    <Sidebar className='mt-20'>
        
    <SidebarHeader>
        <h1 className='text-primary font-bold text-xl'>Teacher Profile</h1>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/profile/teacher/my-school" className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">My School</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/profile/teacher/enroll-student" className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Enroll Student</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/profile/teacher/enroll-requests" className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Enroll Requests</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/profile/teacher/my-students" className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Students</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/profile/teacher/donation-request" className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Donation</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>

        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
  )
}

export default TeacherSidebar