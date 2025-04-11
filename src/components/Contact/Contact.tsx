
import { contactInfo } from '@/lib/constants'
import React from 'react'
import Handle from './Handle'
import Animation from './Animation'

const Contact = () => {
  return (
    <>
    <Animation/>
    <section id='contact' className='bg-(--white) px-20 py-10'>
        <div className='bg-(--white) p-5 md:p-10 flex flex-wrap lg:flex-nowrap gap-5 justify-center sm:justify-between rounded-[30px] drop'>
            {
                contactInfo.map((contact, index) =>
                    <Handle key={index} {...contact}/>
                )
            }
        </div>
    </section>
    </>
  )
}

export default Contact