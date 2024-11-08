import Image from 'next/image'
import React from 'react'

const SponsorCompanies = () => {
  return (
    <div className='py-10 px-20'>
      <p className='text-sm text-primary font-semibold'>Sponsors</p>
      <p className="text-3xl font-bold">Sponsor Companies</p>
      <div className="flex items-center justify-center flex-wrap gap-5 px-10 mt-10">
        {Array(13).fill("_").map((_,i)=>
        <Image src="/brac.jpeg" height={50} width={100} alt='Brac' className='filter transition-all ease-in-out duration-300 grayscale hover:grayscale-0' key={i}/>)}
       </div>
    </div>
  )
}

export default SponsorCompanies