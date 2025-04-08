import Image from 'next/image'
import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {
  return (
    <nav className='bg-(--white) flex items-center justify-between px-20 sticky top-0 z-10 shadow-2xl'>
        <div className='w-[168px] h-[100px]'>
            <Image src="/logo.svg" alt="logo" width={168} height={100}/>
        </div>
        <ul className='flex gap-5 items-center'>
            <NavLink href="#overview">Overview</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="https://portal.neocloud.ng/">Get Started</NavLink>
        </ul>
    </nav>
  )
}

export default NavBar