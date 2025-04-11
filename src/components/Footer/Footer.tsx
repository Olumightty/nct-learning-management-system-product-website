import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-(--black) px-10 md:px-20 py-10 sm:flex justify-between items-center'>
        <span className='text-(--white) mb-5 sm:mb-0 font-normal text-sm lg:text-lg'>Copyright © 2025 Neo Cloud Technologies. All Rights Reserved</span>
        <ul className='flex items-center gap-5'>
            <li><Link href={'#'}><Image src={'/instagram.svg'} alt='instagram' width={20.3} height={20.3}/></Link></li>
            <li><Link href={'#'}><Image src={'/x.svg'} alt='twitter' width={20.3} height={20.3}/></Link></li>
            <li><Link href={'#'}><Image src={'/linkedin.svg'} alt='linkedin' width={20.3} height={20.3}/></Link></li>
            <li><Link href={'#'}><Image src={'/facebook.svg'} alt='facebook' width={20.3} height={20.3}/></Link></li>
        </ul>
    </footer>
  )
}

export default Footer