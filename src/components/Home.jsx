import React from 'react'
import { About, Contact, Experience, CV, Hero, Tech, Works, StarsCanvas } from "../components";
import Footer from './Footer';

const Home = () => {
  return (
    <div className="relative z-0 bg-[#030D0E]">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <CV />
        <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        </div>
        <Footer/>
    </div>
  )
}

export default Home