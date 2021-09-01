import React from 'react';
import '../css/App.css';
import '../css/HeroSection.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function HeroSection() {
  
  return (
    
    <div className='hero-container'>
      
      <h1>JFTELECOM</h1>
      <h2>Um Serviço de qualidade e acessivel</h2>
      
      <div className='hero-btns'>
      
      </div>
      
      <div className="teste">
      <Link  to="/About">Quem somos?</Link>
      </div>  
    </div>
  );
}
export default HeroSection;