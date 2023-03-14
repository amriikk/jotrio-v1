import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>J.T.</h1>
            <h5 className='text-light'>Software Engineer</h5>
            <CTA />
            <Socials />

            <div className="me">
              <img src={ME} alt="me img" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header