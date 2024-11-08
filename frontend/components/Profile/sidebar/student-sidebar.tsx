import { Button } from '@/components/ui/button'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
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
                    <button className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Student profile</button>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <button className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Donors</button>
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