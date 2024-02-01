import React from 'react'
import Header from '../components/Header'
import Separator from '../components/Separator'

const Process = () => {
  return (
    <div className='main-container '>
        <Header />
        <section className='process-container'>
            <Separator 
                title={'The Process'}
            />
            <div className='process-item initial left'>
                <p>Initial Consultation</p>
            </div>
            <div className="process-item layout right">
                <p>Layout Planning</p>
            </div>
            <div className="process-item documents left">
                <p>Documents Preparation</p>
            </div>
            <div className="process-item material right">
                <p>Material Selection</p>
            </div>
            <div className="process-item construction left">
                <p>Construction</p>
            </div>
            <div className="process-item walkthrough right">
                <p>Final Walkthrough</p>
            </div>
            <div className="process-item cleaning left">
                <p>Cleaning</p>
            </div>
            <div className="process-item celebrate right">
                <p>Celebrate</p>
            </div>
        </section>
    </div>
  )
}

export default Process