import { Button } from '@/components/ui/button'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import Link from 'next/link'
import React from 'react'

const StudentSidebar = () => {
  return (
    <Sidebar className='mt-20'>
        
    <SidebarHeader>
        <h1 className='text-primary font-bold text-xl'>Student Profile</h1>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/profile/student/" className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Student profile</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/profile/student/donors" className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Donors</Link>
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

export default StudentSidebar