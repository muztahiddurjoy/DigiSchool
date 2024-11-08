import MaterialRequests from '@/components/DonationRequests/material-requests'
import SponsorStudent from '@/components/DonationRequests/sponsor-student'
import React from 'react'

const DonationRequestsPage = () => {
  return (
    <div className='pt-20 pb-20 px-20'>
        <SponsorStudent/>
        <MaterialRequests/>
    </div>
  )
}

export default DonationRequestsPage