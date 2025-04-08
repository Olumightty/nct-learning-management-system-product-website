import Link from 'next/link'
import React from 'react'


interface NavLinkProps {
    href: string
    children: React.ReactNode

}
const NavLink = (props: NavLinkProps) => {
  return (
    <li className='text-[16px] font-semibold'><Link href={props.href}>{props.children}</Link></li>
  )
}

export default NavLink