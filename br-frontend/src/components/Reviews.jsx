import React from 'react'
import Review from './Review'
import { useQuery } from '@tanstack/react-query'
import { getReviews } from '../api/api'
import CreateUpdateForm from './CreateUpdateForm'
import useAuth from '../hooks/useAuth'

const Reviews = () => {

    const {user} = useAuth()

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
        {user && <CreateUpdateForm />}
    </div>
  )
}

export default Reviews