import React, { useState } from 'react'
import CreateUpdateForm from './CreateUpdateForm'
import useAuth from '../hooks/useAuth'
import Delete from './Delete'
import Images from './Images'

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
                service={review}
            />
        </>
        }
    </div>
  )
}

export default Review