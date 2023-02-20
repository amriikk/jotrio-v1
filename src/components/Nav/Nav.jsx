import React from 'react'
import './nav.css'
import { BiHome } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { FiBook } from 'react-icons/fi'
import { MdWork } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import { MdMessage } from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href="./"><BiHome /></a>
      <a href="#about"><BiUser /></a>
      <a href="#experience"><FiBook /></a>
      <a href="#experience"><RiServiceLine /></a>
      <a href="#portfolio"><MdWork /></a>
      <a href="#contact"><MdMessage /></a>

    </nav>
  )
}

export default Nav