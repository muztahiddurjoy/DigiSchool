import React from 'react'
import MaterialRequestAdapter from './material-request-adapter'

const MaterialRequests = () => {
  return (
    <div className='mt-20'>
        <p className='text-sm text-primary font-semibold'>Donate Materials</p>
        <p className="text-3xl font-bold">Help With Materials</p>
        <div className="grid grid-cols-4 gap-3 mt-5">
            {Array(10).fill("_").map((v,i)=><MaterialRequestAdapter key={i}/>)}
        </div>
    </div>
  )
}

export default MaterialRequests