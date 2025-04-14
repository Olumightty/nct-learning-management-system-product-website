import Image from 'next/image'
import React from 'react'

const Point = ({children} : {children: React.ReactNode}) => {
  return (
    <li className='flex gap-2 text-lg md:text-xl text-(--black) opacity-80 my-5'>
        <Image src={'/check-circle.svg'} alt='check-icon' width={25} height={25}/>
        {children}
    </li>
  )
}

export default Point