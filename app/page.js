import React from 'react'
import Footer from './components/common/Footer'
import { Navbar } from './components/common/Navbar'
import Hero from './components/home/Hero'
import { HeroNext } from './components/home/HeroNext'
import { Visa } from './components/home/Visa'



const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeroNext/>
      <Visa/>
     <Footer/>
    </div>
  )
}

export default page;