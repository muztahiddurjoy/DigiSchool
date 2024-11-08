import React from 'react'

interface CounterAdapterProps{
    title:string
    desc:string
}

const CounterAdapter = (props:CounterAdapterProps) => {
  return (
    <div>
        <p className="text-center text-primary font-bold text-5xl">{props.title}</p>
        <p className="text-center mt-3 text-gray-600 text-sm">{props.desc}</p>
    </div>
  )
}

export default CounterAdapter