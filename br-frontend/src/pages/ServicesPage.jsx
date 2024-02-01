import React from 'react'
import Services from '../components/Services'
import CreateUpdateForm from '../components/CreateUpdateForm'
import useAuth from '../hooks/useAuth'
import Separator from '../components/Separator'

const ServicesPage = () => {

  const {user} = useAuth()

  return (
    <div className='main-container'>
        <Services />
        {user && 
          <>
            <Separator 
              title={'Service Form'}
            />
            <CreateUpdateForm />
          </>}
    </div>
  )
}

export default ServicesPage