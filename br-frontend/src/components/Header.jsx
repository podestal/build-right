import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/testimonials'}>Testimonials</Link>
        <Link to={'/services'}>Services</Link>
    </nav>
  )
}

export default Header