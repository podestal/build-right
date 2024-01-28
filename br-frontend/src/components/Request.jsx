import React from 'react'

const Request = ({ request }) => {
  return (
    <div>
        <h2>{request.title}</h2>
        <p>{request.message}</p>
        <p>Customer: {request?.name}</p>
        <p>Email: {request?.email}</p>
        <p>Phone: {request?.phone}</p>
    </div>
  )
}

export default Request