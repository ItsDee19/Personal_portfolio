import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <BsLinkedin />
            <FaInstagramSquare />
            <FaTwitterSquare />
        </div>
        <p>Personal Portfolio Website</p>
    </div>
  )
}

export default Footer