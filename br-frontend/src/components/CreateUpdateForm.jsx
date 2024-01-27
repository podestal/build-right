import React, { useState } from 'react'
import { createReview, updateReview, createService, updateService } from '../api/api'
import useAuth from '../hooks/useAuth'
import useMutate from '../hooks/useMutate'

const CreateUpdateForm = ({ review, setEdit, service }) => {

    const [customer, setCustomer] = useState(review?.customer_name || "")
    const [title, setTitle] = useState(review?.title || service?.title || "")
    const [description, setDescription] = useState(review?.description || service?.description || "")
    const {user} = useAuth()
    const url = window.location.href
    const route = url.split('/')[(url.split('/')).length - 1]


    const {mutate: reviewUpdate} = useMutate(updateReview, 'reviews')
    const {mutate: reviewCreate} = useMutate(createReview, 'reviews')
    const {mutate: serviceCreate} = useMutate(createService, 'services')
    const {mutate: serviceUpdate} = useMutate(updateService, 'services')

    const handleSubmit = e => {
        e.preventDefault()
        if (route == 'services') {
            if (service) {
                serviceUpdate({ id:service.id, updates: {title, description}, access: user.access})
                setEdit(false)
            } else {
                console.log('creating')
                serviceCreate({ service: {title, description}, access: user.access })
                setTitle("")
                setDescription("")
            }
        }
        else {
            if (review) {
                reviewUpdate({ id:review.id, updates: {customer_name: customer, title, description}, access: user.access})
                setEdit(false)
            } else {
                reviewCreate({ review: {customer_name: customer, title, description}, access: user.access })
                setCustomer("")
                setTitle("")
                setDescription("")
            }
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        {route == 'testimonials' &&         
        <input 
            type='text'
            placeholder='Customer Name'
            value={customer}
            onChange={e => setCustomer(e.target.value)}
        />}
        <input 
            type='text'
            placeholder='Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <textarea 
            type='text'
            placeholder='Description'
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <button type='submit'>{review || service ? "Update" : "Create"}</button>
    </form>
  )
}

export default CreateUpdateForm