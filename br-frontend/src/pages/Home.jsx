import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Separator from '../components/Separator'

const Home = () => {
  return (
    <>
      <div className='hero'>
          {/* <Header /> */}
          <div className='hero-content'>
            <h1>In Buffalo Home Builder we care about you, your family and your home. You dream it, we make it true.</h1>
            <Link to={'/contact'} className='btn-primary '>Get a quote</Link>
          </div>
      </div>
      <div className='main-container'>
        <Separator 
          title={'Services'}
        />
        <Services />
        {/* <Separator 
          title={'Our Vision'}
        />
        <p>Allow Buffalo Home Builder to be your partner in transforming your space into a functional and captivating environment. Trust us to deliver excellence, quality, and professionalism every step of the way.</p> */}
        <Separator 
          title={'Testimonials'}
        />
        <Reviews />
      </div>
    </>

  )
}

export default Home