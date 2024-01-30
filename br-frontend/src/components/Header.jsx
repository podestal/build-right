import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Logout from './Logout'

const Header = () => {

    const {user} = useAuth()

  return (
    <header className='header'>
        <Link className='header-logo' to={'/home  '}><h1>LOGO</h1></Link>
        <nav className='header-nav'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/testimonials'}>Testimonials</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/contact'}>Contact Us</Link>
        </nav>
        {user && 
          <>
              <h2>Welcome {user?.first_name}</h2>
              <Logout />
          </>}
    </header>
  )
}

export default Header