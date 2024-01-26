import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { Outlet } from 'react-router-dom'
import useUser from '../hooks/useUser'

const PersistLogin = () => {

    const access = localStorage.getItem('access')
    const refresh = localStorage.getItem('refresh')
    const {user, setUser} = useAuth()
    const {mutate} = useUser(user, setUser)

    useEffect(() => {
        setUser({access, refresh})
        console.log('access', access)
        mutate({ access })
    }, [])


  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PersistLogin