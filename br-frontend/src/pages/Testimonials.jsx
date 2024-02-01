import React from 'react'
import Reviews from '../components/Reviews'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'
import CreateUpdateForm from '../components/CreateUpdateForm'

const Testimonials = () => {

  const {user} = useAuth()

  return (
    <div className='main-container'>
        <Reviews />
        {user && <CreateUpdateForm />} 
    </div>
  )
}

export default Testimonials