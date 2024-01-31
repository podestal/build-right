import React from 'react'
import Services from '../components/Services'
import Header from '../components/Header'
import CreateUpdateForm from '../components/CreateUpdateForm'
import useAuth from '../hooks/useAuth'

const ServicesPage = () => {

  const {user} = useAuth()

  return (
    <div className='main-container'>
        <Header />
        <Services />
        {user && <CreateUpdateForm />}
    </div>
  )
}

export default ServicesPage