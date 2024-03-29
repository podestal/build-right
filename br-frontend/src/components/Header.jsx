import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Logout from './Logout'
import logo from '../assets/imgs/buffalo-logo.png'

const Header = () => {

    const {user} = useAuth()

  return (
    <header className='header' id='header'>
        <Link className='header-logo' to={'/home  '}><img src={logo} alt="buffalo logo" /></Link>
        {user 
        ?
        <>
          <nav className='header-nav'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/testimonials'}>Testimonials</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/contact'}>Contact Us</Link>
          </nav>
          <div className='header-login'>
            <h2>Welcome {user?.first_name}</h2>
            <Logout />
          </div>
        </>
        :
        <nav className='header-nav'>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/process'}>Our Process</Link>
          <Link to={'/contact'}>Contact Us</Link>
        </nav>
        }
    </header>
  )
}

export default Header