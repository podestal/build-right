import React from 'react'
import ContactForm from '../components/ContactForm'
import Requests from '../components/Requests'

const Contact = () => {

  return (
    <div>
        <Requests />
        <h2>Send us a message and we will contact you in the next 24 hrs</h2>
        <ContactForm />
    </div>
  )
}

export default Contact