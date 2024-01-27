import React, { useState } from 'react'
import ReviewForm from './ReviewForm'
import useAuth from '../hooks/useAuth'

const Service = ({ service }) => {

    const [edit, setEdit] = useState(false)
    const {user} = useAuth()

  return (
    <div>
        {/* <h2>{service.title}</h2>
        <p>{service.description}</p>
        <button>Edit</button>
        <button>Delete</button> */}
        {edit 
        ? 
        <>
            <ReviewForm 
                service={service}
                setEdit={setEdit}
            />
        </>
        :
        <>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {user && 
            <>
                <button onClick={e => setEdit(prev => !prev)}>Edit</button>
                <button>Delete</button>
            </>}
        </>
        }
    </div>
  )
}

export default Service