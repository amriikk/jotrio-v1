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
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Want to know more?</small>
            </article>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Check out my Portfolio</small>
            </article>
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id consectetur dolores iusto! Cupiditate illum et, amet dolorum vel nisi molestiae fugiat velit impedit! </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        
      </div>    
    </section>
  )
}

export default About