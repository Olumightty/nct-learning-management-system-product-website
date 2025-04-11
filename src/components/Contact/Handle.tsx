import Image from 'next/image'
import React from 'react'

interface HandleProp{
    icon: string
    label: string
    value: string
}
const Handle = (props: HandleProp) => {
  return (
    <article className='flex gap-5 items-start'>
        <Image className='w-[30px] md:w-[50px]' src={props.icon} alt={props.icon} width={50} height={50}/>
        <div>
            <h4 className='text-(--black) text-xl md:text-2xl font-bold'>{props.label}</h4>
            <p className='text-(--black) text-sm sm:text-lg md:text-xl w-[220px]'>
                {props.value}
            </p>
        </div>
    </article>
  )
}

export default Handle