'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const Animation = () => {
    useGSAP(() => {
        const section = document.querySelector('#hero')!
        gsap.registerPlugin(ScrollTrigger)

        const heroScroll = {
            trigger:section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        }

        gsap.from(section.querySelectorAll('.header>p, .header p, .header h1'), {
            x: -300,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            onComplete: () => {
                gsap.to(section.querySelectorAll('.header>p, .header p, .header h1'), {
                    scrollTrigger: heroScroll,
                    y: -100,
                    duration: 1,
                    ease: "sine.inOut",
                    opacity: 0,
                    stagger: 0.5
                })
            }
        })
        gsap.from(section.querySelector('.start'), {
            scale: 0,
            ease: 'bounce',
            boxShadow: '2px 2px 2px 8px rgba(0, 0, 0, 25%)',
            duration: 1,
            delay: 0.5
        })

        // gsap.to('.clock', {
        //     y: 5,
        //     // reversed: true,
        //     repeat: -1,
        //     ease: 'circ',
        //     duration: 1,
        //     rotateY: 360
        // })
        gsap.to('.clock', {
            y: -10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        

        gsap.to(section.querySelector('.start'), {
            scrollTrigger: heroScroll,
            x: 300, 
            opacity: 0, 
            duration: 1
        })

        
        gsap.to(section.querySelector('.clock'), {
            scrollTrigger: heroScroll,
            y:-100,
            rotateY: 360
        })

        gsap.to(section.querySelector('.pencil'), {
            scrollTrigger: heroScroll,
            y:-10,
            x: -50
        })

        
    }, [])
  return (
    null
  )
}

export default Animation