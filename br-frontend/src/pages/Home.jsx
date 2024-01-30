import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='hero'>
      <div className='main-container'>
      <Header />
      <dir className='hero-content'>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem corporis suscipit </h1>
        <Link to={'/contact'} className='btn-primary '>Get a quote</Link>
      </dir>
      </div>
    </div>
  )
}

export default Home