import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createReview, updateReview } from '../api/api'

const ReviewForm = ({ review, setEdit }) => {

    const queryClient = useQueryClient()
    const [customer, setCustomer] = useState(review?.customer_name || "")
    const [title, setTitle] = useState(review?.title || "")
    const [description, setDescription] = useState(review?.description || "")

    const {mutate: update} = useMutation({
        mutationFn: data => updateReview(data),
        onSuccess: queryClient.invalidateQueries(['reviews'])
    })

    const {mutate: create} = useMutation({
        mutationFn: data => createReview(data),
        onSuccess: queryClient.invalidateQueries(['reviews'])
    })

    const handleSubmit = e => {
        if (review) {
            update({ id:review.id, updates: {customer_name: customer, title, description}})
        } else {
            e.preventDefault()
            create({ review: {customer_name: customer, title, description} })
            setCustomer("")
            setTitle("")
            setDescription("")
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Customer Name'
            value={customer}
            onChange={e => setCustomer(e.target.value)}
        />
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
        <button type='submit'>{review ? "Update" : "Create"}</button>
    </form>
  )
}

export default ReviewForm