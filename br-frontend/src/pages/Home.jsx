import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Separator from '../components/Separator'

const Home = () => {
  return (
    <>
      <div className='hero'>
        <div className='main-container'>
          <Header />
          <dir className='hero-content'>
            <h1>In Buffalo Home Builder we care about you, your family and your home. You dream it, we make it true.</h1>
            <Link to={'/contact'} className='btn-primary '>Get a quote</Link>
          </dir>
        </div>
      </div>
      <div className='main-container'>
        <Separator 
          title={'Services'}
        />
        <Services />
        <Separator 
          title={'Testimonials'}
        />
        <Reviews />
      </div>
    </>

  )
}

export default Home