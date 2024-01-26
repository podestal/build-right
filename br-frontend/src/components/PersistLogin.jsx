import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { Outlet } from 'react-router-dom'
import useUser from '../hooks/useUser'

const PersistLogin = () => {

    const access = localStorage.getItem('access')
    const refresh = localStorage.getItem('refresh')
    const {user, setUser} = useAuth()
    const {mutate} = useUser(user, setUser, access, refresh)

    useEffect(() => {
        if (access != undefined && user?.username == undefined) {
            mutate({ access })
        }
    }, [access])


  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PersistLogin