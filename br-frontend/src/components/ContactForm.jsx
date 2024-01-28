import React, { useState } from 'react'
import useMutate from '../hooks/useMutate'
import { createRequest } from '../api/api'

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const {mutate: sendRequest} = useMutate(createRequest, '')

    const handleSubmit = e => {
        e.preventDefault()
        sendRequest({ contact: {
            name,
            email,
            phone,
            message,
            completed: false
        }})
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <input 
            type='email'
            placeholder='Your e-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input 
            type='tel'
            placeholder='Your phone number'
            value={phone}
            onChange={e => setPhone(e.target.value)}
        />
        <textarea 
            placeholder='Your Message'
            value={message}
            onChange={e => setMessage(e.target.value)}
        />
        <button>Send</button>
    </form>
  )
}

export default ContactForm