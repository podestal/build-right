import React, { useState } from 'react'
import useMutate from '../hooks/useMutate'
import { updateRequest } from '../api/api'
import Delete from './Delete'

const Request = ({ request }) => {

    const [completed, setCompleted] = useState(request?.completed)

    const {mutate: update} = useMutate(updateRequest, 'requests')

    const handleSubmit = e => {
        e.preventDefault()
        update({ id:request.id, updates: {completed} })
    }

  return (
    <div>
        <h2>{request.title}</h2>
        <p>{request.message}</p>
        <p>Customer: {request?.name}</p>
        <p>Email: {request?.email}</p>
        <p>Phone: {request?.phone}</p>
        <form onSubmit={handleSubmit}>
            <input 
                type='checkbox'
                value={completed}
                onChange={e => setCompleted(!completed)}
                checked={completed}
            />
            <button>Update</button>
        </form>
        <Delete 
            request={request}
        />
    </div>
  )
}

export default Request