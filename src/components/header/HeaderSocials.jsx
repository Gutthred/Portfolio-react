import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gutthred/"><BsLinkedin/></a>
        <a href="https://github.com/Gutthred"><BsGithub/></a>
        <a href="https://www.instagram.com/gutthred/"><BsInstagram/></a>
    </div>
  )
  
}

export default HeaderSocials
