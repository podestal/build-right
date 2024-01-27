import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createService } from '../api/api'
import useAuth from '../hooks/useAuth'

const ServiceForm = ({ service }) => {

    const [title, setTitle] = useState(service?.title || "")
    const [description, setDescription] = useState(service?.description || "")

    const queryClient = useQueryClient()
    const {user} = useAuth()
    const {mutate: create} = useMutation({
        mutationFn: data => createService(data),
        onSuccess: queryClient.invalidateQueries(['services'])
    })

    const handleSubmit = e => {
        e.preventDefault()
        create({ service: {
            title,
            description
        }, access: user.access})
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Service Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <textarea 
            type='text'
            placeholder='Service Description'
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <button type='submit'>{service ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default ServiceForm