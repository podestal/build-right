import React from 'react'
import Review from './Review'
import HomeReview from './HomeReview'
import { useQuery } from '@tanstack/react-query'
import { getReviews } from '../api/api'
import CreateUpdateForm from './CreateUpdateForm'
import useAuth from '../hooks/useAuth'

const Reviews = () => {

    const {user} = useAuth()
    const url = window.location.href
    const route = url.split('/')[(url.split('/')).length - 1]

    const {data: reviews, isLoading, isError, error} = useQuery({
        queryKey: ['reviews'],
        queryFn: getReviews
      })
    
      if (isLoading) return <p>Loading ...</p>
    
      if (isError) return <p>{error.message}</p>

  return (
    <div className='main-container'>
        {reviews && reviews.map(review => {
            if (route == 'testimonials') {
                return <Review 
                key={review.id}
                review={review}
                />
            } else {
                return <HomeReview 
                key={review.id}
                review={review}
                />
            }
        })}
        {user && <CreateUpdateForm />}
    </div>
  )
}

export default Reviews