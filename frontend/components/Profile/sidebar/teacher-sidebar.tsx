import React from 'react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

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
                    <button className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">My School</button>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <button className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Students</button>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <button className="py-2 my-1 rounded-md px-3 transition-all ease-in-out duration-150 bg-primary/30 hover:bg-primary/40">Donation</button>
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