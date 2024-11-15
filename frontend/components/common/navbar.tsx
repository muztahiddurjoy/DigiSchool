"use client"
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'

const Navbar = () => {
  return (
    <div className="fixed bg-white/60 top-0 left-0 right-0 backdrop-blur-lg md:px-20 py-3 flex items-center justify-between z-50">
      <p className='text-xl font-bold text-primary'>DigiSchool</p>
      <ul className='flex items-center justify-center text-sm font-semibold text-primary gap-5'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/nearest-digischools">Nearest Schools</Link>
        </li>
        <li>
          <Link href="/donation-requests">Donation Requests</Link>
        </li>
      </ul>
      <div className="flex justify-end items-center gap-1">
        {window.localStorage.getItem("accessToken_digi")?
        <Link href="/profile/student" className={buttonVariants()}>Dashboard</Link>:<div className='flex justify-end items-center gap-1'>
        <Link href="/login" className={buttonVariants({variant:"outline"})}>Login</Link>
        <Link href="/register" className={buttonVariants()}>Register</Link></div>}
      </div>
    </div>
  )
}

export default Navbar