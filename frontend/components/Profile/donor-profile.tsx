import React from 'react'
import DonorSidebar from './sidebar/donor-sidebar'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'

const DonorProfile = ({children}:React.PropsWithChildren) => {
  return (
    <div className='pt-20'>
    <SidebarProvider>
        <DonorSidebar/>
        <main>
            <SidebarTrigger/>
            {children}
        </main>
    </SidebarProvider>
    </div>
  )
}

export default DonorProfile