'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const Animation = () => {
    useGSAP(() => {
        const section = document.querySelector('#contact')!
        const featureSection = document.querySelector('#features')!
        gsap.registerPlugin(ScrollTrigger)

        
        gsap.from(section.querySelector('.drop'), {
            scrollTrigger: {
                trigger: section,
            },
            y: 200,
            opacity: 0,
            ease: 'sine.inOut',
            duration: 1,
            zIndex: -1,
            onComplete: () => {
                gsap.to(section.querySelector('.drop'), {
                    y: 5,
                    duration: 1,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                })
            }
        })

        

    }, [])
  return (
    null
  )
}

export default Animation