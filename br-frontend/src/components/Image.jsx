import React from 'react'
import Delete from './Delete'
import useAuth from '../hooks/useAuth'

const Image = ({ image, service, review }) => {

    const {user} = useAuth()

  return (
    <div className='image-container'>
        {/* {image?.state 
        ?
        <>
            <h2>{image.state == 'B' ? 'Before' : 'After'}</h2>
            <img src={image.image} alt={service ? `${service.title}-${image.id}` : `${review.title}-${image.id}`} />
            {user &&
            <Delete 
                reviewId={review?.id}
                serviceId={service?.id}
                imageId={image.id}
            />}
        
        </>
        :
        <>
            <img src={image.image} alt={service ? `${service.title}-${image.id}` : `${review.title}-${image.id}`} />
            {user &&
            <Delete 
                reviewId={review.id}
                serviceId={service.id}
                imageId={image.id}
            />}
        </>
        } */}
        {image?.state &&  <h3>{image.state == 'B' ? 'Before' : 'After'}</h3>}
        <img 
            src={image.image} alt={service ? `${service.title}-${image.id}` : `${review.title}-${image.id}`} 
            className={service ? 'service-img' : 'review-img'}
        />
            {user &&
            <Delete 
                reviewId={review?.id}
                serviceId={service?.id}
                imageId={image.id}
            />}
    </div>
  )
}

export default Image