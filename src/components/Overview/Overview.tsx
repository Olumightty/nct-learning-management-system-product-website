import React from 'react'
import Point from './Point'
import Animation from './Animation'

const Overview = () => {
  return (
    <>
    <Animation/>
    <section id='overview' className='bg-(--white) px-20 py-20 flex flex-col md:flex-row gap-5 items-center justify-between' >
        <header className='self-start header'>
            <h2 className='text-4xl md:text-5xl text-(--black) opacity-80 font-bold'>Overview</h2>
            <p className='text-xl md:text-2xl text-(--black) opacity-60 font-semibold mt-2'>Neo Cloud Learning Management System</p>
        </header>
        <article>
            <p className='text-lg md:text-xl text-(--black) opacity-80 max-w-[605px]'>The Neo Cloud Learning Management System is a user-friendly and comprehensive web-based platform designed to enhance the learning experience by allowing students to track their progress, monitor attendance, view classwork and projects, and request certificates upon course completion. It is built for Neo Cloud by Neo Cloud.It all includes:</p>
            <ul>
              <Point>efficient academic tracking</Point>
              <Point>real-time attendance monitoring</Point>
              <Point>user-focused and accessible designs</Point>
            </ul>
        </article>
    </section>
    </>
  )
}

export default Overview