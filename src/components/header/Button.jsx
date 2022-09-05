import React from 'react'
import CV from '../../assets/CV.pdf'

const Button = () => {
  return (
    <div className='headerButton'>
        <a href={CV} download className='btn'>CV</a>
        <a href="#contact" className='btn btn-primary'>Contato</a>
    </div>
  )
}

export default Button