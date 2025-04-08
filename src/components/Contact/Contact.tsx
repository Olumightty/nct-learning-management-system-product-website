
import { contactInfo } from '@/lib/constants'
import React from 'react'
import Handle from './Handle'

const Contact = () => {
  return (
    <section id='contact' className='bg-(--white) px-20 py-10'>
        <div className='bg-(--white) p-10 flex justify-between rounded-[30px] drop'>
            {
                contactInfo.map((contact, index) =>
                    <Handle key={index} {...contact}/>
                )
            }
        </div>
    </section>
  )
}

export default Contact