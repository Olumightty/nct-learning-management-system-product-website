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
        gsap.from(mobile, { 
            width: 0, 
            opacity: 0, 
            duration: 0.5, 
            ease: 'sine.inOut'
        });
    }, [])
  return (
    <>
        <Menu className='cursor-pointer' onClick={() => setOpen(true)} />
        {
            
            <div className={`absolute top-0 right-0  h-screen bg-(--white) z-10 px-20 py-10 shadow-2xl mobile ${open ? 'block': 'hidden'}`}>
                <X onClick={() => setOpen(false)} className='absolute top-5 right-5 cursor-pointer' />
                <Navigations/>
            </div>
        }
        
    </>
    
  )
}

export default MobileNav