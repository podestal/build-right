import React from 'react'
import useAuth from '../hooks/useAuth'

const Logout = () => {

    const {setUser} = useAuth()

    const handleLogout = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        setUser()
    }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout