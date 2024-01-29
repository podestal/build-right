import React, { useState } from 'react'
import CreateUpdateForm from './CreateUpdateForm'
import useAuth from '../hooks/useAuth'
import Delete from './Delete'
import Images from './Images'
import ImageForm from './ImageForm'

const Service = ({ service }) => {

    const [edit, setEdit] = useState(false)
    const {user} = useAuth()

  return (
    <div>
        {edit 
        ? 
        <>
            <CreateUpdateForm 
                service={service}
                setEdit={setEdit}
            />
            <Images 
                images={service?.service_image}
                service={service}
            />
            <ImageForm 
                id={service.id}
            />
        </>
        :
        <>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Images 
                images={service?.service_image}
                service={service}
            />
            {user && 
            <>
                <button onClick={e => setEdit(prev => !prev)}>Edit</button>
                <Delete 
                    service={service}
                    access={user.access}
                />
            </>}
        </>
        }
    </div>
  )
}

export default Service