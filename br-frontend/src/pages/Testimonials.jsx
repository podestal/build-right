import React from 'react'
import Reviews from '../components/Reviews'
import useAuth from '../hooks/useAuth'
import CreateUpdateForm from '../components/CreateUpdateForm'
import Separator from '../components/Separator'

const Testimonials = () => {

  const {user} = useAuth()

  return (
    <div className='main-container'>
        <Reviews />
        {user &&          
          <>
            <Separator 
              title={'Reviews Form'}
            />
            <CreateUpdateForm />
          </>} 
    </div>
  )
}

export default Testimonials