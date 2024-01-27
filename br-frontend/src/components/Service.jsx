import React, { useState } from 'react'
import CreateUpdateForm from './CreateUpdateForm'
import useAuth from '../hooks/useAuth'
import Delete from './Delete'

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
        </>
        }
    </div>
  )
}

export default Service