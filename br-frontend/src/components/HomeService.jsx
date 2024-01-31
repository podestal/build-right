import React from 'react'

import Images from './Images'

const HomeService = ({ service }) => {
  return (
    <div className='home-service-container'>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Images 
                images={service?.service_image}
                service={service}
        />
    </div>
  )
}

export default HomeService