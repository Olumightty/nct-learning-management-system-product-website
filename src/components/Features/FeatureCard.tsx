import React from 'react'
import FeatureIcon from './FeatureIcon'


interface FeatureCardProps{
    heading: string
    children: React.ReactNode
    icon: string
    color: string
}
const FeatureCard = (props: FeatureCardProps) => {
  
  return (
    <article className='px-10 py-10 bg-(--white) rounded-[30px] shadow-2xl card'>
        <FeatureIcon color={props.color} icon={props.icon}/>
        <h3 className='text-(--black) text-2xl font-bold text-center my-3'>{props.heading}</h3>
        <p className='text-(--black) opacity-80 text-sm text-center leading-6'>{props.children}</p>
    </article>
  )
}

export default FeatureCard