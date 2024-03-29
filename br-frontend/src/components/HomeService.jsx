import React from 'react'
import Images from './Images'
import Carousel from 'react-elastic-carousel'

const HomeService = ({ service }) => {
  return (
    <div className='home-service-container'>
        <div className='home-service-info'>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        </div>
        <Carousel>
            {service?.service_image.map(image => <img className='carousel-img' src={image.image} alt={`${service.title}-${image.id}`}/>)}
        </Carousel>
    </div>
  )
}

export default HomeService