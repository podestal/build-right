import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getRequests } from '../api/api'
import Request from './Request'

const Requests = () => {

    const {data: requests, isLoading, isError, error} = useQuery({
        queryKey: ['requests'],
        queryFn: getRequests
    })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div>
        {requests.map(request => (
            <Request 
                key={request.id}
                request={request}
            />
        ))}
    </div>
  )
}

export default Requests