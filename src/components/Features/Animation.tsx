'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Animation = () => {
    useGSAP(() => {
        const section = document.querySelector('#features')!;
        const features = section.querySelectorAll('.card')
        gsap.registerPlugin(ScrollTrigger)

        gsap.from(features, {
            scrollTrigger: section,
            y: 10,
            x: -20,
            stagger: 0.3,
            duration: 1,
            opacity: 1
        })

        features.forEach((feature, i) =>{
          feature.addEventListener('mouseover', () =>{
            gsap.to(feature, {
              scale: 1.05,
              ease: 'sine.inOut'
            })

            gsap.to(feature.querySelector('.icon'), {
                rotateY: -360,
                duration: 1.5,
                ease: 'sine.inOut'
            })

            gsap.to(feature.querySelector('.container'), {
              width: 80,
              height: 80,
              ease: 'sine.inOut',
            })
          })

          feature.addEventListener('mouseleave', () =>{
            gsap.to(feature, {
              scale: 1,
              ease: 'sine.inOut'
            })

            gsap.to(feature.querySelector('.container'), {
              width: 100,
              height: 100,
              ease: 'sine.inOut'
            })
           
          })
        })
    }, [])
  return (
    null
  )
}

export default Animation