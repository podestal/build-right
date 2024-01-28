import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { Outlet } from 'react-router-dom'
import useUser from '../hooks/useUser'
import useMutate from '../hooks/useMutate'
import { jwtDecode } from "jwt-decode"
import dayjs from "dayjs"
import { refreshToken } from '../api/api'
import { useMutation } from '@tanstack/react-query'

const PersistLogin = () => {

    const access = localStorage.getItem('access')
    const refresh = localStorage.getItem('refresh')
    const {user, setUser} = useAuth()
    const {mutate: userMutation} = useUser(user, setUser, access, refresh)
    const {mutate: refreshMutation} = useMutation({
      mutationFn: data => refreshToken(data),
      onSuccess: res => {
        setUser({...user, access:res.access})
        localStorage.setItem('access', res.access)
      }
    })
    let isExpired = false

    useEffect(() => {
        if (access) {
          const exp = jwtDecode(access).exp
          isExpired = dayjs.unix(exp).diff(dayjs()) < 1
          if (isExpired) {
            refreshMutation({ refresh: refresh })
          } else if (user?.username == undefined) {
            userMutation({ access })
          }
        } 
    }, [access])


  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PersistLogin