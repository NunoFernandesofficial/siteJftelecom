import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);

  

    return (
        <>
        <nav className='navbar' id="top">
          
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              JfTelecom
            </Link>
            <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item"><div className="texto-menu">MENU</div></li>
             
              <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                  Sobre mim
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Serviços
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contacts'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

        </nav>
      </>
    )
}

export default Navbar
