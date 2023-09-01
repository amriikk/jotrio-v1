import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/me.png'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Want to know more?</small>
            </article>
        
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>View Portfolio</small>
            </article>
          </div>
        </div>
      </div>        
        <br />
        <div className='about__bio'>
        <h2>👨‍💻 Code Crafter | 🧘‍♂️ Yoga Yogi | 🌱 Plant Propagating Papi ✨</h2>
          <p>
            Embarking on a digital odyssey as a Software Engineering student at UCSB, I'm a tech-savvy wanderer weaving intricate code tapestries. With a heart rooted in mathematics and a mind soaring through creativity, I'm not just a developer – I'm a full-stack virtuoso.
            When I'm not in the binary realm, you'll find me guiding tranquil yoga sessions or nurturing lush Devil’s Ivy in crystalline containers. From Santa Barbara's shores to the buzzing cannabis industry, I'm a connoisseur of life's diverse flavors. 
            Join me on this journey of coding, culture, and creating connections. 
            <br /><br /> Welcome to the realm of possibilities. 🚀🌿🧘‍♂️
         </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk!</a>

         </div>
    </section>
    
  )
}

export default About