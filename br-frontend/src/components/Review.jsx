import React, { useState } from 'react'
import CreateUpdateForm from './CreateUpdateForm'
import useAuth from '../hooks/useAuth'
import Delete from './Delete'
import Images from './Images'
import ImageForm from './ImageForm'

export const Review = ({ review }) => {

    const [edit, setEdit] = useState(false)
    const {user} = useAuth()

  return (
    <div>
        {edit 
        ? 
        <>
            <CreateUpdateForm 
                review={review}
                setEdit={setEdit}
            />
            <Images 
                images={review?.review_image}
                review={review}
            />
            <h2>Before</h2>
            <ImageForm 
                reviewId={review.id}
                state='B'
            />
            <h2>After</h2>
            <ImageForm 
                reviewId={review.id}
                state='A'
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
            <Images 
                images={review?.review_image}
                review={review}
            />
        </>
        }
    </div>
  )
}

export default Review