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
        {console.log('images', service.title,service?.service_image)}
        <Carousel>
            {service?.service_image.map(image => <img src={image.image} alt={`${service.title}-${image.id}`}/>)}
        </Carousel>
    </div>
  )
}

export default HomeService