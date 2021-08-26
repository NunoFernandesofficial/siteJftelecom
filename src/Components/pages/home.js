import React from 'react'
import Cards from '../elements/Cards';
import HeroSection from '../elements/HeroSection';
import Footer from '../elements/Footer';
import About from './About'

function Home() {
        return (
            <>
              <HeroSection />
              <About/>
              <Cards />
              <Footer />
            </>
    )
}

export default Home;
