import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getReviews } from './api/api'

const App = () => {

  const {data: reviews, isLoading, isError, error} = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews
  })

  if (isLoading) return <p>Loading ...</p>

  if (isError) return <p>{error.message}</p>

  return (
    <div>
      <h1>Build Right</h1>
      {reviews && reviews.map(review => (
        <div key={review.id}>
          <h2>{review.customer_name}</h2>
          <h3>{review.title}</h3>
          <p>{review.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App
