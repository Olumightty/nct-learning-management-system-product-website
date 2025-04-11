'use client'
import React from 'react'
import NavLink from './NavLink'

const Navigations = ({toggle}: {toggle?: ()=>void}) => {
  return (
    <ul className='flex flex-col md:flex-row gap-5 items-center'>
        <NavLink onClick={toggle} href="#overview">Overview</NavLink>
        <NavLink  onClick={toggle}  href="#features">Features</NavLink>
        <NavLink  onClick={toggle} href="#contact">Contact</NavLink>
        <NavLink  href="https://portal.neocloud.ng/">Get Started</NavLink>
  </ul>
  )
}

export default Navigations