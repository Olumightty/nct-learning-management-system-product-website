import Image from 'next/image'
import React from 'react'


interface FeatureCardProps{
    heading: string
    children: React.ReactNode
    icon: string
    color: string
}
const FeatureCard = (props: FeatureCardProps) => {
  return (
    <article className='px-10 py-10 bg-(--white) rounded-[30px] shadow-2xl'>
        <div className={`flex items-center justify-center w-[100px] h-[100px] ${props.color} rounded-full mx-auto`}>
            <Image className='absolute' width={125} height={100} src={props.icon} alt={props.icon}/>
        </div>
        <h3 className='text-(--black) text-2xl font-bold text-center mt-3'>{props.heading}</h3>
        <p className='text-(--black) opacity-80 text-sm text-center'>{props.children}</p>
    </article>
  )
}

export default FeatureCard