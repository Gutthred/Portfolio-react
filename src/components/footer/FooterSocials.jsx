import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

import './Footer.css'

export const FooterSocials = () => {
  return (
    <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/fabio-silva-923bb8214"><BsLinkedin/></a>
        <a href="https://github.com/Gutthred"><BsGithub/></a>
        <a href="https://www.instagram.com/gutthred/"><BsInstagram/></a>
    </div>
  )
}