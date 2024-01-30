import React, { useState } from 'react'
import useMutate from '../hooks/useMutate'
import { createRequest } from '../api/api'
import { useNavigate } from 'react-router-dom'

const ContactForm = () => {

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState("")
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [displayMsg, setDisplayMsg] = useState("You successfully sent your information")

    const navigate = useNavigate()

    const {mutate: sendRequest} = useMutate(createRequest, '', setSuccess, setError, setDisplayMsg)

    const handleSubmit = e => {
        e.preventDefault()
        setSuccess(false)
        setError(false)
        sendRequest({ contact: {
            name,
            email,
            phone,
            description,
            title,
            completed: false
        }})
        setName('')
        setTitle('')
        setEmail('')
        setPhone('')
        setDescription('')
        // navigate('/home')
    }

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
        {success && <p className='successful-message'>{displayMsg}</p>}
        {error && <p className='error-message'>{displayMsg}</p>}
        <input 
            required
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <input 
            required
            type='email'
            placeholder='Your e-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input 
            required
            type='tel'
            placeholder='Your phone number'
            value={phone}
            onChange={e => setPhone(e.target.value)}
        />
        <input 
            required
            type='text'
            placeholder='Your Subject'
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <textarea 
            required
            placeholder='Your Message'
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <button className='btn-primary'>Send</button>
    </form>
  )
}

export default ContactForm