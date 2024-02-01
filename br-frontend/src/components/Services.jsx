import React from 'react'
import { getServices } from '../api/api'
import { useQuery } from '@tanstack/react-query'
import Service from './Service'
import HomeService from './HomeService'

const Services = () => {

    const url = window.location.href
    const route = url.split('/')[(url.split('/')).length - 1]

    const {data: services, isLoading, isError, error} = useQuery({
        queryKey: ['services'],
        queryFn: getServices
    })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div>
        {services.data.map(service => {
            if (route == 'services') {
                return <Service 
                    key={service.id}
                    service={service}
                />
            } else {
                return <HomeService 
                    key={service.id}
                    service={service}
                />
            }
        })}
    </div>
  )
}

export default Services