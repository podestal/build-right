import React, { useState } from 'react'
import { login } from '../api/api'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'


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
            navigate('/home')
        }
    })

    const handleLogin = e => {
        e.preventDefault()
        mutate({ credentials: { username, password } })
        setUsername("")
        setPassword("")
    }

  return (
    <div className='main-container'>
        <Header />
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