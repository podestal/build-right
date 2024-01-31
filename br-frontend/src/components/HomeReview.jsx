import React from 'react'
import Images from './Images'

const HomeReview = ({ review }) => {
  return (
    <div className='review-container'>
        <h2>{review.customer_name}</h2>
        <h3>{review.title}</h3>
        <p>{review.description}</p>
        <Images 
            images={review?.review_image}
            review={review}
        />
    </div>
  )
}

export default HomeReview