import React from 'react'
import CounterAdapter from './counter-adapter'

const CounterContainer = () => {
  return (
    <div className='md:px-20 grid grid-cols-4 lg:px-44 my-20'>
        <CounterAdapter desc='Students Enrolled' title='120k+'/>
        <CounterAdapter desc='Total Schools' title='20k+'/>
        <CounterAdapter desc='Teachers' title='10k+'/>
        <CounterAdapter desc='Raised Donation (BDT)' title='120k'/>
    </div>
  )
}

export default CounterContainer