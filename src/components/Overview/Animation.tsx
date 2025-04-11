'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Animation = () => {
    useGSAP(() => {
        const section = document.querySelector('#overview')!;
        const heroSection = document.querySelector('#hero')!;
        gsap.registerPlugin(ScrollTrigger)

        const overviewScroll = {
            trigger: heroSection,
            start: 'center top',
            endTrigger: section,
            end: 'bottom top',
            scrub: 1,
        }

        gsap.from(section.querySelectorAll(' header p'), {
            scrollTrigger: section,
            y: 200,
            stagger: 0.1,
            duration: 0.5,
            opacity: 0,
        })

        

        const hi = gsap.from(section.querySelectorAll('article p, article li'), {
            scrollTrigger: section,
            x: 500,
            stagger: 0.2,
            duration: 0.8,
            opacity: 0,
            onComplete: () => {
                gsap.to(section.querySelectorAll('article>p, article>ul>li, header>h2, header>p'),  {
                    scrollTrigger: overviewScroll,
                    y: -50,
                    x: -50,
                    stagger: 0.1,
                    duration: 0.8,
                    opacity: 0,
                })
            }
        })


        

       

    }, [])
  return (
    null
  )
}

export default Animation