import React from 'react'
import ME from '../../assets/me.png'
import './about.css'

const About = () => {
  return (
    <section id='about'>About
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="me" />
        </div>
      </div>
    </div>    
    </section>
  )
}

export default About