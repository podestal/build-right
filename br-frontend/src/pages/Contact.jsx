import React from 'react'
import ContactForm from '../components/ContactForm'
import Requests from '../components/Requests'
import useAuth from '../hooks/useAuth'
import Separator from '../components/Separator'

const Contact = () => {

    const {user} = useAuth()

  return (
    <div className='main-container contact-container'>
        {user 
        ?
        <>
          <Separator 
            title={'Customer Info'}
          />
          <Requests />
        </>

        :
        <>
        <Separator 
          title={'Contact Us'}
        />
        <h2 className='contact-title'>We can help you financing</h2>
        <h2 className='contact-title'>Send us a message and we will contact you in the next 24 hrs</h2>
        <ContactForm />
        </>
        }
    </div>
  )
}

export default Contact