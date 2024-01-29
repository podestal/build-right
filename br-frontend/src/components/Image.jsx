import React from 'react'
import Delete from './Delete'
import useAuth from '../hooks/useAuth'

const Image = ({ image, service, review }) => {

    const {user} = useAuth()

    const serviceImage = {
        serviceId : service.id,
        imageId : image.id
    }

  return (
    <div>
        {console.log(service)}
        <img src={image.image} alt={service ? `${service.title}-${image.id}` : `${review.title}-${image.id}`} />
        {user &&
            <Delete 
                serviceImage={serviceImage}
            />}
    </div>
  )
}

export default Image