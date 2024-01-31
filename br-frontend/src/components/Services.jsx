import React from 'react'
import { getServices } from '../api/api'
import { useQuery } from '@tanstack/react-query'
import Service from './Service'
import CreateUpdateForm from './CreateUpdateForm'
import useAuth from '../hooks/useAuth'
import HomeService from './HomeService'

const Services = () => {

    const {user} = useAuth()
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
        <h2>Services</h2>
        {services.map(service => {
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