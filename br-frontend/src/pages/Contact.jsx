import React from 'react'
import ContactForm from '../components/ContactForm'
import Requests from '../components/Requests'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'

const Contact = () => {

    const {user} = useAuth()

  return (
    <div className='main-container contact-container'>
        <Header />
        {user 
        ?
        <Requests />
        :
        <>
        <h2 className='contact-title'>Send us a message and we will contact you in the next 24 hrs</h2>
        <ContactForm />
        </>
        }
    </div>
  )
}

export default Contact