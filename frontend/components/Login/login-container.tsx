import React from 'react'
import LoginForm from './login-form'
import Image, { StaticImageData } from 'next/image'

interface LoginContainerProps{
    image:StaticImageData,
    children:React.ReactNode
}

const LoginContainer = (props:LoginContainerProps) => {
  return (
    <div className='min-h-[60vh] grid grid-cols-2'>
        <Image src={props.image} height={1000} width={1000} className='w-full min-h-[100vh] object-cover' placeholder='blur' alt='Stdent'/>
        <div className="flex items-center justify-center">
            {props.children}
        </div>
    </div>
  )
}

export default LoginContainer