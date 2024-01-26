import React from 'react'

const Logout = () => {

    const handleLogout = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
    }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout