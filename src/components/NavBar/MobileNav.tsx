'use client'
import React from 'react'
import {Menu, X} from 'lucide-react'
import Navigations from './Navigations'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const MobileNav = () => {
    const [open, setOpen] = React.useState(false)

    useGSAP(() => {
        const mobile = document.querySelector('.mobile')!;
        console.log(open)
        if(open){
            gsap.from(mobile, { 
                x: 100,
                width: 0, 
                opacity: 0, 
                duration: 0.2, 
                ease: 'sine.inOut'
            });
        }
        
    }, [open])

    // const handleClose = contextSafe(() => {
    //     const mobile = document.querySelector('.mobile')!;
    //     const close = gsap.to(mobile, { 
    //         x: 100,
    //         width: 0, 
    //         opacity: 0, 
    //         duration: 0.4,
    //         display: 'none', 
    //         ease: 'sine.inOut',
            
    //     });

    // }) 
  return (
    <>
        <Menu className='cursor-pointer' onClick={() => setOpen(true)} />
        {
            
            <div className={`absolute top-0 right-0  h-screen bg-(--white)  px-20 py-10 shadow-2xl mobile ${open ? 'block z-10': 'hidden'}`}>
                <X onClick={() => setOpen(false)} className='absolute top-5 right-5 cursor-pointer' />
                <Navigations toggle={() => setOpen(false)}/>
            </div>
        }
        
    </>
    
  )
}

export default MobileNav