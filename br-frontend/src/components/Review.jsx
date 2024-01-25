import React, { useState } from 'react'
import ReviewForm from './ReviewForm'
import { deleteReview } from '../api/api'
import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

export const Review = ({ review }) => {

    const [edit, setEdit] = useState(false)
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationFn: data => deleteReview(data),
        onSuccess: queryClient.invalidateQueries(['reviews'])
    })

    const handleDelete = () => {
        mutate({ id: review.id })
    }

  return (
    <div>
        {edit 
        ? 
        <>
            <ReviewForm 
                review={review}
                setEdit={setEdit}
            />
        </>
        :
        <>
            <h2>{review.customer_name}</h2>
            <h3>{review.title}</h3>
            <p>{review.description}</p>
            <button onClick={e => setEdit(prev => !prev)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </>
        }
    </div>
  )
}

export default Review