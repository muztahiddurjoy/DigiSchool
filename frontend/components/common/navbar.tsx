import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-lg md:px-20 py-3 flex items-center justify-between">
      <p className='text-xl font-bold text-primary'>DigiSchool</p>
      <ul className='flex items-center justify-center text-sm font-semibold text-primary'>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <div className="flex justify-end items-center gap-1">
        <Button  variant="outline">Login</Button>
        <Button>Register</Button>
      </div>
    </div>
  )
}

export default Navbar