import React from 'react'
import { getServices } from '../api/api'
import { useQuery } from '@tanstack/react-query'
import Service from './Service'

const Services = () => {

    const {data: services, isLoading, isError, error} = useQuery({
        queryKey: ['services'],
        queryFn: getServices
    })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div>
        {services.map(service => (
            <Service 
                key={service.id}
                service={service}
            />
        ))}
    </div>
  )
}

export default Services