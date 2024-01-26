import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Logout from './Logout'

const Header = () => {

    const {user} = useAuth()

  return (
    <nav>
        {console.log('user',user)}
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/testimonials'}>Testimonials</Link>
        <Link to={'/services'}>Services</Link>
        <h2>Welcome {user?.first_name}</h2>
        <Logout />
    </nav>
  )
}

export default Header