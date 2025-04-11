import Link from 'next/link'
import React from 'react'


interface NavLinkProps {
    href: string
    children: React.ReactNode
    onClick?: () => void

}
const NavLink = (props: NavLinkProps) => {
  return (
    <li onClick={props.onClick} className='text-[16px] font-semibold'><Link href={props.href}>{props.children}</Link></li>
  )
}

export default NavLink