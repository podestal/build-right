import React from 'react'
import Review from './Review'
import { useQuery } from '@tanstack/react-query'
import { getReviews } from '../api/api'
import ReviewForm from './ReviewForm'

const Reviews = () => {

    const {data: reviews, isLoading, isError, error} = useQuery({
        queryKey: ['reviews'],
        queryFn: getReviews
      })
    
      if (isLoading) return <p>Loading ...</p>
    
      if (isError) return <p>{error.message}</p>

  return (
    <div>
        {reviews && reviews.map(review => (
            <Review 
                key={review.id}
                review={review}
            />
        ))}
        <ReviewForm />
    </div>
  )
}

export default Reviews