import React from 'react'
import NavLink from './NavLink'

const Navigations = () => {
  return (
    <ul className='flex flex-col md:flex-row gap-5 items-center'>
        <NavLink href="#overview">Overview</NavLink>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="https://portal.neocloud.ng/">Get Started</NavLink>
  </ul>
  )
}

export default Navigations