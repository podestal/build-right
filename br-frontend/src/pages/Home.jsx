import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='hero'>
      <dir className='hero-content'>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem corporis suscipit </h1>
        <Link to={'/contact'} className='btn-primary '>Get a quote</Link>
      </dir>
    </div>
  )
}

export default Home