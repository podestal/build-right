import React from 'react'
import Review from './Review'
import HomeReview from './HomeReview'
import { useQuery } from '@tanstack/react-query'
import { getReviews } from '../api/api'
import useAuth from '../hooks/useAuth'
import Carousel from 'react-elastic-carousel'

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
    <div>
        {route == 'home' &&        
            <Carousel>
                {reviews.data.map(review => (
                    <HomeReview 
                        key={review.id}
                        review={review}
                    />))}
            </Carousel>}
        {route == 'testimonials' && reviews.data.map(review => (
                <Review 
                    key={review.id}
                    review={review}
                />))}
    </div>
  )
}

export default Reviews