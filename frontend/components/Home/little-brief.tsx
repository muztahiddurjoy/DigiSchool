import React from 'react'
import BriefAdapter from './brief-adapter'

const LittleBrief = () => {
  return (
    <div className='md:px-20'>
        <p className='text-sm text-primary'>Random</p>
        <p className="text-4xl font-bold mt-3">Why We are Different</p>
        <p className="text-sm text-gray-500 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fugit.</p>
        <div className="grid grid-cols-4 gap-5 mt-10">
            <BriefAdapter description='' title='' icon={<></>}/>
            {/* <BriefAdapter/>
            <BriefAdapter/>
            <BriefAdapter/> */}
        </div>
    </div>
  )
}

export default LittleBrief