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
    <div className='service-container'>
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
                serviceId={service.id}
            />
        </>
        :
        <>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {user && 
            <>
                <button onClick={e => setEdit(prev => !prev)}>Edit</button>
                <Delete 
                    service={service}
                    access={user.access}
                />
            </>}
            <Images 
                images={service?.service_image}
                service={service}
            />
        </>
        }
    </div>
  )
}

export default Service