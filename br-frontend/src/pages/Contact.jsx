import React from 'react'
import ContactForm from '../components/ContactForm'
import Requests from '../components/Requests'
import useAuth from '../hooks/useAuth'

const Contact = () => {

    const {user} = useAuth()

  return (
    <div>
        {user && <Requests />}
        <h2>Send us a message and we will contact you in the next 24 hrs</h2>
        <ContactForm />
    </div>
  )
}

export default Contact