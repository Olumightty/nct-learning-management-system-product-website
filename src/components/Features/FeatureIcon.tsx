'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'

const FeatureIcon = ({color, icon}: {color: string, icon: string}) => {
    const containerRef = useRef(null)
    const imgref = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(containerRef.current,{
            scrollTrigger: {
                trigger:'.container',
                start: 'top bottom',
                end: 'bottom center',
                scrub: 1
            },
            width: 0,
            height: 0,
            
            ease: 'power4.in'

        })

        gsap.from(imgref.current, 
            {
                scrollTrigger: document.querySelector('#features')!,
                rotateY: -360,
                duration: 1.5,
                scale: 0,
            }
        )

        gsap.to(imgref.current, 
            {
                y: -5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        )
    }, [])

  return (
    <div className={`flex items-center justify-center w-[100px] h-[100px] mx-auto contain`}>
        <div ref={containerRef} className={`flex items-center justify-center w-[100px] h-[100px] ${color} rounded-full mx-auto container`}>
            <Image ref={imgref} className='absolute icon' width={125} height={100} src={icon} alt={icon}/>
        </div>
    </div>
    
  )
}

export default FeatureIcon