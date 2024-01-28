import React, { useState } from 'react'

const Request = ({ request }) => {

    const [completed, setCompleted] = useState(request?.completed)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(completed)
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
            />
            <button>Update</button>
        </form>
    </div>
  )
}

export default Request