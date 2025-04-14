import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Animation from './Animation'

const Hero = () => {
    
  return (
    <>
    <Animation/>
    <section id='hero' className='bg-(--neo-blue) custom-background px-10 sm:px-20 flex flex-col lg:flex-row items-start lg:items-center sm:py-20 lg:justify-between h-[100vh]'>
        <div className=' mt-20 sm:mt-0 ml-0 lg:ml-20'>
            <article className='w-fit header'>
                <header>
                    <p className='text-(--white) text-2xl  md:text-3xl font-bold intro'>Introducing...</p>
                    <h1 className='text-(--white) text-5xl md:text-6xl font-bold title'>Neo Cloud Learning <br /> Management System</h1>
                </header>
                <p className='text-(--black) font-bold my-5 sub-title'>Track your learning. Measure your growth.</p>
            </article>
            <Link href={"https://portal.neocloud.ng/"} className='w-fit mx-auto'>
                <button className='rounded-4xl px-5 py-2 bg-(--deep-orange) text-(--white) flex items-center gap-2 text-2xl font-bold cursor-pointer start'>
                    Get Started
                    <Image src="/logo-icon.svg" alt="icon" width={38} height={37}/>
                </button>
            </Link>
        </div>
        <div className='relative w-[636px] h-[552px] justify-self-end self-end hidden md:flex flex-col justify-center items-center'>
            <Image className='absolute top-[30px] clock w-[80px] lg:w-[113px]' src="/clock.svg" alt="clock" width={113} height={113}/>
            <Image src="/desk-setup.svg" alt="hero" width={736} height={552}/>
            <Image className='absolute  bottom-40 pencil w-[80px] lg:w-[113px]' src="/pencil.svg" alt="pencil" width={113} height={113}/>
        </div>
        
    </section>
    </>
  )
}

export default Hero