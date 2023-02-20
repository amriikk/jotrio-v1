import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {RxRocket} from 'react-icons/rx'
import {TbYoga} from 'react-icons/tb'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/jhonKhrizhtian"><BsLinkedin /></a>
        <a href="https://github.com/amriikk"><FaGithubAlt /></a>
        <a href="https://bit.ly/jotrio"><RxRocket /></a>
        <a href="https://bit.ly/jotrio"><TbYoga /></a>
    </div>
  )
}

export default Socials