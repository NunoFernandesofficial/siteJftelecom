import React from 'react'
import Cards from '../elements/Cards';
import HeroSection from '../elements/HeroSection';
import Contact from '../elements/Contact';
import About from './About'
import Footer from '../elements/Footer'
import '../css/Home.css'

function Home() {
        return (
            <>
              <HeroSection />
              <About/>
              <Cards />
              <Contact />
              <Footer/>

            </>
    )
}

export default Home;
