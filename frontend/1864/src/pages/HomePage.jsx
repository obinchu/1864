import React from 'react'
import Hero from '../components/homepageComponents/hero/Hero'
import About from '../components/homepageComponents/about/About'

const HomePage = () => {
  return (
    <main className='flex flex-col text-other w-full h-full'>
      <section className='flex flex-col h-full '>
          <Hero />
          <About />
      </section>
     

    </main>
  )
}

export default HomePage