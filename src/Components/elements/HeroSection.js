import React from 'react';
import '../css/App.css';
import '../css/HeroSection.css';
import Button from './Button2'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>JFTELECOM</h1>
      <h2>Um Serviço de qualidade e acessivel</h2>
      <Button>Quem somos?</Button>
      <div className='hero-btns'>
      </div>
    </div>
  );
}
export default HeroSection;