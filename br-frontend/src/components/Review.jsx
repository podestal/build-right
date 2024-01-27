import React, { useState } from 'react'
import CreateUpdateForm from './CreateUpdateForm'
import { deleteReview } from '../api/api'
import useAuth from '../hooks/useAuth'
import useMutate from '../hooks/useMutate'
import Delete from './Delete'

export const Review = ({ review }) => {

    const [edit, setEdit] = useState(false)
    const {user} = useAuth()

    const {mutate} = useMutate(deleteReview, 'reviews')


    const handleDelete = () => {
        mutate({ id: review.id, access: user.access })
    }

  return (
    <div>
        {edit 
        ? 
        <>
            <CreateUpdateForm 
                review={review}
                setEdit={setEdit}
            />
        </>
        :
        <>
            <h2>{review.customer_name}</h2>
            <h3>{review.title}</h3>
            <p>{review.description}</p>
            {user && 
            <>
                <button onClick={e => setEdit(prev => !prev)}>Edit</button>
                <Delete 
                    review={review}
                    access={user.access}
                />
            </>}
        </>
        }
    </div>
  )
}

export default Review