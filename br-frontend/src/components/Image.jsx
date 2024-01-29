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
        {image?.state 
        ?
        <>
            <h2>Before</h2>
            {image?.state == 'B' && <img src={image.image} alt={service ? `${service.title}-${image.id}` : `${review.title}-${image.id}`} />}
            <h2>After</h2>
            {image?.state == 'A' && <img src={image.image} alt={service ? `${service.title}-${image.id}` : `${review.title}-${image.id}`} />}
            {/* <h2>{image.state == 'B' ? 'Before' : 'After'}</h2>
            <img src={image.image} alt={service ? `${service.title}-${image.id}` : `${review.title}-${image.id}`} />
            {user &&
            <Delete 
                serviceImage={serviceImage}
            />} */}
        
        </>
        :
        <>
            <img src={image.image} alt={service ? `${service.title}-${image.id}` : `${review.title}-${image.id}`} />
            {user &&
            <Delete 
                serviceImage={serviceImage}
            />}
        </>
        }
    </div>
  )
}

export default Image