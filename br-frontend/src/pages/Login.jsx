import React, { useState } from 'react'
import { login } from '../api/api'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser'
import useAuth from '../hooks/useAuth'


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {user, setUser} = useAuth()
    const {mutate: userMutation} = useUser(user, setUser)

    const {mutate} = useMutation({
        mutationFn: data => login(data),
        onSuccess: (data) => {
            localStorage.setItem('access', data.access)
            localStorage.setItem('refresh', data.refresh)
            userMutation({ acess:data.access })
            navigate('/')
        }
    })

    const handleLogin = e => {
        e.preventDefault()
        mutate({ credentials: { username, password } })
        setUsername("")
        setPassword("")
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input 
                type='text'
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login