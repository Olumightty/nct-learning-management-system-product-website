import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section id='hero' className='bg-(--neo-blue) custom-background px-20 flex items-center justify-between h-[100vh]'>
        <article className='w-fit'>
            <header>
                <span className='text-(--white) text-2xl font-bold'>Introducing...</span>
                <h1 className='text-(--white) text-5xl font-bold'>Neo Cloud Learning <br /> Management System</h1>
            </header>
            <p className='text-(--black) font-bold my-2'>Track your learning. Measure your growth.</p>
            <Link href={"https://portal.neocloud.ng/"} className='w-fit mx-auto'>
                <button className='rounded-4xl px-5 py-2 bg-(--deep-orange) text-(--white) flex items-center gap-2 text-2xl font-bold cursor-pointer'>
                    Get Started
                    <Image src="/logo-icon.svg" alt="icon" width={38} height={37}/>
                </button>
            </Link>
        </article>
        <div className='relative w-[736px] h-[552px] self-end flex flex-col justify-center items-center'>
            <Image className='absolute top-0' src="/clock.svg" alt="clock" width={113} height={113}/>
            <Image src="/desk-setup.svg" alt="hero" width={736} height={552}/>
            <Image className='absolute bottom-35' src="/pencil.svg" alt="pencil" width={113} height={113}/>
        </div>
        
    </section>
  )
}

export default Hero