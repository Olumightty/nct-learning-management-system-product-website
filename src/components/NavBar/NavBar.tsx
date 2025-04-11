import Image from 'next/image'
import React from 'react'
import Navigations from './Navigations'
import MobileNav from './MobileNav'

const NavBar = () => {
  return (
    <nav className='bg-(--white) flex items-center justify-between px-10 md:px-20 sticky top-0 z-10 shadow-2xl'>
        <div className='w-[168px] h-[100px]'>
            <Image src="/logo.svg" alt="logo" width={168} height={100}/>
        </div>
        <div className='hidden md:block'>
          <Navigations/>
        </div>
        <div className='block md:hidden'>
          <MobileNav/>
        </div>
    </nav>
  )
}

export default NavBar