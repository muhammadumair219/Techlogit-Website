import React, { createRef, useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import Clients from '../Clients/Clients'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Testimonials from '../Testimonials/Testimonials'
import Companies from '../Companies/Companies'
import GetinTouch from '../GetinTouch/GetinTouch'
import Footer from '../Footer/Footer'
import "./Home.scss"
const Home = () => {


  return (
    <div  className='home'>
        <Navbar/>
        <Hero />
        <Services /> 
        <Projects />
        <Clients />
        <About />
        <Portfolio />
        <Testimonials />
        <Companies />
        <GetinTouch variant='inline' />
        <Footer />
    </div>
  )
}

export default Home