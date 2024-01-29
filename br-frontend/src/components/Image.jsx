import React from 'react'
import Delete from './Delete'

const Image = ({ image, service }) => {

    const serviceImage = {
        serviceId : service.id,
        imageId : image.id
    }

  return (
    <div>
        {console.log(service)}
        <img src={image.image} alt={`${service.title}-${image.id}`} />
        <Delete 
            serviceImage={serviceImage}
        />
    </div>
  )
}

export default Image